import Image from "next/image"

type HackathonSponsorSectionProps = {
    event: "challenge-sprint" | "debugging-championship"
}

export function HackathonSponsorSection({ event }: HackathonSponsorSectionProps) {
    const isChampionship = event === "debugging-championship"

    return (
        <div className="bg-secondary/50 rounded-xl p-6 mb-10">
            <h2 className="font-semibold text-foreground mb-4">Sponsor prizes</h2>

            <div className="border border-amber-500/30 rounded-lg p-5 bg-background/40 mb-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">
                    Featured sponsor
                </p>
                <a
                    href="https://www.boot.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label="Visit Boot.dev"
                >
                    <Image
                        src="/bootdev-logo-badge-full.png"
                        alt="Boot.dev"
                        width={2400}
                        height={1111}
                        className="w-full h-auto max-h-32 object-contain"
                    />
                </a>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
                Boot.dev is supporting the Recticode hackathon with participant prizes and a grand prize for the championship.
            </p>

            {isChampionship ? (
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                        <span className="text-diff-add shrink-0">—</span>
                        Qualifying participants can earn Boot.dev access as part of the event prize pool
                    </li>
                    <li className="flex gap-2">
                        <span className="text-diff-add shrink-0">—</span>
                        Complete at least 3 challenges to qualify for participant prizes
                    </li>
                    <li className="flex gap-2">
                        <span className="text-diff-add shrink-0">—</span>
                        Overall winner receives a 1-year Boot.dev subscription, worth £30
                    </li>
                </ul>
            ) : (
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                        <span className="text-terminal-text shrink-0">—</span>
                        Accepted challenge authors can qualify for Boot.dev participant prizes
                    </li>
                    <li className="flex gap-2">
                        <span className="text-terminal-text shrink-0">—</span>
                        Participant prizes are shared across both Recticode hackathon events
                    </li>
                </ul>
            )}
        </div>
    )
}
