"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const stackGridClass = "grid grid-cols-2 gap-x-4 gap-y-2"
  const stackItemClass = "font-mono text-sm md:text-base text-foreground/80 leading-tight"

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Grid columns fade up with stagger
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-sm md:text-base uppercase tracking-[0.3em] text-accent">02 / Stack</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">技术栈与构建环境</h2>
      </div>

      {/* Multi-column layout */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
        {/* Frontend */}
        <div className="rounded-sm border border-border/30 bg-background/20 p-4 md:p-5">
          <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Frontend</h4>
          <ul className={stackGridClass}>
            <li className={stackItemClass}>React 19</li>
            <li className={stackItemClass}>Next.js</li>
            <li className={stackItemClass}>Vite</li>
            <li className={stackItemClass}>TypeScript</li>
            <li className={stackItemClass}>Tailwind CSS</li>
            <li className={stackItemClass}>Radix UI</li>
          </ul>
        </div>

        {/* Backend & Data */}
        <div className="rounded-sm border border-border/30 bg-background/20 p-4 md:p-5">
          <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Backend</h4>
          <ul className={stackGridClass}>
            <li className={stackItemClass}>FastAPI</li>
            <li className={stackItemClass}>Flask</li>
            <li className={stackItemClass}>Node Gateway</li>
            <li className={stackItemClass}>Supabase Auth</li>
            <li className={stackItemClass}>Postgres</li>
            <li className={stackItemClass}>Storage</li>
            <li className={stackItemClass}>SQLite</li>
            <li className={stackItemClass}>FTS5</li>
            <li className={stackItemClass}>Vector Index</li>
            <li className={stackItemClass}>WebSocket</li>
            <li className={stackItemClass}>Async Task Flow</li>
          </ul>
        </div>

        {/* AI & Animation */}
        <div className="rounded-sm border border-border/30 bg-background/20 p-4 md:p-5">
          <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Ecosystem</h4>
          <ul className={stackGridClass}>
            <li className={stackItemClass}>Gemini LLM</li>
            <li className={stackItemClass}>Dense Rerank</li>
            <li className={stackItemClass}>html2pdf.js</li>
            <li className={stackItemClass}>Aliyun OCR</li>
            <li className={stackItemClass}>AKShare</li>
            <li className={stackItemClass}>GSAP</li>
            <li className={stackItemClass}>Framer Motion</li>
          </ul>
        </div>

        {/* Role */}
        <div className="rounded-sm border border-border/30 bg-background/20 p-4 md:p-5">
          <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Role</h4>
          <ul className="space-y-2">
            <li className={stackItemClass}>产品架构</li>
            <li className={stackItemClass}>全栈开发</li>
            <li className={stackItemClass}>Web + Data</li>
            <li className={stackItemClass}>RAG Engineering</li>
          </ul>
        </div>

        {/* Delivery */}
        <div className="rounded-sm border border-border/30 bg-background/20 p-4 md:p-5">
          <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Delivery</h4>
          <ul className="space-y-2">
            <li className={stackItemClass}>Vercel</li>
            <li className={stackItemClass}>Render</li>
            <li className={stackItemClass}>Supabase</li>
            <li className={stackItemClass}>Docker</li>
            <li className={stackItemClass}>WeCom Callback</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="rounded-sm border border-border/30 bg-background/20 p-4 md:p-5">
          <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Contact</h4>
          <ul className="flex items-center gap-3">
            <li>
              <a
                href="mailto:lixiangang0812@gmail.com"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center border border-border/40 text-foreground/80 hover:text-accent hover:border-accent/60 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <span className="sr-only">lixiangang0812@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/xli2333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center border border-border/40 text-foreground/80 hover:text-accent hover:border-accent/60 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2a10 10 0 0 0-3.162 19.487c.5.092.682-.218.682-.483 0-.238-.009-.868-.014-1.703-2.776.603-3.362-1.338-3.362-1.338-.455-1.154-1.11-1.462-1.11-1.462-.908-.62.07-.607.07-.607 1.004.07 1.532 1.031 1.532 1.031.893 1.528 2.342 1.087 2.912.832.091-.647.35-1.087.637-1.337-2.217-.252-4.55-1.109-4.55-4.936 0-1.09.39-1.982 1.029-2.68-.104-.253-.446-1.268.098-2.644 0 0 .84-.269 2.75 1.024A9.566 9.566 0 0 1 12 6.844c.85.004 1.705.115 2.505.337 1.909-1.293 2.748-1.024 2.748-1.024.545 1.376.203 2.391.1 2.644.64.698 1.027 1.59 1.027 2.68 0 3.836-2.336 4.68-4.56 4.928.359.31.678.922.678 1.859 0 1.343-.012 2.427-.012 2.757 0 .268.18.58.688.482A10 10 0 0 0 12 2Z" />
                </svg>
                <span className="sr-only">https://github.com/xli2333</span>
              </a>
            </li>
            <li>
              <a
                href="tel:15628758361"
                aria-label="Phone"
                className="inline-flex h-10 w-10 items-center justify-center border border-border/40 text-foreground/80 hover:text-accent hover:border-accent/60 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.89.33 1.76.62 2.59a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.49-1.19a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.59.62A2 2 0 0 1 22 16.92Z" />
                </svg>
                <span className="sr-only">15628758361</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}
