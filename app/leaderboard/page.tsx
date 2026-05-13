import {get_leaderboard} from "@/app/actions";
import LeaderboardPageComponent from "@/components/pages/leaderboard-page";
import type {Metadata} from "next"

export const metadata: Metadata = {
    title: "Leaderboard | Recticode",
    description: "View the top Recticode developers ranked by score and challenge performance.",
    openGraph: {
        title: "Leaderboard | Recticode",
        description: "See who is leading the Recticode leaderboard.",
    },
}

export default async function LeaderboardPage() {
    const leaderboard = await get_leaderboard();

    return (
        <LeaderboardPageComponent leaderboard={leaderboard}/>
    )
}
