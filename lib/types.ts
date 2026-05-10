export type Challenge = {
    id: number
    name: string
    repo_name: string
    description: string
    language: string
    difficulty: number
}

export type User = {
    id: number
    github_user_id: number
    github_username: string
    created_at: string
}

export type ReviewChallenge = {
    id: number
    github_repo_url: string
    challenge_name: string
    difficulty: number
    language: string
    email: string
    description: string
}

export type ChallengeAttemptRow = {
    id: number
    user_id: number
    challenge_id: number
    status: string
    submitted_at: string
}

export type ChallengeAttempt = {
    id: number
    user_id: number
    challenge_id: number
    status: string
    submitted_at: Date
}

export function mapChallengeAttempt(
    row: ChallengeAttemptRow
): ChallengeAttempt {
    return {
        ...row,
        submitted_at: new Date(row.submitted_at),
    }
}

export type LeaderboardUser = {
    rank: number
    username: string
    score: number
    challengesSolved: number
    challengesAttempted: number
    successRate: number
}