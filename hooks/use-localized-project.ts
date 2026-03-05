"use client"

import { useMemo } from "react"
import { projects } from "@/data/projects"
import { useLanguage } from "@/components/language-provider"
import { localizeProjectData } from "@/lib/localize"

const TRAILING_STOP_PATTERN = /[。｡．.!！？?]+$/u
const TRAILING_NOISE_PATTERN = /[\uFFFD銆]+$/u

function trimTrailingPunctuation(value: string) {
  let output = value.trim()

  // Remove ending punctuation repeatedly in case of mixed symbols.
  for (let i = 0; i < 3; i++) {
    const next = output.replace(TRAILING_STOP_PATTERN, "").trim()
    if (next === output) break
    output = next
  }

  // Remove common mojibake tail markers if they remain.
  return output.replace(TRAILING_NOISE_PATTERN, "").trim()
}

export function useLocalizedProject(key: keyof typeof projects) {
  const { locale } = useLanguage()
  return useMemo(() => {
    const localized = localizeProjectData(projects[key], locale)
    return {
      ...localized,
      tagline: trimTrailingPunctuation(localized.tagline),
    }
  }, [key, locale])
}
