"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function WorkSection() {
  const { locale } = useLanguage()
  const experiments = [
    {
      title: "BizDeck",
      medium: "AI Workflow System",
      description:
        locale === "zh"
          ? "咨询级演示文稿生产与存量 PDF 重建工作流。"
          : "Consulting-grade deck production workflow with legacy PDF reconstruction.",
      span: "col-span-2 row-span-2",
      link: "/projects/bizdeck",
    },
    {
      title: "BizCase Pro",
      medium: "Content Factory",
      description:
        locale === "zh"
          ? "四阶段工作流驱动的商业案例与教参生成平台。"
          : "Four-stage workflow for business case and teaching-note generation.",
      span: "col-span-1 row-span-1",
      link: "/projects/bizcase",
    },
    {
      title: "IntelliPortfolio",
      medium: "Financial RAG",
      description:
        locale === "zh"
          ? "贯穿多用户资产管理与异步研报的投研工作台。"
          : "Research workspace for multi-user assets and async report generation.",
      span: "col-span-1 row-span-2",
      link: "/projects/intelliportfolio",
    },
    {
      title: "Clone Me",
      medium: "Agent & IM",
      description:
        locale === "zh"
          ? "企业微信加密回调与防重复消息处理系统。"
          : "WeCom encrypted callback and duplicate-safe message automation.",
      span: "col-span-1 row-span-1",
      link: "/projects/cloneme",
    },
    {
      title: "Job Scout",
      medium: "Data Pipeline",
      description:
        locale === "zh"
          ? "基于职位采集与 AI 推断的求职决策流。"
          : "Job-search decision pipeline powered by crawling and AI inference.",
      span: "col-span-2 row-span-1",
      link: "/projects/jobscout",
    },
    {
      title: "TransStruct Workspace",
      medium: "Translation Tool",
      description:
        locale === "zh"
          ? "集翻译、批注与协同于一体的 PDF 资产化工具。"
          : "A single workspace for PDF translation, annotation, and collaboration.",
      span: "col-span-1 row-span-1",
      link: "/projects/yigou",
    },
    {
      title: "Theory Validator",
      medium: "Semantic Check",
      description:
        locale === "zh"
          ? "跨越字面比对、识别隐性逻辑的理论查重系统。"
          : "Theory-duplication checker beyond literal overlap to semantic reasoning.",
      span: "col-span-1 row-span-1",
      link: "/projects/theorycheck",
    },
  ]

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="relative py-20 md:py-24 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-12 flex items-end justify-between">
        <div>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-accent">01 / Portfolio</span>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl tracking-tight">
            {locale === "zh" ? "核心工程矩阵" : "Core Engineering Matrix"}
          </h2>
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {experiments.map((experiment, index) => (
          <WorkCard key={index} experiment={experiment} index={index} persistHover={index === 0} />
        ))}
      </div>
    </section>
  )
}

function WorkCard({
  experiment,
  index,
  persistHover = false,
}: {
  experiment: {
    title: string
    medium: string
    description: string
    span: string
    link?: string
  }
  index: number
  persistHover?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)

  useEffect(() => {
    if (!persistHover || !cardRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)

    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
        experiment.span,
        isActive && "border-accent/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {experiment.link ? <Link href={experiment.link} className="absolute inset-0 z-20" /> : null}

      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{experiment.medium}</span>
        <h3
          className={cn(
            "mt-3 font-serif text-2xl md:text-4xl tracking-tight transition-colors duration-300",
            isActive ? "text-accent" : "text-foreground",
          )}
        >
          {experiment.title}
        </h3>
      </div>

      <div className="relative z-10">
        <p
          className={cn(
            "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          {experiment.description}
        </p>
      </div>

      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
          isActive ? "text-accent" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}
