"use server"

import {neon} from "@neondatabase/serverless";
import {headers} from "next/headers"
import {challengeLimiter} from "@/lib/ratelimit"
import { unstable_cache } from "next/cache"
import {Challenge, UserStats, PublicProfile, ChallengeStats} from "@/lib/types";

export async function submit_challenge(formData:
                      {
                          repoUrl: string,
                          name: string,
                          difficulty: number,
                          description: string,
                          language: string,
                          email: string,
                      }) {
    const ip =
        (await headers()).get("x-forwarded-for") ??
        "unknown"

    const { success } = await challengeLimiter.limit(ip)

    if (!success) {
        return { success: false, message: "Rate limited. Try again in 5 minutes" }
    }

    if (!formData.repoUrl.includes("github.com")) {
        return {success: false, message: "Invalid GitHub link"};
    }

    if (formData.name.length < 5 || formData.name.length > 100) {
        return {success: false, message: "Name must be at least 5 characters long and less than 100 characters"};
    }

    if (formData.description.length < 10 || formData.description.length > 200) {
        return {success: false, message: "Description must be at least 10 characters long and less than 200 characters"};
    }

    if (formData.difficulty > 10 || formData.difficulty < 1){
        return {success: false, message: "Difficulty must be an integer between 1 and 10 (inclusive)"};
    }

    if (!formData.email.includes("@")){
        return {success: false, message: "Invalid email address"};
    }

    if (formData.language.length < 2 || formData.language.length > 25) {
        return {success: true, message: "Language must be at least 2 characters long and less than 25 characters"}
    }

    const sql = neon(process.env.NEON_URL as string);
    await sql`INSERT INTO review_challenges (github_repo_url, challenge_name, difficulty, language, email, description) VALUES (${formData['repoUrl']}, ${formData['name']}, ${formData['difficulty']}, ${formData['language']}, ${formData['email']}, ${formData['description']})`;
    return {status: true, message: ""}
}

const getCachedChallenges = unstable_cache(
    async (): Promise<(Challenge & { github_username: string })[]> => {
        const sql = neon(process.env.NEON_URL as string)

        const rows = await sql`
            SELECT
                c.*,
                u.github_username
            FROM challenges c
            JOIN users u ON c.creator_id = u.id
        `

        return rows as (Challenge & { github_username: string })[]
    },
    ["all-challenges"],
    { revalidate: 60 }
)

export async function get_all_challenges() {
    return getCachedChallenges()
}

const getCachedLeaderboard = unstable_cache(
    async () => {
        const sql = neon(process.env.NEON_URL as string)

        const rows = await sql`
            SELECT
                u.id,
                u.github_username,

                -- score: sum difficulty for successful unique solves
                COALESCE(
                        SUM(DISTINCT CASE
                                         WHEN ca.status = 'success' THEN c.difficulty
                            END),
                        0) AS score,

                -- solved challenges
                COUNT(DISTINCT CASE
                                   WHEN ca.status = 'success' THEN ca.challenge_id
                    END) AS challenges,

                -- total unique attempts
                COUNT(DISTINCT ca.challenge_id) AS challenges_attempted,

                -- success rate
                CASE
                    WHEN COUNT(DISTINCT ca.challenge_id) = 0 THEN 0
                    ELSE ROUND(
                            (
                                COUNT(DISTINCT CASE
                                                   WHEN ca.status = 'success' THEN ca.challenge_id
                                    END)::numeric
                            /
                            COUNT(DISTINCT ca.challenge_id)::numeric
                                ) * 100
                         )
                    END AS success_rate

            FROM users u
                     LEFT JOIN challenge_attempts ca ON u.id = ca.user_id
                     LEFT JOIN challenges c ON ca.challenge_id = c.id

            GROUP BY u.id, u.github_username
            ORDER BY score DESC
                LIMIT 20
        `

        return rows.map((row: any, index: number) => ({
            rank: index + 1,
            username: row.github_username,
            score: parseInt(row.score),
            challengesSolved: Number(row.challenges),
            challengesAttempted: Number(row.challenges_attempted),
            successRate: Number(row.success_rate),
        }))
    },
    ["leaderboard"],
    { revalidate: 60 }
)

export async function get_leaderboard() {
    return getCachedLeaderboard()
}

