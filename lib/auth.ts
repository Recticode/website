import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    callbacks: {
        async jwt({ token, profile }) {
            if (profile) {
                token.githubUsername = (profile as any).login;
                token.githubId = (profile as any).id.toString();
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.githubUsername = token.githubUsername as string;
                session.user.githubId = token.githubId as string;
            }
            return session;
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/stats`;
        },
    },
};