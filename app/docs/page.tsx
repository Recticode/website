import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title: "Documentation | recticode",
    description: "Learn how to use recticode CLI, solve challenges, and create your own debugging challenges.",
}

export default function DocsPage() {
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

            <main className="mx-auto max-w-4xl px-6 py-12">
                {/* Title */}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Documentation</h1>
                    <p className="text-muted-foreground">
                        Everything you need to know to use recticode.
                    </p>
                </div>

                {/* Quick links */}
                <div className="grid sm:grid-cols-3 gap-4 mb-12">
                    <a href="#installation" className="border border-border rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                        <h3 className="font-medium text-foreground mb-1">Installation</h3>
                        <p className="text-xs text-muted-foreground">Get started with the CLI</p>
                    </a>
                    <a href="#cli-reference" className="border border-border rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                        <h3 className="font-medium text-foreground mb-1">CLI Reference</h3>
                        <p className="text-xs text-muted-foreground">All available commands</p>
                    </a>
                    <a href="#creating-challenges" className="border border-border rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                        <h3 className="font-medium text-foreground mb-1">Creating Challenges</h3>
                        <p className="text-xs text-muted-foreground">Submit your own bugs</p>
                    </a>
                </div>

                {/* Installation */}
                <section id="installation" className="mb-12 scroll-mt-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Installation</h2>
                    <p className="text-muted-foreground mb-4">
                        recticode is a Python CLI tool. Install it with pip:
                    </p>
                    <div className="bg-terminal rounded-xl p-4 font-mono text-sm mb-4">
                        <p className="text-white/90">pip install recticode</p>
                    </div>
                    <p className="text-muted-foreground mb-4">
                        Verify the installation:
                    </p>
                    <div className="bg-terminal rounded-xl p-4 font-mono text-sm">
                        <p className="text-white/90">recticode --version</p>
                    </div>
                </section>

                {/* CLI Reference */}
                <section id="cli-reference" className="mb-12 scroll-mt-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">CLI Reference</h2>

                    <div className="space-y-6">
                        {/* login */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode login</code>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Authenticate with GitHub using device flow. You will be given a code to enter at github.com/login/device.
                                Required before using most commands.
                            </p>
                        </div>

                        {/* logout */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode logout</code>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Remove your stored authentication token.
                            </p>
                        </div>

                        {/* whoami */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode whoami</code>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Display the name of the currently logged in user.
                            </p>
                        </div>

                        {/* list-challenges */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode list-challenges</code>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                List all available challenges with their name, description, difficulty (1-10), and language.
                            </p>
                        </div>

                        {/* start */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode start {"<challenge_name>"}</code>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                                Clone a challenge repository to your current directory. After cloning, cd into the challenge folder to start working.
                            </p>
                            <div className="bg-terminal rounded-lg p-3 font-mono text-xs">
                                <p className="text-white/60"># Example</p>
                                <p className="text-white/90">recticode start ghost-payments</p>
                                <p className="text-white/90">cd ghost-payments</p>
                            </div>
                        </div>

                        {/* submit */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode submit</code>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Submit your solution for the current challenge. Must be run from inside a challenge directory (where challenge.json exists).
                                Your src/ folder is zipped and sent to the server for testing against hidden test cases.
                                You will see how many tests passed and whether you completed the challenge.
                            </p>
                        </div>

                        {/* passed-challenges */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode passed-challenges</code>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                View all challenges you have successfully completed.
                            </p>
                        </div>

                        {/* help */}
                        <div className="border border-border rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm font-mono text-terminal-text">recticode --help</code>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Show all available commands and options.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Solving Challenges */}
                <section id="solving-challenges" className="mb-12 scroll-mt-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Solving Challenges</h2>

                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Each challenge is a real codebase with a real bug. The workflow is:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 pl-2">
                            <li>Browse challenges and pick one that interests you</li>
                            <li>Run <code className="text-terminal-text font-mono text-sm">recticode start [name]</code> to clone it locally</li>
                            <li>Read the problem description and explore the codebase</li>
                            <li>Find and fix the bug</li>
                            <li>Run <code className="text-terminal-text font-mono text-sm">recticode submit</code> to submit your solution</li>
                        </ol>
                        <p>
                            Your submission is tested against hidden test cases. If all tests pass, the challenge is marked as solved and your score increases based on the challenge difficulty.
                        </p>
                    </div>
                </section>

                {/* Creating Challenges */}
                <section id="creating-challenges" className="mb-12 scroll-mt-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Creating Challenges</h2>

                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Anyone can submit a challenge. Good challenges are:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                <span><strong className="text-foreground">Realistic:</strong> The bug should feel like something that could happen in production</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                <span><strong className="text-foreground">Non-trivial:</strong> Require reasoning across multiple files or understanding system behavior</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                <span><strong className="text-foreground">Clear:</strong> The expected behavior should be obvious from context or documentation</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-terminal-text shrink-0">—</span>
                                <span><strong className="text-foreground">Educational:</strong> Solvers should learn something useful</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 bg-secondary/50 rounded-xl p-5">
                        <h3 className="font-medium text-foreground mb-3">Challenge structure</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            Your challenge repo should include:
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground font-mono">
                            <li>├── README.md (problem description)</li>
                            <li>├── src/ (buggy code)</li>
                            <li>├── challenge.json (contains the name of the challenge)</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-4">
                            See the{" "}
                            <a
                                href="https://github.com/Recticode/.github/blob/main/CreateChallenge.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-terminal-text hover:underline"
                            >
                                full guide on GitHub
                            </a>{" "}
                            for detailed instructions.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-12 scroll-mt-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">FAQ</h2>

                    <div className="space-y-4">
                        <div className="border border-border rounded-xl p-5">
                            <h3 className="font-medium text-foreground mb-2">Is recticode free?</h3>
                            <p className="text-sm text-muted-foreground">
                                Yes. recticode is open source and free forever. You can{" "}
                                <a href="https://github.com/sponsors/VulcanWM" className="text-terminal-text hover:underline">
                                    sponsor the project
                                </a>{" "}
                                if you find it useful.
                            </p>
                        </div>

                        <div className="border border-border rounded-xl p-5">
                            <h3 className="font-medium text-foreground mb-2">What languages are supported?</h3>
                            <p className="text-sm text-muted-foreground">
                                Currently Python. More languages coming based on community contributions.
                            </p>
                        </div>

                        <div className="border border-border rounded-xl p-5">
                            <h3 className="font-medium text-foreground mb-2">How is the leaderboard scored?</h3>
                            <p className="text-sm text-muted-foreground">
                                Each challenge has a difficulty rating from 1-10. When you solve a challenge,
                                you earn points equal to its difficulty.
                                Your total score is the sum of all challenges solved.
                            </p>
                        </div>

                        <div className="border border-border rounded-xl p-5">
                            <h3 className="font-medium text-foreground mb-2">Can I use AI to solve challenges?</h3>
                            <p className="text-sm text-muted-foreground">
                                We recommend solving without AI. These challenges are designed to build your debugging
                                intuition - reading code, forming hypotheses, tracing execution. AI makes them trivially
                                easy, which defeats the purpose. More importantly, AI is not always available: tokens run
                                out, APIs go down, firewalls block external services. When production breaks at 3am and
                                your AI assistant is rate-limited, you need to fix bugs yourself. recticode is practice
                                for those moments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Help */}
                <section className="bg-secondary/50 rounded-xl p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Need help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Open an issue on GitHub or check existing discussions.
                    </p>
                    <a
                        href="https://github.com/recticode/python-cli/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-terminal text-white rounded-lg text-sm font-medium hover:bg-terminal/90 transition-colors"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Open an issue
                    </a>
                </section>
            </main>
        </div>
    )
}
