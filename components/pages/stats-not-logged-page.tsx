import Image from "next/image"
import Link from "next/link"

export default function StatsNotLoggedPageComponent() {
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
            </nav>

            <section className="pt-24 pb-16 px-6">
                <div className="mx-auto max-w-xl text-center">
                    <div className="mb-8">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                            <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-semibold text-foreground mb-3">
                            Connect your CLI
                        </h1>
                        <p className="text-muted-foreground leading-relaxed">
                            Your challenges and progress will appear here once you connect the CLI to your account.
                        </p>
                    </div>

                    <div className="bg-terminal rounded-xl p-5 text-left font-mono text-sm mb-6">
                        <p className="text-white/40 text-xs mb-2"># Install the CLI</p>
                        <p className="text-white/90 mb-4">pip install recticode</p>
                        <p className="text-white/40 text-xs mb-2"># Connect to your account</p>
                        <p className="text-white/90">recticode login</p>
                    </div>

                    <p className="text-xs text-muted-foreground">
                        After running <span className="font-mono text-foreground">recticode login</span>, refresh this page to see your dashboard.
                    </p>
                </div>
            </section>
        </main>
    )
}
