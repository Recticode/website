import Image from "next/image"
import {LeaderboardUser} from "@/lib/types";

export const metadata = {
    title: "Leaderboard | recticode",
    description: "See the top debuggers on recticode, ranked by difficulty-weighted score.",
}

export default function LeaderboardPageComponent({
                                                        leaderboard,
                                                    }: {
    leaderboard: LeaderboardUser[]
}) {
    return (
        <main className="min-h-screen bg-background">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
                    <a href="/">
                        <Image
                            src="/recticode-logo.png"
                            alt="recticode"
                            width={140}
                            height={32}
                            className="h-6 w-auto"
                        />
                    </a>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/sponsors/VulcanWM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            Sponsor
                        </a>
                        <a
                            href="https://github.com/recticode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </nav>

            <section className="pt-24 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-semibold text-foreground mb-2">
                            Leaderboard
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Ranked by difficulty-weighted score. Each challenge contributes its difficulty value (1-10) to your total.
                        </p>
                    </div>

                    {/* Top 3 Podium */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        {/* 2nd Place */}
                        <div className="bg-secondary/50 rounded-xl p-4 text-center mt-8">
                            <div className="w-12 h-12 mx-auto mb-3 bg-zinc-400/20 rounded-full flex items-center justify-center">
                                <span className="text-xl font-bold text-zinc-500">2</span>
                            </div>
                            <p className="font-medium text-foreground text-sm truncate">{leaderboard[1].username}</p>
                            <p className="text-2xl font-semibold text-foreground mt-1">{leaderboard[1].score}</p>
                            <p className="text-xs text-muted-foreground mt-1">{leaderboard[1].challengesSolved} challenges solved</p>
                        </div>

                        {/* 1st Place */}
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                            <div className="w-14 h-14 mx-auto mb-3 bg-amber-500/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-amber-500">1</span>
                            </div>
                            <p className="font-medium text-foreground truncate">{leaderboard[0].username}</p>
                            <p className="text-3xl font-semibold text-foreground mt-1">{leaderboard[0].score}</p>
                            <p className="text-xs text-muted-foreground mt-1">{leaderboard[0].challengesSolved} challenges solved</p>
                        </div>

                        {/* 3rd Place */}
                        <div className="bg-secondary/50 rounded-xl p-4 text-center mt-8">
                            <div className="w-12 h-12 mx-auto mb-3 bg-amber-700/20 rounded-full flex items-center justify-center">
                                <span className="text-xl font-bold text-amber-700">3</span>
                            </div>
                            <p className="font-medium text-foreground text-sm truncate">{leaderboard[2].username}</p>
                            <p className="text-2xl font-semibold text-foreground mt-1">{leaderboard[2].score}</p>
                            <p className="text-xs text-muted-foreground mt-1">{leaderboard[2].challengesSolved} challenges solved</p>
                        </div>
                    </div>

                    {/* Full Leaderboard Table */}
                    <div className="bg-secondary/50 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                            <tr className="border-b border-border">
                                <th className="text-left p-4 font-medium text-muted-foreground w-16">Rank</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">User</th>
                                <th className="text-right p-4 font-medium text-muted-foreground">Score</th>
                                <th className="text-right p-4 font-medium text-muted-foreground hidden sm:table-cell">Challenges Attempted</th>
                                <th className="text-right p-4 font-medium text-muted-foreground hidden sm:table-cell">Challenges Solved</th>
                                <th className="text-right p-4 font-medium text-muted-foreground hidden sm:table-cell">Success Rate</th>
                            </tr>
                            </thead>
                            <tbody>
                            {leaderboard.map((user, i) => (
                                <tr
                                    key={user.username}
                                    className={`${i !== leaderboard.length - 1 ? "border-b border-border" : ""}`}
                                >
                                {/*<tr*/}
                                {/*    key={user.username}*/}
                                {/*    className={`${i !== leaderboard.length - 1 ? "border-b border-border" : ""} ${user.isCurrentUser ? "bg-terminal-text/5" : ""}`}*/}
                                {/*>*/}
                                    <td className="p-4">
                                      <span className={`font-medium ${user.rank <= 3 ? "text-amber-500" : "text-muted-foreground"}`}>
                                        #{user.rank}
                                      </span>
                                    </td>
                                    <td className="p-4">
                                      <span className={`font-mono text-foreground`}>
                                        {user.username}
                                      </span>
                                    </td>
                                    {/*<td className="p-4">*/}
                                    {/*  <span className={`font-mono ${user.isCurrentUser ? "text-terminal-text font-medium" : "text-foreground"}`}>*/}
                                    {/*    {user.username}*/}
                                    {/*      {user.isCurrentUser && <span className="ml-2 text-xs text-muted-foreground">(you)</span>}*/}
                                    {/*  </span>*/}
                                    {/*</td>*/}
                                    <td className="p-4 text-right font-semibold text-foreground">{user.score}</td>
                                    <td className="p-4 text-right text-muted-foreground hidden sm:table-cell">{user.challengesAttempted}</td>
                                    <td className="p-4 text-right text-muted-foreground hidden sm:table-cell">{user.challengesSolved}</td>
                                    <td className="p-4 text-right text-muted-foreground hidden sm:table-cell">{user.successRate}%</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Scoring Info */}
                    <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            <span className="font-medium text-foreground">Scoring:</span> Each challenge has a difficulty from 1 (easiest) to 10 (hardest).
                            Your score is the sum of difficulty values for all completed challenges.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
