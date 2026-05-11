import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import {get_user_stats} from "@/app/actions";
import StatsNotLoggedPageComponent from "@/components/pages/stats-not-logged-page";
import StatsLoggedInPageComponent from "@/components/pages/stats-logged-in-page";

export default async function LoginPage() {
    const authUser = await getServerSession(authOptions);
    console.log(authUser);
    const githubId = authUser?.user?.githubId || null

    if (githubId == null) {
        redirect("/login")
    }

    const userStats = await get_user_stats(parseInt(githubId));

    if (userStats == null){
        return <StatsNotLoggedPageComponent/>
    } else {
        return <StatsLoggedInPageComponent userStats={userStats}/>
    }
}
