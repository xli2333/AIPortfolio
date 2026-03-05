"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : true
  const nextTheme = isDark ? "light" : "dark"
  const nextLabel = isDark ? "Day mode" : "Night mode"

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextLabel}`}
      onClick={() => setTheme(nextTheme)}
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[1200] inline-flex items-center gap-2 border border-border/70 bg-background/85 px-3 py-2 text-xs md:text-sm font-mono tracking-wide text-foreground shadow-lg backdrop-blur-sm transition-colors hover:border-accent/70 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>Switch: {nextLabel}</span>
    </button>
  )
}
