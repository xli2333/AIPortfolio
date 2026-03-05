"use client"

import { useEffect, useRef, useState } from "react"
import { projects } from "@/data/projects"
import { AnimatedNoise } from "@/components/animated-noise"
import { SplitFlapText, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { ProjectLiveLink } from "@/components/project-live-link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function BizDeckPage() {
  const project = projects.bizdeck
  
  const heroRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(".hero-fade", {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-foreground">
      <AnimatedNoise opacity={0.03} />

      {/* Floating Meta */}
      <div className="hidden md:block fixed top-12 right-12 z-50 pointer-events-none">
        <div className="border border-border bg-background/80 backdrop-blur-md px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground/90 flex flex-col items-end gap-1">
          <span>Role: {project.meta.role}</span>
          <span>Type: {project.meta.type}</span>
          <span>{project.meta.year}</span>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 pl-6 md:pl-28 pr-6 md:pr-12">
        <div className="hero-fade flex-1 w-full max-w-5xl">
          <SplitFlapAudioProvider>
            <SplitFlapText text={project.title.toUpperCase()} speed={80} />
          </SplitFlapAudioProvider>

          <h2 className="text-3xl md:text-5xl mt-8 font-serif italic text-foreground max-w-4xl leading-tight">
            {project.tagline}
          </h2>
          <p className="mt-6 text-xl text-foreground/80 leading-relaxed font-light max-w-3xl">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 md:hidden">
            <span className="border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground/90">
              Role: {project.meta.role}
            </span>
            <span className="border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground/90">
              Type: {project.meta.type}
            </span>
            {project.meta.year ? (
              <span className="border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground/90">
                {project.meta.year}
              </span>
            ) : null}
          </div>
          <ProjectLiveLink href="https://aideckgenerator.vercel.app/" />
        </div>
      </section>

      {/* 1.5 Core Capabilities (Left-Right Layout) */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border bg-muted/5">
        <div className="max-w-7xl">
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/90 block mb-20">
            [00] Core Capabilities / 核心能力
          </span>
          <div className="space-y-32">
            {project.coreCapabilities?.map((cap, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-sm text-accent tracking-widest">0{i+1}</span>
                    <div className="h-[1px] flex-1 bg-border" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed font-light">
                    {cap.description}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <Dialog>
                    <DialogTrigger className="w-full text-left outline-none group">
                      <div className="aspect-[16/9] relative overflow-hidden border border-border bg-muted shadow-2xl transition-all duration-700 hover:shadow-accent/5">
                        <Image 
                          src={cap.image} 
                          alt={cap.title} 
                          fill
                          className="object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 border border-border font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to Enlarge / 点击放大
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] w-full md:max-w-7xl h-auto md:h-[85vh] p-0 border-none bg-zinc-950/95 backdrop-blur-3xl flex flex-col md:flex-row gap-0 overflow-hidden rounded-none shadow-2xl">
                      <div className="relative flex-[2.5] w-full bg-black/40 flex items-center justify-center p-4 md:p-8">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image 
                            src={cap.image} 
                            alt={cap.title} 
                            width={1920}
                            height={1080}
                            className="max-w-full max-h-full object-contain shadow-2xl" 
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0 md:min-w-[320px] p-6 md:p-12 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between bg-zinc-900/50">
                        <div>
                          <div className="flex items-center gap-3 mb-8">
                            <span className="px-2 py-1 bg-accent/20 text-accent font-mono text-[10px] tracking-tighter border border-accent/30">
                              CAPABILITY_0{i+1}
                            </span>
                            <div className="h-[1px] flex-1 bg-white/10" />
                          </div>
                          
                          <h4 className="font-medium text-3xl text-white mb-8 tracking-tight leading-tight">
                            {cap.title}
                          </h4>
                          
                          <div className="space-y-10">
                            <div className="space-y-3">
                              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Feature Description / 能力释义</span>
                              <p className="text-base text-zinc-300 font-light leading-relaxed">
                                {cap.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between text-zinc-500 font-mono text-[10px]">
                          <span className="uppercase tracking-widest text-accent">Strategic.AI / BizDeck</span>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Problem & 3. Solution */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/90 block mb-8">
              [01] User Pain Points
            </span>
            <ul className="space-y-6">
              {project.problems.map((prob, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-accent mt-1">0{i+1}</span>
                  <p className="text-sm md:text-base leading-relaxed text-foreground/90">{prob}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/90 block mb-8">
              [02] User Journey & Solutions
            </span>
            <Tabs defaultValue="path-0" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 gap-4">
                {project.solutionPaths.map((path, i) => (
                  <TabsTrigger 
                    key={i} 
                    value={`path-${i}`}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent px-0 py-2 font-mono text-xs uppercase text-foreground/90"
                  >
                    Path {['A', 'B', 'C'][i]}
                  </TabsTrigger>
                ))}
              </TabsList>
              {project.solutionPaths.map((path, i) => (
                <TabsContent key={i} value={`path-${i}`} className="pt-6">
                  <h4 className="text-lg font-medium mb-2 text-foreground/90">{path.name}</h4>
                  <p className="text-foreground/90 font-mono text-sm">{path.description}</p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* 4. Features & 7. Results */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border bg-muted/5">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/90 block mb-8">
              [03] Product Features
            </span>
            <div className="space-y-4">
              {project.productFeatures.map((tech, i) => (
                <div key={i} className="border border-border p-4 bg-background">
                  <p className="text-sm text-foreground/90">{tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/90 block mb-8">
              [04] Business Impact
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((res, i) => (
                <div key={i} className="p-4 border border-border bg-background flex flex-col justify-between min-h-32">
                  <span className="font-mono text-[10px] text-foreground/90">Result 0{i+1}</span>
                  <p className="text-sm font-medium leading-relaxed break-words text-foreground/90">{res}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Flow Evidence (U01-U22) */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border">
        <div className="max-w-7xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/90 block mb-4">
              [05] User Flow Manual
            </span>
            <h3 className="text-3xl font-medium tracking-tight text-foreground/90">产品交互与使用流</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {project.screenshots.map((shot, i) => (
              <Dialog key={i}>
                <DialogTrigger className="text-left group outline-none">
                  <div className="aspect-[16/9] relative overflow-hidden border border-border bg-muted mb-4">
                    <Image 
                      src={shot.url} 
                      alt={shot.id} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80"
                    />
                    <div className="absolute top-2 left-2 bg-background/90 px-2 py-1 font-mono text-[10px] border border-border text-foreground/90">
                      {shot.id}
                    </div>
                  </div>
                  <h4 className="font-medium text-sm mb-1 text-foreground/90">{shot.focus}</h4>
                  <p className="text-xs text-foreground/90 mb-1 line-clamp-1">
                    <span className="font-mono">场景动作:</span> {shot.action}
                  </p>
                  <p className="text-xs text-foreground/90 line-clamp-1">
                    <span className="font-mono text-accent">产品设计:</span> {shot.evidence}
                  </p>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-full md:max-w-7xl h-auto md:h-[85vh] p-0 border-none bg-zinc-950/95 backdrop-blur-3xl flex flex-col md:flex-row gap-0 overflow-hidden rounded-none shadow-2xl">
                  <div className="relative flex-[2.5] w-full bg-black/40 flex items-center justify-center p-4 md:p-8">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image 
                        src={shot.url} 
                        alt={shot.id} 
                        width={1920}
                        height={1080}
                        className="max-w-full max-h-full object-contain shadow-2xl" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 md:min-w-[320px] p-6 md:p-12 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between bg-zinc-900/50">
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <span className="px-2 py-1 bg-accent/20 text-accent font-mono text-[10px] tracking-tighter border border-accent/30">
                          LOG_{shot.id}
                        </span>
                        <div className="h-[1px] flex-1 bg-white/10" />
                      </div>
                      
                      <h4 className="font-medium text-3xl text-white mb-8 tracking-tight leading-tight">
                        {shot.focus}
                      </h4>
                      
                      <div className="space-y-10">
                        <div className="space-y-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">User Action / 场景动作</span>
                          <p className="text-base text-zinc-300 font-light leading-relaxed">
                            {shot.action}
                          </p>
                        </div>
                        
                        <div className="space-y-3 p-6 bg-white/[0.03] border border-white/5 relative group">
                          <div className="absolute -top-[1px] left-6 w-8 h-[1px] bg-accent" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Design Logic / 产品设计逻辑</span>
                          <p className="text-lg font-medium text-white leading-snug">
                            {shot.evidence}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between text-zinc-500 font-mono text-[10px]">
                      <span>PAGE {String(i + 1).padStart(2, '0')} / {String(project.screenshots.length).padStart(2, '0')}</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Engineering Depth -> Design Philosophy */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/90 block mb-8">
            [06] Design Philosophy
          </span>
          <h3 className="text-3xl font-medium tracking-tight mb-8 text-foreground/90">产品设计底层逻辑</h3>
          <Accordion type="single" collapsible className="w-full">
            {project.designPhilosophy.map((depth, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-lg hover:text-accent hover:no-underline text-foreground/90">
                  <span className="font-mono text-xs text-foreground/90 mr-4">0{i+1}</span>
                  {depth.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/90 font-mono leading-relaxed">
                  {depth.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
