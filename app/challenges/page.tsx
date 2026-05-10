import {get_all_challenges} from "@/app/actions";
import ChallengesPageComponent from "@/components/challenges-page";

export default async function ChallengesPage() {
    const challenges = await get_all_challenges()

    return (
        <ChallengesPageComponent challenges={challenges} />
    )
}