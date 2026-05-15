"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {submit_waitlist} from "@/app/actions";
import {startTransition} from "react";

export function WaitlistForm() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.includes("@")){
            setMessage("Invalid email address")
            return;
        }

        startTransition(async () => {
            const result = await submit_waitlist(email)
            if (result.status){
                setSubmitted(true)
                setMessage("")
            } else {
                setMessage(result.message)
            }
        })
    }

    if (submitted) {
        return (
            <div className="text-center py-8 bg-secondary/30 rounded-xl">
                <p className="font-medium text-foreground mb-2">You are registered</p>
                <p className="text-sm text-muted-foreground">
                    You'll get an email closer to the date reminding you to start!
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="font-semibold text-foreground text-lg mb-4">Register to competition updates</h2>
            {message != "" && <p className={"text-red-500"}>{message}</p>}
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-foreground">
                    Email <span className="text-diff-remove">*</span>
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="for competition updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value )}
                    required
                />
            </div>

            <Button type="submit" className="w-full">
                Register
            </Button>
        </form>
    )
}
