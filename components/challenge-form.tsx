"use client"

import {FormEvent, useState, useTransition} from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {submit_challenge} from "@/app/actions";

export function ChallengeForm() {
    const [isPending, startTransition] = useTransition()
    const [message, setMessage] = useState("")
    const [messageIsError, setMessageIsError] = useState(false)

    const [formData, setFormData] = useState({
        repoUrl: "",
        name: "",
        difficulty: 5,
        description: "",
        language: "",
        email: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.repoUrl.includes("github.com")) {
            setMessage("Invalid GitHub link")
            setMessageIsError(true)
            return;
        }

        if (formData.name.length < 5 || formData.name.length > 100) {
            setMessage("Name must be at least 5 characters long and less than 100 characters")
            setMessageIsError(true)
            return;
        }

        if (formData.description.length < 10 || formData.description.length > 200) {
            setMessage("Description must be at least 10 characters long and less than 200 characters")
            setMessageIsError(true)
            return;
        }

        if (formData.difficulty > 10 || formData.difficulty < 1){
            return {success: false, message: "Difficulty must be an integer between 1 and 10 (inclusive)"};
        }

        if (!formData.email.includes("@")){
            setMessage("Invalid email address")
            setMessageIsError(true)
            return;
        }

        if (formData.language.length < 2 || formData.language.length > 25) {
            setMessage("Language must be at least 2 characters long and less than 25 characters")
        }

        startTransition(async () => {
            const result = await submit_challenge(formData)
            if (result.status){
                setMessage("Submitted challenge! Wait for the review now")
                setMessageIsError(false)
            } else {
                setMessage(result.message)
                setMessageIsError(true)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                    {message != "" &&
                        <>
                        {messageIsError ?
                            <p className={"text-red-500"}>{message}</p>
                        :
                            <p className={"text-green-500"}>{message}</p>
                        }
                        </>
                    }
                    <label htmlFor="repoUrl" className="block text-sm font-medium text-foreground mb-1.5">
                        GitHub repo link
                    </label>
                    <Input
                        id="repoUrl"
                        type="url"
                        placeholder="https://github.com/username/challenge-repo"
                        value={formData.repoUrl}
                        onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Challenge name
                    </label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Ghost Payments"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="difficulty" className="block text-sm font-medium text-foreground mb-1.5">
                        Difficulty (1-10)
                    </label>
                    <Input
                        id="difficulty"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.difficulty}
                        onChange={(e) => setFormData({ ...formData, difficulty: Number.parseInt(e.target.value) || 5 })}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="language" className="block text-sm font-medium text-foreground mb-1.5">
                        Language
                    </label>
                    <Input
                        id="language"
                        type="text"
                        placeholder="python / sql"
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Your email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">
                        Short description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Describe the bug scenario in 1-2 sentences"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                        rows={3}
                        className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                </div>
            </div>

            <Button type="submit" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit challenge"}
            </Button>
        </form>
    )
}
