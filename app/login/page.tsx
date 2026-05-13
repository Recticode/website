import LoginPageComponent from "@/components/pages/login-page";
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login | recticode",
    description: "Log in to recticode with your GitHub account.",
    openGraph: {
        title: "Login | recticode",
        description: "Log in to recticode with your GitHub account.",
    }
}

export default async function LoginPage() {
    const authUser = await getServerSession(authOptions);
    const githubId = authUser?.user?.githubId || null

    if (githubId != null){
        redirect("/stats")
    }

    return (
        <LoginPageComponent/>
    )
}
