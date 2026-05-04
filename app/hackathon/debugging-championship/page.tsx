import Image from "next/image"
import { Countdown } from "@/components/countdown"
import { ShareButtons } from "@/components/share-buttons"
import { DebuggingChampionshipForm } from "./form"

export const metadata = {
    title: "Debugging Championship | Recticode",
    description: "Compete to solve debugging challenges and climb the leaderboard. June 1-14, 2025.",
}

export default function DebuggingChampionshipPage() {
    const startDate = new Date("2026-06-01T00:00:00")
    const endDate = new Date("2026-06-14T23:59:59")
    const now = new Date()

    const hasStarted = now >= startDate
    const hasEnded = now > endDate
    const isActive = hasStarted && !hasEnded

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
                    <a
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Back to home
                    </a>
                </div>
            </nav>

            <div className="pt-28 pb-20 px-6">
                <div className="mx-auto max-w-2xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-diff-add/20 text-diff-add text-xs font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-diff-add animate-pulse" />
                            Phase 2: Debugging Championship
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                            Debugging Championship
                        </h1>

                        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                            Recticode is a platform for real-world debugging challenges designed to simulate production engineering problems.
                        </p>

                        <p className="text-lg text-foreground mb-6 max-w-lg mx-auto">
                            Solve challenges. Climb the leaderboard.
                            Show everyone you can actually debug.
                        </p>

                        <p className="text-sm font-mono text-muted-foreground mb-8">
                            June 1 - June 14, 2025
                        </p>

                        <ShareButtons
                            title="Join the Debugging Championship - compete to solve real debugging challenges!"
                            url="https://recticode.com/hackathon/debugging-championship"
                            hashtags={["recticode", "debugging", "competition"]}
                        />
                    </div>

                    {/* Timeline */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Timeline</h2>
                        <div className="flex items-center gap-2 text-xs overflow-x-auto pb-2">
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="px-2 py-1 bg-secondary text-muted-foreground rounded">Challenge Sprint</span>
                                <span className="text-muted-foreground">May 18-31</span>
                            </div>
                            <span className="text-muted-foreground shrink-0">→</span>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="px-2 py-1 bg-secondary text-muted-foreground rounded">Review</span>
                                <span className="text-muted-foreground">Jun 1</span>
                            </div>
                            <span className="text-muted-foreground shrink-0">→</span>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="px-2 py-1 bg-diff-add/20 text-diff-add rounded font-medium">Debugging Championship</span>
                                <span className="text-muted-foreground">Jun 1-14</span>
                            </div>
                            <span className="text-muted-foreground shrink-0">→</span>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="px-2 py-1 bg-secondary text-muted-foreground rounded">Results</span>
                            </div>
                        </div>
                    </div>

                    {/* Countdown */}
                    <div className="mb-12">
                        {hasEnded ? (
                            <div className="text-center py-6 bg-secondary rounded-xl">
                                <p className="text-lg font-medium text-foreground">Competition ended</p>
                                <p className="text-sm text-muted-foreground mt-1">Check back for results!</p>
                            </div>
                        ) : (
                            <Countdown
                                targetDate={hasStarted ? endDate : startDate}
                                label={hasStarted ? "Competition ends in" : "Competition starts in"}
                            />
                        )}
                    </div>

                    {/* Why participate */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Why participate?</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Build a public debugging track record
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Prove multi-file reasoning ability
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Get visible on a public engineering leaderboard
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Demonstrate real debugging skills to potential employers
                            </li>
                        </ul>
                    </div>

                    {/*/!* Stats *!/*/}
                    {/*<div className="grid grid-cols-4 gap-4 mb-10">*/}
                    {/*    <div className="text-center p-4 bg-secondary/30 rounded-xl">*/}
                    {/*        <p className="text-2xl font-bold text-foreground">0</p>*/}
                    {/*        <p className="text-xs text-muted-foreground">challenges</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-center p-4 bg-secondary/30 rounded-xl">*/}
                    {/*        <p className="text-2xl font-bold text-foreground">0</p>*/}
                    {/*        <p className="text-xs text-muted-foreground">participants</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-center p-4 bg-secondary/30 rounded-xl">*/}
                    {/*        <p className="text-2xl font-bold text-foreground">0</p>*/}
                    {/*        <p className="text-xs text-muted-foreground">countries</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-center p-4 bg-secondary/30 rounded-xl">*/}
                    {/*        <p className="text-2xl font-bold text-foreground">0</p>*/}
                    {/*        <p className="text-xs text-muted-foreground">solves</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Leaderboard info */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">How it works</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-diff-add">1.</span>
                                Solve debugging challenges using the CLI
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add">2.</span>
                                Complete at least 3 challenges to qualify
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add">3.</span>
                                Maintain 70%+ success rate
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add">4.</span>
                                Scoring weighted by difficulty and consistency
                            </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground">
                                Leaderboard is public. Scoring is automated. Final decisions are made by the recticode team.
                            </p>
                        </div>
                    </div>

                    {/* Get started */}
                    <div className="bg-terminal rounded-xl p-6 mb-10 font-mono text-sm">
                        <p className="text-white/50 text-xs mb-2"># Get started</p>
                        <p className="text-white/90 mb-1">pip install recticode</p>
                        <p className="text-white/90 mb-1">recticode list-challenges</p>
                        <p className="text-white/50 text-xs mb-2"># The only challenges that count in the championship are the ones submitted during the time period</p>
                        <p className="text-white/90">recticode start <span className="text-terminal-text">[challenge_name]</span></p>
                    </div>

                    {/* Judging Criteria */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Judging criteria</h2>

                        <div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-diff-add shrink-0">—</span>
                                    Correctness
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-diff-add shrink-0">—</span>
                                    Consistency
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-diff-add shrink-0">—</span>
                                    Number of challenges completed
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-diff-add shrink-0">—</span>
                                    Difficulty-weighted scoring
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Recognition */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Recognition</h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            This is a merit-based competition focused on engineering signal.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Featured on the recticode homepage
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Highlighted on the public leaderboard
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Public winner announcement
                            </li>
                            <li className="flex gap-2">
                                <span className="text-diff-add shrink-0">—</span>
                                Priority access to future beta features
                            </li>
                        </ul>
                    </div>

                    {/* Sponsors */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Sponsors</h2>
                        <p className="text-sm text-muted-foreground mb-6">
                            Recticode is community funded. Sponsorship keeps the platform free and helps cover infrastructure costs.
                        </p>

                        <div className="space-y-3">
                            <a
                                href="https://buy.stripe.com/6oU14n0l7dvj050bEdbMQ02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border border-border rounded-lg p-4 hover:bg-secondary hover:border-muted-foreground transition-all"
                            >
                                <h3 className="text-sm font-medium text-foreground">Supporter — £10</h3>
                                <p className="text-sm text-muted-foreground mt-1">Logo listed on hackathon page</p>
                            </a>

                            <a
                                href="https://buy.stripe.com/14AcN59VH62R8Bw9w5bMQ01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border border-terminal-text/30 rounded-lg p-4 hover:bg-terminal-text/5 hover:border-terminal-text transition-all"
                            >
                                <h3 className="text-sm font-medium text-foreground">Silver — £50</h3>
                                <p className="text-sm text-muted-foreground mt-1">Homepage logo for duration of hackathon</p>
                            </a>

                            <a
                                href="https://buy.stripe.com/fZubJ1ebX3UJ2d8dMlbMQ00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border border-amber-500/30 rounded-lg p-4 hover:bg-amber-500/5 hover:border-amber-500 transition-all"
                            >
                                <h3 className="text-sm font-medium text-foreground">Gold — £100</h3>
                                <p className="text-sm text-muted-foreground mt-1">Featured sponsor section + demo day mention at Zerobase pitch</p>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    {isActive ? (
                        <DebuggingChampionshipForm />
                    ) : hasEnded ? (
                        <div className="text-center py-10">
                            <p className="text-muted-foreground">
                                Competition has ended. Results coming soon.
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-secondary/30 rounded-xl">
                            <p className="text-muted-foreground mb-4">
                                Competition starts June 1st.
                            </p>
                            <a
                                href="/hackathon/challenge-sprint"
                                className="text-terminal-text hover:underline text-sm"
                            >
                                In the meantime, submit challenges to Challenge Sprint
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
