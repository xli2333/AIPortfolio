import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageProvider } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { EnglishTextGuard } from "@/components/english-text-guard"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Workflow Portfolio",
  description:
    "System-level portfolio covering multi-agent orchestration, workflow engineering, AI asset rebuilding, and protocol governance.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <LanguageProvider>
            <div className="noise-overlay" aria-hidden="true" />
            <ThemeToggle />
            <LanguageToggle />
            <EnglishTextGuard />
            <SmoothScroll>{children}</SmoothScroll>
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
