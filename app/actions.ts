"use server"

import {neon} from "@neondatabase/serverless";
import { headers } from "next/headers"
import { challengeLimiter } from "@/lib/ratelimit"

export async function submit_challenge(formData:
                      {
                          repoUrl: string,
                          name: string,
                          difficulty: number,
                          description: string,
                          language: string,
                          email: string,
                      }) {
    const ip =
        (await headers()).get("x-forwarded-for") ??
        "unknown"

    const { success } = await challengeLimiter.limit(ip)

    if (!success) {
        return { success: false, message: "Rate limited. Try again in 5 minutes" }
    }

    if (!formData.repoUrl.includes("github.com")) {
        return {success: false, message: "Invalid GitHub link"};
    }

    if (formData.name.length < 5 || formData.name.length > 100) {
        return {success: false, message: "Name must be at least 5 characters long and less than 100 characters"};
    }

    if (formData.description.length < 10 || formData.description.length > 200) {
        return {success: false, message: "Description must be at least 10 characters long and less than 200 characters"};
    }

    if (formData.difficulty > 10 || formData.difficulty < 1){
        return {success: false, message: "Difficulty must be an integer between 1 and 10 (inclusive)"};
    }

    if (!formData.email.includes("@")){
        return {success: false, message: "Invalid email address"};
    }

    if (formData.language.length < 2 || formData.language.length > 25) {
        return {success: true, message: "Language must be at least 2 characters long and less than 25 characters"}
    }

    const sql = neon(process.env.NEON_URL as string);
    await sql`INSERT INTO review_challenges (github_repo_url, challenge_name, difficulty, language, email, description) VALUES (${formData['repoUrl']}, ${formData['name']}, ${formData['difficulty']}, ${formData['language']}, ${formData['email']}, ${formData['description']})`;
    return {status: true, message: ""}
}