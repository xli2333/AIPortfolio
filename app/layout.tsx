import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"

export const metadata: Metadata = {
  title: "全栈工作流与工程化实践作品集",
  description:
    "涵盖多 Agent 协同、工作流编排、AI 资产重建与底层协议治理的系统工程实践方案。",
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
          <div className="noise-overlay" aria-hidden="true" />
          <ThemeToggle />
          <SmoothScroll>{children}</SmoothScroll>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
