import type { Metadata } from "next"
import { get_all_challenges } from "@/app/actions"
import ChallengesPageComponent from "@/components/pages/challenges-page"

export const metadata: Metadata = {
    title: "Challenges | Recticode",
    description: "Browse real-world debugging challenges designed to simulate production engineering problems.",
    openGraph: {
        title: "Challenges | Recticode",
        description: "Browse real-world debugging challenges designed to simulate production engineering problems.",
    }
}

export default async function ChallengesPage() {
    const challenges = await get_all_challenges()

    return (
        <ChallengesPageComponent challenges={challenges} />
    )
}