"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { Locale } from "@/lib/localize"

interface LanguageContextValue {
  locale: Locale
  setLocale: (next: Locale) => void
  toggleLocale: () => void
}

const STORAGE_KEY = "portfolio-locale"
const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh")

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "zh" || saved === "en") {
      setLocaleState(saved)
      return
    }

    const browserLang = window.navigator.language.toLowerCase()
    setLocaleState(browserLang.startsWith("zh") ? "zh" : "en")
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const toggleLocale = () => {
    setLocale(locale === "zh" ? "en" : "zh")
  }

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
