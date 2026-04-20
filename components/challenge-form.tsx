"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ChallengeForm() {
    const [formData, setFormData] = useState({
        repoUrl: "",
        name: "",
        difficulty: "",
        description: "",
        language: "",
        email: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Handle form submission
        console.log("Form submitted:", formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
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
                        Difficulty
                    </label>
                    <select
                        id="difficulty"
                        value={formData.difficulty}
                        onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                        required
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="" disabled>Select difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
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

            <Button type="submit" className="w-full sm:w-auto">
                Submit challenge
            </Button>
        </form>
    )
}