const getCachedUserStats = unstable_cache(
    async (githubUserId: number): Promise<UserStats | null> => {
        const sql = neon(process.env.NEON_URL as string)

        const users = await sql`
            SELECT id, github_username, created_at
            FROM users
            WHERE github_user_id = ${githubUserId}
            LIMIT 1
        `

        if (users.length === 0) return null

        const user = users[0]

        const stats = await sql`
            SELECT
                COALESCE(SUM(DISTINCT CASE
                    WHEN ca.status = 'success' THEN c.difficulty
                END), 0) AS score,

                COUNT(DISTINCT CASE
                    WHEN ca.status = 'success' THEN ca.challenge_id
                END) AS solved,

                COUNT(DISTINCT ca.challenge_id) AS attempted

            FROM challenge_attempts ca
            LEFT JOIN challenges c ON ca.challenge_id = c.id
            WHERE ca.user_id = ${user.id}
        `

        const score = Number(stats[0].score)
        const solved = Number(stats[0].solved)
        const attempted = Number(stats[0].attempted)

        const successRate =
            attempted === 0 ? 0 : Math.round((solved / attempted) * 100)

        const inProgress = await sql`
            SELECT DISTINCT c.name, c.difficulty, MIN(ca.submitted_at) as started_at
            FROM challenge_attempts ca
            JOIN challenges c ON ca.challenge_id = c.id
            WHERE ca.user_id = ${user.id}
            AND ca.challenge_id NOT IN (
                SELECT challenge_id
                FROM challenge_attempts
                WHERE user_id = ${user.id}
                AND status = 'success'
            )
            GROUP BY c.name, c.difficulty
            ORDER BY started_at DESC
        `

        const completed = await sql`
            SELECT
                c.name,
                c.difficulty,
                MAX(ca.submitted_at) as completed_at
            FROM challenge_attempts ca
            JOIN challenges c ON ca.challenge_id = c.id
            WHERE ca.user_id = ${user.id}
            AND ca.status = 'success'
            GROUP BY c.name, c.difficulty
            ORDER BY completed_at DESC
        `

        const rankResult = await sql`
            WITH leaderboard AS (
                SELECT
                    u.id,
                    COALESCE(SUM(DISTINCT CASE
                        WHEN ca.status = 'success' THEN c.difficulty
                    END), 0) AS score
                FROM users u
                LEFT JOIN challenge_attempts ca ON u.id = ca.user_id
                LEFT JOIN challenges c ON ca.challenge_id = c.id
                GROUP BY u.id
            )
            SELECT COUNT(*) + 1 AS rank
            FROM leaderboard
            WHERE score > ${score}
        `

        const rank = Number(rankResult[0].rank)

        return {
            username: user.github_username,
            github_username: user.github_username,
            joinedDate: new Date(user.created_at).toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
            }),

            totalScore: score,
            challengesCompleted: solved,
            challengesAttempted: attempted,
            challengesInProgress: inProgress.length,
            successRate,
            rank,

            // currentStreak: 0,   // streak logic requires date math, add later
            // longestStreak: 0,

            completedChallenges: completed.map((c: any) => ({
                name: c.name,
                difficulty: Number(c.difficulty),
                completedAt: c.completed_at.toISOString().split("T")[0],
            })),

            inProgressChallenges: inProgress.map((c: any) => ({
                name: c.name,
                difficulty: Number(c.difficulty),
                startedAt: c.started_at.toISOString().split("T")[0],
            })),
        }
    },
    ["user-stats"],
    { revalidate: 60 }
)

export async function get_user_stats(githubUserId: number) {
    return getCachedUserStats(githubUserId)
}

