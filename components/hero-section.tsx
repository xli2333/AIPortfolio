"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { AIWorkflowMatrix } from "@/components/ai-workflow-matrix"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col pt-28 md:pt-32 pb-12 pl-6 md:pl-16 lg:pl-28 pr-6 md:pr-12 overflow-hidden">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          PORTFOLIO
        </span>
      </div>

      <div ref={contentRef} className="w-full flex flex-col justify-center min-h-[calc(100vh-12rem)]">
        {/* Top: Flap Text */}
        <div className="w-full mb-16 md:mb-24">
          <SplitFlapAudioProvider>
            <div className="relative inline-block">
              <SplitFlapText text="AI WORKFLOW" speed={80} />
            </div>
          </SplitFlapAudioProvider>
        </div>

        {/* Bottom: 50/50 Content Split */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-start w-full max-w-[1800px]">
          
          {/* Left Column: Text & CTA */}
          <div className="xl:col-span-6 flex flex-col justify-start z-10 relative">
            <h2 className="font-[var(--font-bebas)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight whitespace-normal md:whitespace-nowrap text-foreground">
              AI应用作品集
            </h2>

            <p className="mt-6 max-w-2xl font-sans text-base md:text-lg text-foreground/90 leading-relaxed font-light italic">
              跨越 AI 从“Demo 演示”到“生产可用”的鸿沟，致力于将前沿技术转化为稳定落地的业务流。
            </p>

            <p className="mt-4 max-w-2xl font-sans text-sm md:text-base text-foreground/80 leading-relaxed font-light">
              本站收录了 7 个独立完成的真实项目，覆盖从需求拆解、全栈开发到生产部署的完整生命周期。深度实践多 Agent 编排、RAG 知识库检索、复杂长文本处理与异步架构设计，专注用扎实的工程能力解决实际业务挑战。
            </p>

            <div className="mt-10 flex items-center gap-8">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ScrambleTextOnHover text="查看项目矩阵" as="span" duration={0.6} />
                <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45 text-accent" />
              </a>
            </div>
          </div>

          {/* Right Column: Cyber Visualizer */}
          <div className="xl:col-span-6 relative w-full h-[360px] sm:h-[460px] md:h-[600px] flex items-center justify-start xl:-ml-4">
            <div className="w-full max-w-[800px]">
              <AIWorkflowMatrix />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
