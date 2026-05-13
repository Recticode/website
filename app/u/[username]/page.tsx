import type { Metadata } from "next"
import UserPageComponent from "@/components/pages/user-page"
import { get_public_profile } from "@/app/actions"

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ username: string }>
}): Promise<Metadata> {
    const { username } = await params
    const user = await get_public_profile(username)

    if (!user) {
        return {
            title: "User not found | Recticode",
        }
    }

    return {
        title: `@${user.username} | Recticode`,
        description: `View ${user.username}'s profile and stats on Recticode.`,
        openGraph: {
            title: `@${user.username} | Recticode`,
            description: `Rank #${user.stats.rank} • ${user.stats.total_score} points`,
            images: [
                {
                    url: user.avatar_url,
                },
            ],
        },
    }
}

export default async function UserServerPage({
                                                 params,
                                             }: {
    params: Promise<{ username: string }>
}) {
    const { username } = await params

    const userStats = await get_public_profile(username)

    return <UserPageComponent userStats={userStats} />
}