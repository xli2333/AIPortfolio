"use client"

import { Languages } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage()
  const nextLabel = locale === "zh" ? "EN" : "ZH"

  return (
    <button
      type="button"
      aria-label={`Switch language to ${nextLabel}`}
      onClick={toggleLocale}
      className="fixed left-3 bottom-3 sm:left-4 sm:bottom-4 md:left-6 md:bottom-6 z-[1200] inline-flex items-center gap-2 border border-border/70 bg-background/85 px-2.5 sm:px-3 py-2 text-xs md:text-sm font-mono tracking-wide text-foreground shadow-lg backdrop-blur-sm transition-colors hover:border-accent/70 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline">Lang: {nextLabel}</span>
      <span className="sm:hidden">{nextLabel}</span>
    </button>
  )
}
