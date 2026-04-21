"use server"

import {neon} from "@neondatabase/serverless";

export async function submit_challenge(formData:
                      {
                          repoUrl: string,
                          name: string,
                          difficulty: string,
                          description: string,
                          language: string,
                          email: string,
                      }) {
    if (!formData.repoUrl.includes("github.com")) {
        return {success: false, message: "Invalid GitHub link"};
    }

    if (formData.name.length < 5 || formData.name.length > 100) {
        return {success: false, message: "Name must be at least 5 characters long and less than 100 characters"};
    }

    if (formData.description.length < 10 || formData.description.length > 200) {
        return {success: false, message: "Description must be at least 10 characters long and less than 200 characters"};
    }

    if (!['easy', 'medium', 'hard'].includes(formData.difficulty)){
        return {success: false, message: "Invalid difficulty"};
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