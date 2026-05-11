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