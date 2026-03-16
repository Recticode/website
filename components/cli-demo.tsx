"use client"

import { useState, useEffect } from "react"

const steps = [
  {
    command: "recticode start missing-messages",
    output: [
      "Pulling challenge environment...",
      "Setting up isolated workspace...",
      "",
      "Challenge: The Case of the Missing Messages",
      "Stack: Python / Redis / WebSockets",
      "",
      "Scenario: Users report messages vanishing mid-conversation.",
      "Your task: Find the bug and fix it.",
      "",
      "Run `recticode test` when ready.",
    ],
  },
  {
    command: "recticode test",
    output: [
      "Running test suite...",
      "",
      "  PASS  test_message_sent",
      "  PASS  test_user_connection",
      "  FAIL  test_message_delivery",
      "        Expected: message delivered to recipient",
      "        Received: None",
      "  FAIL  test_channel_broadcast",
      "",
      "2 passed, 2 failed",
    ],
  },
  {
    command: "recticode submit",
    output: [
      "Validating fix...",
      "",
      "  PASS  test_message_sent",
      "  PASS  test_user_connection", 
      "  PASS  test_message_delivery",
      "  PASS  test_channel_broadcast",
      "",
      "All tests passing.",
      "",
      "Challenge complete. Time: 14m 32s",
      "Solution saved to your profile.",
    ],
  },
]

export function CliDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const step = steps[currentStep]
    let lineIndex = 0
    setDisplayedLines([])

    const interval = setInterval(() => {
      if (lineIndex < step.output.length) {
        setDisplayedLines((prev) => [...prev, step.output[lineIndex]])
        lineIndex++
      } else {
        clearInterval(interval)
      }
    }, 120)

    return () => clearInterval(interval)
  }, [currentStep])

  return (
    <div className="bg-terminal rounded-lg overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
        <span className="text-white/40 text-xs ml-2">terminal</span>
      </div>
      
      <div className="p-4 min-h-[320px] text-white/80">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-terminal-text">$</span>
          <span className="text-white">{steps[currentStep].command}</span>
          {displayedLines.length === 0 && (
            <span className={`w-2 h-4 bg-white ${showCursor ? "opacity-100" : "opacity-0"}`} />
          )}
        </div>
        
        <div className="space-y-0.5">
          {displayedLines.map((line, i) => {
            const text = line ?? ""
            return (
              <div
                key={i}
                className={
                  text.includes("PASS")
                    ? "text-diff-add"
                    : text.includes("FAIL")
                    ? "text-diff-remove"
                    : text.includes("complete") || text.includes("All tests")
                    ? "text-terminal-text"
                    : "text-white/60"
                }
              >
                {text || "\u00A0"}
              </div>
            )
          })}
        </div>
      </div>

      <div className="px-4 py-3 border-t border-white/10 flex gap-2">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setCurrentStep(i)}
            className={`px-3 py-1.5 text-xs rounded transition-colors ${
              currentStep === i
                ? "bg-white/20 text-white"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            {i === 0 ? "start" : i === 1 ? "test" : "submit"}
          </button>
        ))}
      </div>
    </div>
  )
}
