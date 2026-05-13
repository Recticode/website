"use client"

import Image from "next/image"
import {UserStats} from "@/lib/types";
import Link from "next/link";

export default function StatsLoggedInPageComponent({
                                                    userStats,
                                                }: {
    userStats: UserStats;
}) {
    return (
        <main className="min-h-screen bg-background">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
                    <Link href="/">
                        <Image
                            src="/recticode-logo.png"
                            alt="recticode"
                            width={140}
                            height={32}
                            className="h-6 w-auto"
                        />
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/leaderboard"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Leaderboard
                        </Link>
                        <Link
                            href="/stats"
                            className="text-xs text-foreground font-medium"
                        >
                            Your Stats
                        </Link>
                    </div>
                </div>
            </nav>

            <section className="pt-24 pb-16 px-6">
                <div className="mx-auto max-w-3xl">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-10">
                        <div>
                            <h1 className="text-3xl font-semibold text-foreground mb-2">
                                Dashboard
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Logged in as <span className="text-foreground">@{userStats.username}</span> · Member since {userStats.joinedDate}
                            </p>
                        </div>
                        <a
                            href={`/u/${userStats.github_username}`}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1.5 rounded-lg"
                        >
                            View public profile
                        </a>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="bg-secondary/50 rounded-xl p-4">
                            <p className="text-2xl font-semibold text-foreground">{userStats.totalScore}</p>
                            <p className="text-xs text-muted-foreground mt-1">Total Score</p>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                            <p className="text-2xl font-semibold text-foreground">{userStats.challengesCompleted}</p>
                            <p className="text-xs text-muted-foreground mt-1">Solved</p>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                            <p className="text-2xl font-semibold text-foreground">{userStats.successRate}%</p>
                            <p className="text-xs text-muted-foreground mt-1">Success Rate</p>
                        </div>
                        <div className="bg-secondary/50 rounded-xl p-4">
                            <p className="text-2xl font-semibold text-foreground">#{userStats.rank}</p>
                            <p className="text-xs text-muted-foreground mt-1">Rank</p>
                        </div>
                    </div>

                    {/* Private stats - only visible to logged-in user */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        <div className="border border-border rounded-xl p-4">
                            <p className="text-2xl font-semibold text-foreground">{userStats.challengesAttempted}</p>
                            <p className="text-xs text-muted-foreground mt-1">Attempted</p>
                        </div>
                        <div className="border border-border rounded-xl p-4">
                            <p className="text-2xl font-semibold text-foreground">{userStats.challengesInProgress}</p>
                            <p className="text-xs text-muted-foreground mt-1">In Progress</p>
                        </div>
                        {/*<div className="border border-border rounded-xl p-4">*/}
                        {/*    <p className="text-2xl font-semibold text-foreground">{userStats.currentStreak}</p>*/}
                        {/*    <p className="text-xs text-muted-foreground mt-1">Current Streak</p>*/}
                        {/*</div>*/}
                        {/*<div className="border border-border rounded-xl p-4">*/}
                        {/*    <p className="text-2xl font-semibold text-foreground">{userStats.longestStreak}</p>*/}
                        {/*    <p className="text-xs text-muted-foreground mt-1">Longest Streak</p>*/}
                        {/*</div>*/}
                    </div>

                    {/*/!* Badges *!/*/}
                    {/*{userStats.badges.length > 0 && (*/}
                    {/*    <div className="mb-10">*/}
                    {/*        <h2 className="font-semibold text-foreground mb-4">Badges</h2>*/}
                    {/*        <div className="flex flex-wrap gap-3">*/}
                    {/*            {userStats.badges.map((badge) => (*/}
                    {/*                <div*/}
                    {/*                    key={badge.id}*/}
                    {/*                    className="inline-flex items-center gap-2 px-3 py-2 bg-terminal text-terminal-text rounded-lg text-sm"*/}
                    {/*                    title={badge.description}*/}
                    {/*                >*/}
                    {/*                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">*/}
                    {/*                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />*/}
                    {/*                    </svg>*/}
                    {/*                    {badge.name}*/}
                    {/*                </div>*/}
                    {/*            ))}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    {/* In Progress Challenges - Private */}
                    {userStats.inProgressChallenges.length > 0 && (
                        <div className="mb-10">
                            <h2 className="font-semibold text-foreground mb-4">In Progress</h2>
                            <div className="space-y-3">
                                {userStats.inProgressChallenges.map((challenge) => (
                                    <a
                                        key={challenge.name}
                                        href={`/challenges/${challenge.name}`}
                                        className="flex items-center justify-between border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors"
                                    >
                                        <div>
                                            <p className="font-mono text-foreground">{challenge.name}</p>
                                            <p className="text-xs text-muted-foreground">Started {challenge.startedAt}</p>
                                        </div>
                                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                                            challenge.difficulty >= 0.7
                                                ? "bg-diff-remove/20 text-diff-remove"
                                                : challenge.difficulty >= 0.4
                                                    ? "bg-amber-500/20 text-amber-600"
                                                    : "bg-diff-add/20 text-diff-add"
                                        }`}>
                      {challenge.difficulty.toFixed(1)}
                    </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Completed Challenges */}
                    <div>
                        <h2 className="font-semibold text-foreground mb-4">Completed Challenges</h2>
                        <div className="bg-secondary/50 rounded-xl overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left p-4 font-medium text-muted-foreground">Challenge</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Difficulty</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground hidden sm:table-cell">Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {userStats.completedChallenges.map((challenge, i) => (
                                    <tr key={challenge.name} className={i !== userStats.completedChallenges.length - 1 ? "border-b border-border" : ""}>
                                        <td className="p-4 font-mono text-foreground">{challenge.name}</td>
                                        <td className="p-4">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                            challenge.difficulty >= 0.7
                                ? "bg-diff-remove/20 text-diff-remove"
                                : challenge.difficulty >= 0.4
                                    ? "bg-amber-500/20 text-amber-600"
                                    : "bg-diff-add/20 text-diff-add"
                        }`}>
                          {challenge.difficulty.toFixed(1)}
                        </span>
                                        </td>
                                        <td className="p-4 text-muted-foreground hidden sm:table-cell">{challenge.completedAt}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Score Explanation */}
                    <div className="mt-10 p-4 bg-secondary/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            <span className="font-medium text-foreground">How scoring works:</span> Your total score is the sum of difficulty values (0.0-1.0) for each completed challenge.
                            Higher difficulty challenges contribute more to your score.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}