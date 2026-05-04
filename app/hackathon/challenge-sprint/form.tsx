"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ChallengeSprintForm() {
    const [formData, setFormData] = useState({
        repoUrl: "",
        challengeName: "",
        difficulty: "medium",
        description: "",
        language: "",
        email: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement submission logic
        console.log("Challenge Sprint submission:", formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="font-semibold text-foreground text-lg mb-4">Submit your challenge</h2>

            <div className="space-y-2">
                <label htmlFor="repoUrl" className="text-sm text-foreground">
                    GitHub repo link <span className="text-diff-remove">*</span>
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

            <div className="space-y-2">
                <label htmlFor="challengeName" className="text-sm text-foreground">
                    Challenge name <span className="text-diff-remove">*</span>
                </label>
                <Input
                    id="challengeName"
                    type="text"
                    placeholder="e.g. Ghost Payments"
                    value={formData.challengeName}
                    onChange={(e) => setFormData({ ...formData, challengeName: e.target.value })}
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="difficulty" className="text-sm text-foreground">
                        Difficulty <span className="text-diff-remove">*</span>
                    </label>
                    <select
                        id="difficulty"
                        value={formData.difficulty}
                        onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        required
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="language" className="text-sm text-foreground">
                        Language <span className="text-diff-remove">*</span>
                    </label>
                    <Input
                        id="language"
                        type="text"
                        placeholder="e.g. Python, SQL"
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="description" className="text-sm text-foreground">
                    Short description <span className="text-diff-remove">*</span>
                </label>
                <Textarea
                    id="description"
                    placeholder="Describe the bug scenario in 1-2 sentences..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    required
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-foreground">
                    Your email <span className="text-diff-remove">*</span>
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="for contact if we need clarification"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
            </div>

            <Button type="submit" className="w-full">
                Submit challenge
            </Button>
        </form>
    )
}
