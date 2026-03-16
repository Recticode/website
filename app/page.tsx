import Image from "next/image"
import { CodeDemo } from "@/components/code-demo"
import { CliDemo } from "@/components/cli-demo"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Image
            src="/recticode-logo.png"
            alt="recticode"
            width={140}
            height={32}
            className="h-6 w-auto"
          />
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
      </nav>

      {/* Hero - offset layout */}
      <section className="pt-28 pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left column - text */}
            <div className="lg:col-span-5 lg:pt-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium bg-terminal text-terminal-text rounded-full">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Open source, free forever
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-[1.08] tracking-tight mb-6 text-balance">
                Stop grinding LeetCode.
                <br />
                Start fixing real bugs.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                Most coding platforms test if you can reverse a linked list. Nobody cares.
                What actually matters is tracing a null pointer through 12 files at 2am.
              </p>
              <a
                href="https://github.com/recticode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Star on GitHub
              </a>
            </div>

            {/* Right column - code demo, offset up */}
            <div className="lg:col-span-7 lg:-mt-4">
              <CodeDemo />
            </div>
          </div>
        </div>
      </section>

      {/* CLI Section - full bleed dark */}
      <section className="py-20 px-6 bg-terminal">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <p className="text-terminal-text text-sm font-medium mb-3">The workflow</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-4">
                Clone. Test. Fix. Submit.
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Everything runs locally. Clone the challenge repo, run tests with your own tools,
                fix the code, submit when you are done. No browser IDE. No hand-holding.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-mono">
                <span className="px-2 py-1 bg-white/10 text-white/70 rounded">recticode start</span>
                <span className="px-2 py-1 bg-white/10 text-white/70 rounded">recticode test</span>
                <span className="px-2 py-1 bg-white/10 text-white/70 rounded">recticode submit</span>
              </div>
            </div>
            <div className="lg:col-span-6 order-2 lg:order-1">
              <CliDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges - staggered cards */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-lg mb-16">
            <p className="text-sm text-muted-foreground mb-3">Sample challenges</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
              Real bugs from real codebases
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-2 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <span className="px-2 py-0.5 text-xs font-medium bg-diff-remove/10 text-diff-remove rounded">Hard</span>
                <span className="text-xs text-muted-foreground font-mono">python / redis / websockets</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">The Case of the Missing Messages</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Users report messages disappearing mid-conversation. Logs show they are being sent.
                Redis shows they are being queued. But somehow, they never arrive. What is eating them?
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <span className="px-2 py-0.5 text-xs font-medium bg-yellow-500/10 text-yellow-600 rounded">Medium</span>
                <span className="text-xs text-muted-foreground font-mono">node / express</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Auth Worked Yesterday</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                JWT tokens validate fine locally. Production returns 401 for everyone.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <span className="px-2 py-0.5 text-xs font-medium bg-diff-add/10 text-diff-add rounded">Easy</span>
                <span className="text-xs text-muted-foreground font-mono">react / typescript</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">The Infinite Loop</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Component keeps re-rendering. DevTools shows thousands of updates per second.
              </p>
            </div>

            <div className="sm:col-span-2 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <span className="px-2 py-0.5 text-xs font-medium bg-diff-remove/10 text-diff-remove rounded">Hard</span>
                <span className="text-xs text-muted-foreground font-mono">postgres / prisma / next.js</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">The 3am Incident</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Database connections spike to 500, app goes down, nobody knows why. You are doing the postmortem.
                Reconstruct what happened and write the fix that prevents it from happening again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - horizontal scroll feel */}
      <section className="py-20 px-6 border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
            <div className="lg:w-64 shrink-0">
              <p className="text-sm text-muted-foreground mb-3">How it works</p>
              <h2 className="text-2xl font-semibold text-foreground leading-tight">
                Debug like you would at work
              </h2>
            </div>

            <div className="flex-1 grid sm:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <div className="w-8 h-8 flex items-center justify-center bg-foreground text-background text-sm font-medium rounded-full mb-4">1</div>
                <p className="text-foreground font-medium mb-2">Read the stack trace</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No hints. Start where every real debugging session starts: an error message and a pile of code.
                </p>
              </div>
              <div>
                <div className="w-8 h-8 flex items-center justify-center bg-foreground text-background text-sm font-medium rounded-full mb-4">2</div>
                <p className="text-foreground font-medium mb-2">Trace the issue</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Navigate across files. Understand the codebase. Find where things broke and why.
                </p>
              </div>
              <div>
                <div className="w-8 h-8 flex items-center justify-center bg-foreground text-background text-sm font-medium rounded-full mb-4">3</div>
                <p className="text-foreground font-medium mb-2">Write the fix</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Actual working code that passes the tests. The kind you would push to main.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open source CTA */}
      <section className="py-28 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 lg:col-start-4">
              <div className="text-center">
                <Image
                  src="/recticode-logo.png"
                  alt="recticode bug icon"
                  width={120}
                  height={40}
                  className="mx-auto mb-6"
                />
                <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-balance">
                  Built in the open
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
                  recticode is open source and free forever. Follow the repo to get notified when we launch
                  new challenges and features.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://github.com/recticode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Follow on GitHub
                  </a>
                  <a
                    href="https://github.com/recticode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    View the code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <Image
            src="/recticode-logo.png"
            alt="recticode"
            width={120}
            height={40}
          />
          <span>Open source. Free forever.</span>
        </div>
      </footer>
    </main>
  )
}
