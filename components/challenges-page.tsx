"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import {Challenge} from "@/lib/types"

export default function ChallengesPageComponent({
                                                    challenges,
                                                }: {
    challenges: (Challenge & { github_username: string })[]
}) {
    const languages = Array.from(new Set(challenges.map((c) => c.language)))

    function getDifficultyLabel(d: number): string {
        if (d <= 3) return "Easy"
        if (d <= 6) return "Medium"
        return "Hard"
    }

    function getDifficultyColor(d: number): string {
        if (d <= 3) return "text-terminal-text"
        if (d <= 6) return "text-amber-500"
        return "text-diff-remove"
    }

    const [sortBy, setSortBy] = useState<"difficulty-asc" | "difficulty-desc" | "name">("difficulty-desc")
    const [filterLanguage, setFilterLanguage] = useState<string>("all")
    const [filterDifficulty, setFilterDifficulty] = useState<string>("all")

    const filteredAndSorted = useMemo(() => {
        let result = [...challenges]

        // Filter by language
        if (filterLanguage !== "all") {
            result = result.filter((c) => c.language === filterLanguage)
        }

        // Filter by difficulty range
        if (filterDifficulty !== "all") {
            if (filterDifficulty === "easy") {
                result = result.filter((c) => c.difficulty <= 3)
            } else if (filterDifficulty === "medium") {
                result = result.filter((c) => c.difficulty >= 4 && c.difficulty <= 6)
            } else if (filterDifficulty === "hard") {
                result = result.filter((c) => c.difficulty >= 7)
            }
        }

        // Sort
        if (sortBy === "difficulty-asc") {
            result.sort((a, b) => a.difficulty - b.difficulty)
        } else if (sortBy === "difficulty-desc") {
            result.sort((a, b) => b.difficulty - a.difficulty)
        } else if (sortBy === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name))
        }

        return result
    }, [sortBy, filterLanguage, filterDifficulty])

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border">
                <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/recticode-icon.png"
                            alt="recticode"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="font-semibold text-foreground">recticode</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/leaderboard"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Leaderboard
                        </Link>
                        <a
                            href="https://github.com/recticode"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-12">
                {/* Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Challenges</h1>
                    <p className="text-muted-foreground">
                        Browse all debugging challenges. Each challenge is a real-world bug in a real codebase.
                    </p>
                </div>

                {/* Filters and Sort */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-muted-foreground">Sort by</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                            className="bg-secondary border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <option value="difficulty-desc">Difficulty (hardest first)</option>
                            <option value="difficulty-asc">Difficulty (easiest first)</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-sm text-muted-foreground">Language</label>
                        <select
                            value={filterLanguage}
                            onChange={(e) => setFilterLanguage(e.target.value)}
                            className="bg-secondary border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <option value="all">All languages</option>
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-sm text-muted-foreground">Difficulty</label>
                        <select
                            value={filterDifficulty}
                            onChange={(e) => setFilterDifficulty(e.target.value)}
                            className="bg-secondary border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <option value="all">All difficulties</option>
                            <option value="easy">Easy (1-3)</option>
                            <option value="medium">Medium (4-6)</option>
                            <option value="hard">Hard (7-10)</option>
                        </select>
                    </div>
                </div>

                {/* Results count */}
                <p className="text-sm text-muted-foreground mb-6">
                    {filteredAndSorted.length} challenge{filteredAndSorted.length !== 1 ? "s" : ""}
                </p>

                {/* Challenges Grid */}
                {filteredAndSorted.length > 0 ? (
                    <div className="grid gap-4">
                        {filteredAndSorted.map((challenge) => (
                            <div
                                key={challenge.id}
                                className="border border-border rounded-xl p-5 hover:bg-secondary/50 transition-colors"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Link href={`/challenges/${challenge.name}`} className="font-semibold text-foreground hover:text-terminal-text transition-colors">
                                                {challenge.name}
                                            </Link>
                                            <span className="text-xs px-2 py-0.5 bg-secondary rounded text-muted-foreground">
                        {challenge.language}
                      </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {challenge.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs">
                      <span className={getDifficultyColor(challenge.difficulty)}>
                        {getDifficultyLabel(challenge.difficulty)} ({challenge.difficulty}/10)
                      </span>
                      {/*                      <span className="text-muted-foreground">*/}
                      {/*  by{" "}*/}
                      {/*                          <Link*/}
                      {/*                              href={`/u/${challenge.github_username}`}*/}
                      {/*                              className="text-foreground hover:text-terminal-text transition-colors"*/}
                      {/*                          >*/}
                      {/*    @{challenge.github_username}*/}
                      {/*  </Link>*/}
                      {/*</span>*/}
                                            <span className="text-muted-foreground">
                        by{" "}
                                                <a
                                                    href={`https://github.com/${challenge.github_username}`}
                                                    target="_blank"
                                                    className="text-foreground hover:text-terminal-text transition-colors"
                                                >
                          @{challenge.github_username}
                        </a>
                      </span>
                                            <a
                                                href={`https://github.com/recticode/${challenge.repo_name}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                View repo
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="bg-terminal rounded-lg px-3 py-2 font-mono text-xs text-white/80">
                                            recticode start {challenge.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 border border-border rounded-xl">
                        <p className="text-muted-foreground">No challenges match your filters.</p>
                    </div>
                )}

                {/* Quick start */}
                <div className="mt-12 bg-secondary/50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Quick start</h3>
                    <div className="bg-terminal rounded-lg p-4 font-mono text-sm">
                        <p className="text-white/50 text-xs mb-2"># Install the CLI</p>
                        <p className="text-white/90 mb-3">pip install recticode</p>
                        <p className="text-white/50 text-xs mb-2"># List all challenges</p>
                        <p className="text-white/90 mb-3">recticode list-challenges</p>
                        <p className="text-white/50 text-xs mb-2"># Start a challenge</p>
                        <p className="text-white/90">recticode start <span className="text-terminal-text">[challenge-name]</span></p>
                    </div>
                </div>
            </main>
        </div>
    )
}
