import Image from "next/image"
import { Countdown } from "@/components/countdown"
import { ShareButtons } from "@/components/share-buttons"
import {ChallengeForm} from "@/components/challenge-form";

export const metadata = {
    title: "Challenge Sprint | Recticode",
    description: "Submit real-world debugging challenges and help build the recticode challenge library. May 18-31, 2025.",
}

export default function ChallengeSprintPage() {
    const startDate = new Date("2026-05-04T00:00:00")
    const endDate = new Date("2026-05-31T23:59:59")
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
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-terminal text-terminal-text text-xs font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-terminal-text animate-pulse" />
                            Phase 1: Challenge Sprint
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                            Challenge Sprint
                        </h1>

                        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                            Recticode is a platform for real-world debugging challenges designed to simulate production engineering problems.
                        </p>

                        <p className="text-lg text-foreground mb-6 max-w-lg mx-auto">
                            Submit debugging challenges. Help build the library.
                            The best submissions get featured.
                        </p>

                        <p className="text-sm font-mono text-muted-foreground mb-8">
                            May 04 - May 31, 2025
                        </p>

                        <ShareButtons
                            title="Join the Challenge Sprint - submit debugging challenges to recticode!"
                            url="https://recticode.com/hackathon/challenge-sprint"
                            hashtags={["recticode", "debugging", "opensource"]}
                        />
                    </div>

                    {/* Timeline */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Timeline</h2>
                        <div className="flex items-center gap-2 text-xs overflow-x-auto pb-2">
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="px-2 py-1 bg-terminal text-terminal-text rounded font-medium">Challenge Sprint</span>
                                <span className="text-muted-foreground">May 04-31</span>
                            </div>
                            <span className="text-muted-foreground shrink-0">→</span>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="px-2 py-1 bg-secondary text-muted-foreground rounded">Review</span>
                                <span className="text-muted-foreground">Jun 01</span>
                            </div>
                            <span className="text-muted-foreground shrink-0">→</span>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="px-2 py-1 bg-secondary text-muted-foreground rounded">Debugging Championship</span>
                                <span className="text-muted-foreground">Jun 01-14</span>
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
                                <p className="text-lg font-medium text-foreground">Submissions closed</p>
                                <p className="text-sm text-muted-foreground mt-1">Thanks for participating!</p>
                            </div>
                        ) : (
                            <Countdown
                                targetDate={hasStarted ? endDate : startDate}
                                label={hasStarted ? "Submissions close in" : "Submissions open in"}
                            />
                        )}
                    </div>

                    {/* Why participate */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Why participate?</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Design a real-world production-style bug
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Showcase your ability to model realistic systems
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Get featured as an official recticode challenge author
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Contribute to a challenge library used by real engineers
                            </li>
                        </ul>
                    </div>

                    {/* Stats */}
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

                    {/* Rules */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Submission requirements</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-terminal-text">1.</span>
                                Multi-file project (minimum 3 files)
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text">2.</span>
                                Intentional bug (subtle, real-world style)
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text">3.</span>
                                Realistic commit history showing incremental development
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text">4.</span>
                                Short context explaining what should happen
                            </li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-4">
                            See the full guide at{" "}
                            <a
                                href="https://github.com/Recticode/.github/blob/main/CreateChallenge.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-terminal-text hover:underline"
                            >
                                github.com/Recticode/.github/CreateChallenge.md
                            </a>
                        </p>
                        <p className="text-xs text-muted-foreground mt-4">
                            Bonus: Multiple contributors or a believable development timeline.
                        </p>
                    </div>

                    {/* Judging Criteria */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-10">
                        <h2 className="font-semibold text-foreground mb-4">Judging criteria</h2>

                        <div className="mb-6">
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-terminal-text shrink-0">—</span>
                                    Realism of the bug (does it feel like a real production issue)
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-terminal-text shrink-0">—</span>
                                    Technical depth (multi-file reasoning, not trivial)
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-terminal-text shrink-0">—</span>
                                    Clarity of context and expected behaviour
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-terminal-text shrink-0">—</span>
                                    Educational value
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground">
                                Submissions are reviewed manually. Final decisions are made by the recticode team. Accepted challenges become part of the recticode open challenge library.
                            </p>
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
                                <span className="text-terminal-text shrink-0">—</span>
                                Featured on the recticode homepage
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Public winner announcement
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Priority access to future beta features
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Opportunity to become a recticode challenge author
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
                        <>
                            <h2 className="font-semibold text-foreground text-lg mb-4">Submit your challenge</h2>
                            <ChallengeForm />
                        </>
                    ) : hasEnded ? (
                        <div className="text-center py-10">
                            <p className="text-muted-foreground">
                                Check out the{" "}
                                <a href="/hackathon/debugging-championship" className="text-terminal-text hover:underline">
                                    Debugging Championship
                                </a>{" "}
                                happening June 1-14!
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-secondary/30 rounded-xl">
                            <p className="text-muted-foreground">
                                Form will be available when submissions open.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
