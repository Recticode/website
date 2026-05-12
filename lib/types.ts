export type Challenge = {
    id: number
    name: string
    repo_name: string
    description: string
    language: string
    difficulty: number
}

export type LeaderboardUser = {
    rank: number
    username: string
    score: number
    challengesSolved: number
    challengesAttempted: number
    successRate: number
}

export type UserStats = {
    username: string
    github_username: string
    joinedDate: string

    totalScore: number
    challengesCompleted: number
    challengesAttempted: number
    challengesInProgress: number
    successRate: number
    rank: number

    // currentStreak: number
    // longestStreak: number add later

    completedChallenges: {
        name: string
        difficulty: number
        completedAt: string
    }[]

    inProgressChallenges: {
        name: string
        difficulty: number
        startedAt: string
    }[]
}

export type PublicProfile = {
    username: string
    github_url: string
    avatar_url: string
    joined: string
    // badges: { name: string; color: string }[]

    stats: {
        challenges_solved: number
        challenges_created: number
        total_score: number
        rank: number
        success_rate: number
    }

    solved_challenges: {
        name: string
        difficulty: number
        solved_at: string
    }[]

    created_challenges: {
        name: string
        difficulty: number
        solves: number
    }[]
}

export type ChallengeStats = {
    id: number
    name: string
    repo_name: string
    description: string
    language: string
    difficulty: number
    creator_github: string
    stats: {
        attempts: number
        solves: number
    }
}