import ChallengePageComponent from "@/components/pages/challenge-page";
import { get_challenge_by_slug } from "@/app/actions"

export default async function ChallengeServerPage({
                                                 params,
                                             }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const challenge = await get_challenge_by_slug(slug)

    return <ChallengePageComponent challenge={challenge} />
}