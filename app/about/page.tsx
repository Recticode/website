import Link from "next/link"
import Image from "next/image"
import type {Metadata} from "next"

export const metadata: Metadata = {
    title: "About | recticode",
    description: "The story behind recticode - a platform for practicing real-world debugging.",
    openGraph: {
        title: "About | recticode",
        description: "The story behind recticode - a platform for practicing real-world debugging.",
    }
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border">
                <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
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
                            href="/challenges"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Challenges
                        </Link>
                        <Link
                            href="/docs"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Docs
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-3xl px-6 py-16">
                {/* Title */}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-foreground mb-4">About recticode</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A platform for practicing real-world debugging.
                        No algorithms. No linked lists. Just production bugs.
                    </p>
                </div>

                {/* The problem */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-foreground mb-4">The problem</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Most coding platforms focus on algorithmic puzzles.
                            Reverse a linked list. Find the shortest path. Implement a sorting algorithm.
                        </p>
                        <p>
                            These are useful skills, but they are not what most engineers do day-to-day.
                            Real engineering work is reading unfamiliar code, tracing bugs through multiple files,
                            understanding why something broke at 2am, and fixing it without breaking something else.
                        </p>
                        <p>
                            There is no good way to practice this.
                        </p>
                    </div>
                </section>

                {/* The solution */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-foreground mb-4">What recticode does</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            recticode is a collection of real codebases with real bugs.
                            Each challenge is a self-contained project with a bug that needs fixing.
                            You clone it locally, find the bug, fix it, and submit your solution.
                        </p>
                        <p>
                            The bugs are designed to feel like production issues: race conditions,
                            edge cases, off-by-one errors, misunderstood APIs, async timing issues.
                            The kind of bugs that require understanding how systems work, not just how to write code.
                        </p>
                    </div>
                </section>

                {/* No AI */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-foreground mb-4">No AI</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            recticode is designed to be solved without AI assistance.
                        </p>
                        <p>
                            Yes, you could paste the code into ChatGPT and get an answer.
                            But that defeats the point. AI makes these challenges trivially easy.
                            The skill of debugging - reading code, forming hypotheses, tracing execution -
                            atrophies when you outsource it.
                        </p>
                        <p>
                            More importantly: AI is not always available.
                            Tokens run out. APIs go down. Enterprise firewalls block external services.
                            When production is on fire at 3am and your AI assistant is rate-limited,
                            you need to be able to fix bugs yourself.
                        </p>
                        <p>
                            recticode is practice for those moments.
                        </p>
                    </div>
                </section>

                {/* Open source */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Open source</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            recticode is fully open source. The CLI, the challenge library,
                            and the platform are all available on GitHub.
                        </p>
                        <p>
                            The challenges themselves are community-contributed.
                            Anyone can submit a challenge, and accepted challenges become part of the library.
                            Good challenge creators get recognition and build a public track record.
                        </p>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <a
                            href="https://github.com/recticode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                        </a>
                        <a
                            href="https://github.com/sponsors/VulcanWM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary/50 transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            Sponsor
                        </a>
                    </div>
                </section>

                {/* Who built this */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Who built this</h2>
                    <div className="flex items-start gap-4">
                        <img
                            src="https://github.com/VulcanWM.png"
                            alt="VulcanWM"
                            className="w-16 h-16 rounded-full border border-border"
                        />
                        <div>
                            <p className="font-medium text-foreground mb-1">VulcanWM</p>
                            <p className="text-sm text-muted-foreground mb-3">
                                Building tools for developers.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/VulcanWM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://twitter.com/VulcanWM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-secondary/50 rounded-xl p-8 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Ready to start debugging?</h3>
                    <p className="text-muted-foreground mb-6">
                        Browse the challenge library or install the CLI to get started.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/challenges"
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-terminal text-white rounded-lg text-sm font-medium hover:bg-terminal/90 transition-colors"
                        >
                            Browse challenges
                        </Link>
                        <Link
                            href="/docs"
                            className="inline-flex items-center justify-center px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary/50 transition-colors"
                        >
                            Read the docs
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}
