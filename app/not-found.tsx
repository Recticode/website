import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
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
                            href="/docs"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Docs
                        </Link>
                    </div>
                </div>
            </nav>

            <section className="flex-1 flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <div className="bg-terminal rounded-xl p-6 mb-8 font-mono text-sm text-left">
                        <p className="text-diff-remove">Error: PageNotFoundError</p>
                        <p className="text-white/60 mt-2">{"  "}at Router.resolve (/app/router.ts:42)</p>
                        <p className="text-white/60">{"  "}at async render (/app/page.tsx:1)</p>
                        <p className="text-white/40 mt-4"># The page you are looking for does not exist.</p>
                    </div>

                    <h1 className="text-4xl font-bold text-foreground mb-3">404</h1>
                    <p className="text-muted-foreground mb-6">
                        This page could not be found. It might have been moved or deleted.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                        >
                            Go home
                        </Link>
                        <Link
                            href="/challenges"
                            className="inline-flex items-center justify-center gap-2 border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
                        >
                            Browse challenges
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}