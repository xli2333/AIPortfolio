"use client"

import { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const STREAM_CHARS = "01アあイいウうエえオおカかキきクくケけコこサさシしスすセせソそタたチちツつテてトとナなニにヌぬネねノのハはヒひフふヘへホほマまミみムむメめモもヤやユゆヨよラらリりルるレれロろワわヰゐヱゑヲをンん"

// Neural Network Generator for the complex background
const generateNeuralNodes = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `nn-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }))
}

export function AIWorkflowMatrix() {
  const [mounted, setMounted] = useState(false)
  const [activeStage, setActiveStage] = useState(0)
  
  // Dense neural network nodes
  const nnNodes = useMemo(() => generateNeuralNodes(60), [])

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        // Force cycle through exactly 7 stages (0 to 6)
        const next = (prev + 1) % 7;
        return next;
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return <div className="w-full h-full min-h-[500px] border border-border/30 bg-[#050505]" />

  const stages = [
    { label: "01. BIZDECK", metric: "PPT_WORKFLOW" },
    { label: "02. BIZCASE PRO", metric: "CONTENT_FACTORY" },
    { label: "03. INTELLIPORTFOLIO", metric: "FINANCE_RAG" },
    { label: "04. CLONE ME", metric: "AGENT_IM" },
    { label: "05. JOB SCOUT", metric: "DATA_PIPELINE" },
    { label: "06. TRANSLATION HUB", metric: "PDF_ASSET_SYNC" },
    { label: "07. THEORY CHECK", metric: "SEMANTIC_ENGINE" },
  ]

  return (
    <div className="relative w-full h-[450px] md:h-[500px] border border-accent/20 bg-[#050505] overflow-hidden group flex origin-left">
      
      {/* 0. Complex Neural Network Background - Fixed Visibility */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full">
           <defs>
            <linearGradient id="nn-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(249,115,22,0.1)" />
              <stop offset="50%" stopColor="rgba(249,115,22,0.6)" />
              <stop offset="100%" stopColor="rgba(249,115,22,0.1)" />
            </linearGradient>
          </defs>
          
          {/* Dense Connections */}
          {nnNodes.map((node, i) => {
            // Connect to 3 nearest/random nodes to create a web
            const targets = [
              nnNodes[(i + 1) % nnNodes.length],
              nnNodes[(i + 5) % nnNodes.length],
              nnNodes[(i + 12) % nnNodes.length]
            ]
            return targets.map((target, j) => (
              <motion.line
                key={`nn-conn-${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="url(#nn-line)"
                strokeWidth="1"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3 + Math.random() * 4, repeat: Infinity }}
              />
            ))
          })}
        </svg>
        
        {/* Nodes */}
        {nnNodes.map(node => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
            style={{ left: `${node.x}%`, top: `${node.y}%`, width: node.size + 1, height: node.size + 1 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
          />
        ))}
      </div>

      {/* 1. Left Data Stream (Matrix Code Rain) */}
      <div className="w-1/3 h-full border-r border-accent/30 bg-black/40 backdrop-blur-sm relative overflow-hidden flex z-10">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        
        {Array.from({ length: 12 }).map((_, i) => (
          <DataStreamColumn key={i} delay={i * 0.1} speed={8 + Math.random() * 8} />
        ))}

        <div className="absolute top-4 left-4 z-30 shadow-[0_0_10px_rgba(249,115,22,0.5)]">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#fff] font-bold bg-accent/80 px-2 py-1 border border-accent">
            RAW_UNSTRUCTURED_DATA
          </span>
        </div>
      </div>

      {/* 2. Middle Workflow Pipeline */}
      <div className="w-2/3 h-full p-8 relative flex flex-col justify-center z-10 bg-black/40 backdrop-blur-md">
        
        {/* Scanning Line Background - Brighter */}
        <motion.div
          animate={{ y: ["-100%", "500%"] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 shadow-[0_0_20px_2px_rgba(249,115,22,0.6)] pointer-events-none"
        />

        <div className="relative z-20 flex flex-col gap-3 w-full max-w-[95%] h-full justify-center">
          <div className="mb-1 flex justify-between items-end border-b border-accent/40 pb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/90 font-bold shadow-accent">
              System.Orchestrator
            </span>
            <span className="font-mono text-[9px] text-[#fff] bg-accent px-1.5 py-0.5 animate-pulse font-bold">
              ● RUNNING
            </span>
          </div>

          {stages.map((stage, i) => {
            const isActive = activeStage === i
            const isPast = activeStage > i
            
            return (
              <div key={i} className="flex flex-col gap-1.5 relative">
                <div className="flex justify-between items-center text-[9px] md:text-[10px] font-mono">
                  <span className={cn(
                    "tracking-widest transition-colors duration-300 font-bold",
                    isActive ? "text-[#fff] drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" : isPast ? "text-accent" : "text-muted-foreground/40"
                  )}>
                    {stage.label}
                  </span>
                  <span className={cn(
                    "transition-colors duration-300",
                    isActive ? "text-accent font-bold" : isPast ? "text-accent/60" : "text-muted-foreground/30"
                  )}>
                    {isActive ? stage.metric : isPast ? "[DONE]" : "[WAIT]"}
                  </span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-border/30 rounded-none overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                    initial={{ width: "0%" }}
                    animate={{ width: isPast ? "100%" : isActive ? "100%" : "0%" }}
                    transition={isActive ? { duration: 2.8, ease: "linear" } : { duration: 0 }}
                  />
                  {isActive && (
                    <motion.div 
                      className="absolute top-0 bottom-0 w-8 bg-white/80 blur-[2px]"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 2.8, ease: "linear" }}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Terminal Log Output at Bottom - High Contrast */}
        <div className="absolute bottom-8 right-8 left-8 font-mono text-[10px] text-accent p-4 border border-accent/30 bg-black/80 backdrop-blur-xl shadow-[0_0_15px_rgba(249,115,22,0.15)]">
          <p className="opacity-60 mb-1">{`> Loading tensor processing module...`}</p>
          <p className="opacity-80 mb-1">{`> Establishing connection to RAG vector DB...`}</p>
          <motion.p
             key={activeStage}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-[#fff] font-bold drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] mt-2"
          >
            {`> [${stages[activeStage].label}] executing_`}
            <span className="animate-pulse inline-block w-2 h-3 bg-white ml-1 align-middle" />
          </motion.p>
        </div>

      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent z-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent z-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent z-30 pointer-events-none" />
    </div>
  )
}

function DataStreamColumn({ delay, speed }: { delay: number; speed: number }) {
  const [chars, setChars] = useState<string>("")

  useEffect(() => {
    const generateStr = () => Array.from({ length: 30 })
      .map(() => STREAM_CHARS[Math.floor(Math.random() * STREAM_CHARS.length)]).join('\n')
    
    setChars(generateStr())

    const interval = setInterval(() => {
      setChars(prev => {
        const char = STREAM_CHARS[Math.floor(Math.random() * STREAM_CHARS.length)]
        return char + '\n' + prev.slice(0, -2)
      })
    }, speed * 4)

    return () => clearInterval(interval)
  }, [speed])

  return (
    <div className="flex-1 h-full overflow-hidden relative opacity-90">
      <motion.div
        className="font-mono text-[12px] md:text-[14px] font-bold leading-none text-accent break-all text-center drop-shadow-[0_0_4px_rgba(249,115,22,0.8)]"
        style={{ whiteSpace: 'pre-wrap' }}
        animate={{ y: ["-100%", "100%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }}
      >
        {chars}
      </motion.div>
    </div>
  )
}
