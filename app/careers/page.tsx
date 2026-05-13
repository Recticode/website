import Image from "next/image"
import Link from "next/link"
import type {Metadata} from "next"

export const metadata: Metadata = {
    title: "Careers + Contributions | recticode",
    description: "How to build your profile as a recticode contributor.",
    openGraph: {
        title: "Careers + Contributions | recticode",
        description: "How to build your profile as a recticode contributor.",
    }
}

export default function CareersPage() {
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
                        <Link href="/challenges" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                            Challenges
                        </Link>
                        <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </Link>
                    </div>
                </div>
            </nav>

            <section className="pt-24 pb-16 px-6">
                <div className="mx-auto max-w-2xl">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-foreground mb-3">Careers & Contributions</h1>
                        <p className="text-muted-foreground">
                            recticode is a small, open source project. Here is how you can get involved.
                        </p>
                    </div>

                    {/* No internships */}
                    <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                        <h2 className="font-semibold text-foreground mb-3">We do not offer internships</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            recticode is a solo project without the capacity to mentor interns.
                            There are no paid positions, formal internship programs, or structured mentorship opportunities.
                        </p>
                    </div>

                    {/* What you can do */}
                    <div className="mb-10">
                        <h2 className="text-xl font-semibold text-foreground mb-4">What you can do instead</h2>

                        <div className="space-y-6">
                            <div className="border border-border rounded-xl p-5">
                                <h3 className="font-medium text-foreground mb-2">Contribute challenges</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Create debugging challenges based on real bugs you have encountered.
                                    If your challenge is accepted, you become an official contributor with credit on the challenge page.
                                </p>
                                <Link href="/hackathon/challenge-sprint" className="text-sm text-terminal-text hover:underline">
                                    Join the Challenge Sprint →
                                </Link>
                            </div>

                            <div className="border border-border rounded-xl p-5">
                                <h3 className="font-medium text-foreground mb-2">Contribute to the codebase</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    recticode is open source. Fix bugs, improve documentation, suggest features.
                                    All contributions are tracked publicly on GitHub.
                                </p>
                                <a
                                    href="https://github.com/recticode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-terminal-text hover:underline"
                                >
                                    View on GitHub →
                                </a>
                            </div>

                            <div className="border border-border rounded-xl p-5">
                                <h3 className="font-medium text-foreground mb-2">Solve challenges and climb the leaderboard</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Your solving history is public. A strong track record on recticode demonstrates
                                    debugging skills in a way that is verifiable by anyone.
                                </p>
                                <Link href="/challenges" className="text-sm text-terminal-text hover:underline">
                                    Browse challenges →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="bg-terminal rounded-xl p-6">
                        <h2 className="font-semibold text-white mb-3">Add it to your LinkedIn</h2>
                        <p className="text-sm text-white/70 leading-relaxed mb-4">
                            If you have contributed to recticode (challenges, code, or documentation),
                            you can list it on your LinkedIn profile. recticode has an official LinkedIn page
                            that you can tag.
                        </p>
                        <div className="text-sm text-white/90 font-mono bg-white/10 rounded-lg p-4 mb-4">
                            <p className="mb-2"><span className="text-white/50">Title:</span> Open Source Contributor</p>
                            <p className="mb-2"><span className="text-white/50">Organization:</span> recticode</p>
                            <p className="mb-2"><span className="text-white/50">Description:</span> Contributed debugging challenges / code to recticode, an open source platform for practicing real-world debugging.</p>
                        </div>
                        <a
                            href="https://linkedin.com/company/recticodedotcom"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-terminal-text hover:underline"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            recticode on LinkedIn
                        </a>
                    </div>

                    {/* What this gives you */}
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-foreground mb-4">What this gives you</h2>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                A public track record of contributions visible to anyone
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Something concrete to talk about in interviews
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Proof that you can debug real codebases, not just solve algorithm puzzles
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                A verified badge on your recticode profile
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                Credit on the challenges you create
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
