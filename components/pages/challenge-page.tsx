import Link from "next/link"
import Image from "next/image"
import {ChallengeStats} from "@/lib/types";
import {getDifficultyColor, getDifficultyLabel, getDifficultyBg} from "@/lib/difficulty";

export default function ChallengePageComponent({
                                                    challenge,
                                                }: {
    challenge: ChallengeStats | null
}) {
    if (challenge == null) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-2">Challenge not found</h1>
                    <p className="text-muted-foreground mb-4">The challenge you are looking for does not exist.</p>
                    <Link href="/challenges" className="text-terminal-text hover:underline">
                        Back to challenges
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
                            src="/recticode-logo.png"
                            alt="recticode"
                            width={140}
                            height={32}
                            className="h-6 w-auto"
                        />
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/challenges"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            All Challenges
                        </Link>
                        <a
                            href="https://github.com/recticode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-12">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <Link href="/challenges" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Challenges
                    </Link>
                    <span className="text-muted-foreground mx-2">/</span>
                    <span className="text-sm text-foreground">{challenge.name}</span>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-2">
                        {/* Title and meta */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <h1 className="text-3xl font-bold text-foreground">{challenge.name}</h1>
                                <span className={`text-xs px-2 py-1 rounded ${getDifficultyBg(challenge.difficulty)} ${getDifficultyColor(challenge.difficulty)}`}>
                  {getDifficultyLabel(challenge.difficulty)} ({challenge.difficulty}/10)
                </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="px-2 py-0.5 bg-secondary rounded">{challenge.language}</span>
                                <span>
                  Created by{" "}
                                    <Link href={`/u/${challenge.creator_github}`} className="text-foreground hover:text-terminal-text transition-colors">
                    @{challenge.creator_github}
                  </Link>
                </span>
                            </div>
                        </div>

                        {/*/!* Description *!/*/}
                        {/*<div className="mb-8">*/}
                        {/*    <h2 className="font-semibold text-foreground mb-3">The problem</h2>*/}
                        {/*    <p className="text-muted-foreground leading-relaxed">*/}
                        {/*        {challenge.long_description || challenge.description}*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                        {/*/!* Hints *!/*/}
                        {/*{challenge.hints && challenge.hints.length > 0 && (*/}
                        {/*    <div className="mb-8">*/}
                        {/*        <h2 className="font-semibold text-foreground mb-3">Hints</h2>*/}
                        {/*        <div className="bg-secondary/50 rounded-xl p-4">*/}
                        {/*            <ul className="space-y-2">*/}
                        {/*                {challenge.hints.map((hint, i) => (*/}
                        {/*                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">*/}
                        {/*                        <span className="text-terminal-text shrink-0">{i + 1}.</span>*/}
                        {/*                        {hint}*/}
                        {/*                    </li>*/}
                        {/*                ))}*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*)}*/}

                        {/* Get started */}
                        <div className="bg-terminal rounded-xl p-6 font-mono text-sm">
                            <p className="text-white/50 text-xs mb-3"># Start this challenge</p>
                            <p className="text-white/90 mb-4">recticode start {challenge.name}</p>
                            <p className="text-white/50 text-xs mb-3"># After fixing, submit your solution</p>
                            <p className="text-white/90">recticode submit</p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Stats */}
                        {challenge.stats && (
                            <div className="bg-secondary/50 rounded-xl p-5 mb-6">
                                <h3 className="font-semibold text-foreground mb-4">Challenge stats</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Total attempts</span>
                                        <span className="text-sm text-foreground font-medium">{challenge.stats.attempts}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Successful solves</span>
                                        <span className="text-sm text-foreground font-medium">{challenge.stats.solves}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Success rate</span>
                                        <span className="text-sm text-foreground font-medium">
                      {Math.round((challenge.stats.solves / challenge.stats.attempts) * 100)}%
                    </span>
                                    </div>
                                    {/*<div className="flex justify-between">*/}
                                    {/*    <span className="text-sm text-muted-foreground">Avg. solve time</span>*/}
                                    {/*    <span className="text-sm text-foreground font-medium">{challenge.stats.avg_time}</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="space-y-3">
                            <a
                                href={`https://github.com/recticode/${challenge.repo_name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                            <Link
                                href="/challenges"
                                className="flex items-center justify-center w-full px-4 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary/50 transition-colors"
                            >
                                Browse more challenges
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}