"use client"

import Link from "next/link"
import Image from "next/image"
import {PublicProfile} from "@/lib/types";

function getDifficultyLabel(d: number): string {
    if (d <= 3) return "Easy"
    if (d <= 6) return "Medium"
    return "Hard"
}

function getDifficultyColor(d: number): string {
    if (d <= 3) return "text-terminal-text"
    if (d <= 6) return "text-amber-500"
    return "text-diff-remove"
}

export default function UserPageComponent({
                                                       userStats,
                                                   }: {
    userStats: PublicProfile | null;
}) {
    if (userStats == null) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-2">User not found</h1>
                    <p className="text-muted-foreground mb-4">The user you are looking for does not exist.</p>
                    <Link href="/leaderboard" className="text-terminal-text hover:underline">
                        View leaderboard
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border">
                <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/recticode-icon.png"
                            alt="recticode"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="font-semibold text-foreground">recticode</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/challenges"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Challenges
                        </Link>
                        <Link
                            href="/leaderboard"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Leaderboard
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-12">
                {/* Profile header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
                    <img
                        src={userStats.avatar_url}
                        alt={userStats.username}
                        className="w-24 h-24 rounded-full border-2 border-border"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">Public Profile</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-foreground">@{userStats.username}</h1>
                            <a
                                href={userStats.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Joined {userStats.joined}</p>
                {/*        /!* Badges *!/*/}
                {/*        <div className="flex flex-wrap gap-2">*/}
                {/*            {userStats.badges.map((badge) => (*/}
                {/*                <span key={badge.name} className={`text-xs px-2 py-1 rounded ${badge.color}`}>*/}
                {/*  {badge.name}*/}
                {/*</span>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                    </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
                    <div className="bg-secondary/50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">{userStats.stats.total_score}</p>
                        <p className="text-xs text-muted-foreground">Total Score</p>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">#{userStats.stats.rank}</p>
                        <p className="text-xs text-muted-foreground">Rank</p>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">{userStats.stats.challenges_solved}</p>
                        <p className="text-xs text-muted-foreground">Solved</p>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">{userStats.stats.challenges_created}</p>
                        <p className="text-xs text-muted-foreground">Created</p>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-foreground">{userStats.stats.success_rate}%</p>
                        <p className="text-xs text-muted-foreground">Success Rate</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Solved challenges */}
                    <div>
                        <h2 className="font-semibold text-foreground mb-4">Recently solved</h2>
                        {userStats.solved_challenges.length > 0 ? (
                            <div className="space-y-3">
                                {userStats.solved_challenges.map((challenge) => (
                                    <Link
                                        key={challenge.name}
                                        href={`/challenges/${challenge.name}`}
                                        className="block border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-foreground">{challenge.name}</p>
                                                <p className="text-xs text-muted-foreground">{challenge.solved_at}</p>
                                            </div>
                                            <span className={`text-xs ${getDifficultyColor(challenge.difficulty)}`}>
                        {getDifficultyLabel(challenge.difficulty)}
                      </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">No challenges solved yet.</p>
                        )}
                    </div>

                    {/* Created challenges */}
                    <div>
                        <h2 className="font-semibold text-foreground mb-4">Challenges created</h2>
                        {userStats.created_challenges.length > 0 ? (
                            <div className="space-y-3">
                                {userStats.created_challenges.map((challenge) => (
                                    <Link
                                        key={challenge.name}
                                        href={`/challenges/${challenge.name}`}
                                        className="block border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-foreground">{challenge.name}</p>
                                                <p className="text-xs text-muted-foreground">{challenge.solves} solves</p>
                                            </div>
                                            <span className={`text-xs ${getDifficultyColor(challenge.difficulty)}`}>
                        {getDifficultyLabel(challenge.difficulty)}
                      </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="border border-border rounded-lg p-6 text-center">
                                <p className="text-sm text-muted-foreground mb-3">No challenges created yet.</p>
                                <Link href="/hackathon/challenge-sprint" className="text-sm text-terminal-text hover:underline">
                                    Submit a challenge
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