const getCachedProfile = unstable_cache(
    async (username: string): Promise<PublicProfile | null> => {
        const sql = neon(process.env.NEON_URL as string)

        const users = await sql`
            SELECT id, github_username, github_user_id, created_at
            FROM users
            WHERE github_username = ${username}
            LIMIT 1
        `

        if (users.length === 0) return null

        const user = users[0]

        const stats = await sql`
            SELECT
                COALESCE(SUM(DISTINCT CASE
                    WHEN ca.status = 'success' THEN c.difficulty
                END), 0) AS score,

                COUNT(DISTINCT CASE
                    WHEN ca.status = 'success' THEN ca.challenge_id
                END) AS solved,

                COUNT(DISTINCT ca.challenge_id) AS attempted

            FROM challenge_attempts ca
            LEFT JOIN challenges c ON ca.challenge_id = c.id
            WHERE ca.user_id = ${user.id}
        `

        const score = Number(stats[0].score)
        const solved = Number(stats[0].solved)
        const attempted = Number(stats[0].attempted)

        const successRate =
            attempted === 0 ? 0 : Math.round((solved / attempted) * 100)

        const createdCount = await sql`
            SELECT COUNT(*) AS created
            FROM challenges
            WHERE creator_id = ${user.id}
        `

        const challengesCreated = Number(createdCount[0].created)

        const rankResult = await sql`
            WITH leaderboard AS (
                SELECT
                    u.id,
                    COALESCE(SUM(DISTINCT CASE
                        WHEN ca.status = 'success' THEN c.difficulty
                    END), 0) AS score
                FROM users u
                LEFT JOIN challenge_attempts ca ON u.id = ca.user_id
                LEFT JOIN challenges c ON ca.challenge_id = c.id
                GROUP BY u.id
            )
            SELECT COUNT(*) + 1 AS rank
            FROM leaderboard
            WHERE score > ${score}
        `

        const rank = Number(rankResult[0].rank)

        const solvedChallenges = await sql`
            SELECT
                c.name,
                c.difficulty,
                MAX(ca.submitted_at) AS solved_at
            FROM challenge_attempts ca
            JOIN challenges c ON ca.challenge_id = c.id
            WHERE ca.user_id = ${user.id}
            AND ca.status = 'success'
            GROUP BY c.name, c.difficulty
            ORDER BY solved_at DESC
            LIMIT 10
        `

        const createdChallenges = await sql`
            SELECT
                c.name,
                c.difficulty,
                COUNT(DISTINCT ca.user_id) FILTER (WHERE ca.status = 'success') AS solves
            FROM challenges c
            LEFT JOIN challenge_attempts ca ON c.id = ca.challenge_id
            WHERE c.creator_id = ${user.id}
            GROUP BY c.name, c.difficulty
        `

        return {
            username: user.github_username,
            github_url: `https://github.com/${user.github_username}`,
            avatar_url: `https://avatars.githubusercontent.com/u/${user.github_user_id}?v=4`,
            joined: new Date(user.created_at).toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
            }),

            // badges: [], // will do badge system later

            stats: {
                challenges_solved: solved,
                challenges_created: challengesCreated,
                total_score: score,
                rank,
                success_rate: successRate,
            },

            solved_challenges: solvedChallenges.map((c: any) => ({
                name: c.name,
                difficulty: Number(c.difficulty),
                solved_at: c.solved_at.toISOString().split("T")[0],
            })),

            created_challenges: createdChallenges.map((c: any) => ({
                name: c.name,
                difficulty: Number(c.difficulty),
                solves: Number(c.solves),
            })),
        }
    },
    ["public-profile"],
    { revalidate: 60 }
)

export async function get_public_profile(username: string) {
    return getCachedProfile(username)
}

export async function get_challenge_by_slug(
    slug: string
): Promise<ChallengeStats | null> {

    const sql = neon(process.env.NEON_URL as string)

    return unstable_cache(
        async () => {
            const rows = await sql`
                SELECT
                    c.id,
                    c.name,
                    c.repo_name,
                    c.description,
                    c.language,
                    c.difficulty,
                    u.github_username AS creator_github,

                    COUNT(ca.id) AS attempts,
                    COUNT(DISTINCT ca.user_id)
                        FILTER (WHERE ca.status = 'success') AS solves

                FROM challenges c
                JOIN users u ON c.creator_id = u.id
                LEFT JOIN challenge_attempts ca
                    ON ca.challenge_id = c.id

                WHERE c.repo_name = ${slug}

                GROUP BY
                    c.id,
                    c.name,
                    c.repo_name,
                    c.description,
                    c.language,
                    c.difficulty,
                    u.github_username

                LIMIT 1
            `

            if (rows.length === 0) return null

            const row = rows[0]

            return {
                id: Number(row.id),
                name: row.name,
                repo_name: row.repo_name,
                description: row.description,
                language: row.language,
                difficulty: Number(row.difficulty),
                creator_github: row.creator_github,
                stats: {
                    attempts: Number(row.attempts),
                    solves: Number(row.solves),
                },
            }
        },
        ["challenge-by-slug", slug],
        { revalidate: 60 }
    )()
}