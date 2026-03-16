"use client"

import { useState } from "react"

const tabs = [
  { id: "error", label: "error.log" },
  { id: "code", label: "handler.py" },
  { id: "fix", label: "fix.diff" },
]

const content = {
  error: `Traceback (most recent call last):
  File "app/handlers/message.py", line 47
    in process_message
  File "app/services/queue.py", line 23
    in enqueue
TypeError: 'NoneType' object is not subscriptable

Context: user_id=4521, channel="general"
Last successful: 2 minutes ago
Failure rate: 23% of requests`,

  code: `async def process_message(self, payload):
    user = await self.get_user(payload["user_id"])
    channel = self.channels.get(payload["channel"])
    
    # Bug: channel can be None if not cached
    message = Message(
        content=payload["content"],
        author=user,
        channel_id=channel["id"]  # <- crashes here
    )
    
    await self.queue.enqueue(message)`,

  fix: `@@ -4,7 +4,10 @@ async def process_message(self, payload):
     channel = self.channels.get(payload["channel"])
     
-    # Bug: channel can be None if not cached
+    # Fix: fetch channel if not in cache
+    if channel is None:
+        channel = await self.fetch_channel(payload["channel"])
+    
     message = Message(
         content=payload["content"],
         author=user,`,
}

export function CodeDemo() {
  const [activeTab, setActiveTab] = useState("error")

  return (
    <div className="bg-terminal rounded-xl overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 text-xs transition-colors rounded ${
                activeTab === tab.id
                  ? "text-white bg-white/10"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 min-h-[280px]">
        <pre className="text-xs leading-relaxed overflow-x-auto">
          <code>
            {content[activeTab as keyof typeof content].split("\n").map((line, i) => (
              <div key={i} className="flex">
                <span className="w-8 shrink-0 text-white/30 select-none">
                  {i + 1}
                </span>
                <span
                  className={
                    activeTab === "error" && (line.includes("TypeError") || line.includes("crashes"))
                      ? "text-diff-remove"
                      : activeTab === "fix" && line.startsWith("+")
                      ? "text-diff-add"
                      : activeTab === "fix" && line.startsWith("-")
                      ? "text-diff-remove"
                      : "text-white/80"
                  }
                >
                  {line || " "}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
      <div className="px-4 py-3 border-t border-white/10">
        <p className="text-xs text-white/50">
          {activeTab === "error" && "Start here. What is the actual problem?"}
          {activeTab === "code" && "Found it. Line 9 assumes channel exists."}
          {activeTab === "fix" && "The fix: check and fetch if missing."}
        </p>
      </div>
    </div>
  )
}
