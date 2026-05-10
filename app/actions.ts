"use server"

import {neon} from "@neondatabase/serverless";
import {headers} from "next/headers"
import {challengeLimiter} from "@/lib/ratelimit"
import { unstable_cache } from "next/cache"
import {Challenge, LeaderboardUser} from "@/lib/types";

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