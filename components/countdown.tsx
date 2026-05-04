"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
    targetDate: Date
    label: string
}

export function Countdown({ targetDate, label }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const calculate = () => {
            const now = new Date().getTime()
            const target = targetDate.getTime()
            const diff = target - now

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            })
        }

        calculate()
        const interval = setInterval(calculate, 1000)
        return () => clearInterval(interval)
    }, [targetDate])

    if (!mounted) {
        return (
            <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">{label}</p>
                <div className="flex justify-center gap-3">
                    {["Days", "Hours", "Min", "Sec"].map((unit) => (
                        <div key={unit} className="bg-terminal rounded-lg px-4 py-3 min-w-[70px]">
                            <div className="text-2xl font-mono font-bold text-white">--</div>
                            <div className="text-xs text-white/50 mt-1">{unit}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">{label}</p>
            <div className="flex justify-center gap-3">
                <div className="bg-terminal rounded-lg px-4 py-3 min-w-[70px]">
                    <div className="text-2xl font-mono font-bold text-white">{timeLeft.days}</div>
                    <div className="text-xs text-white/50 mt-1">Days</div>
                </div>
                <div className="bg-terminal rounded-lg px-4 py-3 min-w-[70px]">
                    <div className="text-2xl font-mono font-bold text-white">{timeLeft.hours}</div>
                    <div className="text-xs text-white/50 mt-1">Hours</div>
                </div>
                <div className="bg-terminal rounded-lg px-4 py-3 min-w-[70px]">
                    <div className="text-2xl font-mono font-bold text-white">{timeLeft.minutes}</div>
                    <div className="text-xs text-white/50 mt-1">Min</div>
                </div>
                <div className="bg-terminal rounded-lg px-4 py-3 min-w-[70px]">
                    <div className="text-2xl font-mono font-bold text-white">{timeLeft.seconds}</div>
                    <div className="text-xs text-white/50 mt-1">Sec</div>
                </div>
            </div>
        </div>
    )
}
