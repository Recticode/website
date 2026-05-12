export function getDifficultyLabel(d: number): string {
    if (d <= 3) return "Easy"
    if (d <= 6) return "Medium"
    return "Hard"
}

export function getDifficultyColor(d: number): string {
    if (d <= 3) return "text-terminal-text"
    if (d <= 6) return "text-amber-500"
    return "text-diff-remove"
}

export function getDifficultyBg(d: number): string {
    if (d <= 3) return "bg-terminal-text/10"
    if (d <= 6) return "bg-amber-500/10"
    return "bg-diff-remove/10"
}