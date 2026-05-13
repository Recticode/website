import type { Metadata } from "next"
import ChallengePageComponent from "@/components/pages/challenge-page"
import { get_challenge_by_slug } from "@/app/actions"

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const challenge = await get_challenge_by_slug(slug)

    if (!challenge) {
        return {
            title: "Challenge not found | Recticode",
        }
    }

    return {
        title: `${challenge.name} | Recticode`,
        description: challenge.description,
        openGraph: {
            title: `${challenge.name} | Recticode`,
            description: challenge.description,
        },
    }
}

export default async function ChallengeServerPage({
                                                      params,
                                                  }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const challenge = await get_challenge_by_slug(slug)

    return <ChallengePageComponent challenge={challenge} />
}