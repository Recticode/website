"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DebuggingChampionshipForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement registration logic
        console.log("Debugging Championship registration:", formData)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="text-center py-8 bg-secondary/30 rounded-xl">
                <p className="font-medium text-foreground mb-2">You are registered!</p>
                <p className="text-sm text-muted-foreground">
                    Start solving challenges with <span className="font-mono text-terminal-text">recticode start</span>
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="font-semibold text-foreground text-lg mb-4">Register for the competition</h2>

            <div className="space-y-2">
                <label htmlFor="username" className="text-sm text-foreground">
                    GitHub username for recticode <span className="text-diff-remove">*</span>
                </label>
                <Input
                    id="username"
                    type="text"
                    placeholder="Your GitHub username when doing recticode login"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                />
                <p className="text-xs text-muted-foreground">
                    Run <span className="font-mono">recticode login</span> to create an account
                </p>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-foreground">
                    Email <span className="text-diff-remove">*</span>
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="for competition updates"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
            </div>

            <Button type="submit" className="w-full">
                Register
            </Button>
        </form>
    )
}
