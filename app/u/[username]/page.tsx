import UserPageComponent from "@/components/pages/user-page"
import { get_public_profile } from "@/app/actions"

export default async function UserServerPage({
                                                 params,
                                             }: {
    params: Promise<{ username: string }>
}) {
    const { username } = await params

    const userStats = await get_public_profile(username)

    return <UserPageComponent userStats={userStats} />
}