import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            githubUsername?: string;
            githubId?: string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        githubUsername?: string;
        githubId?: string;
    }
}