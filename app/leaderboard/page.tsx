import {get_leaderboard} from "@/app/actions";
import LeaderboardPageComponent from "@/components/pages/leaderboard-page";

export default async function LeaderboardPage() {
    const leaderboard = await get_leaderboard();

    return (
        <LeaderboardPageComponent leaderboard={leaderboard}/>
    )
}
