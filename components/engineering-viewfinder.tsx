"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  "/projects/bizdeck/U12-workspace-with-global-actions-and-version-switch.png", // Has good UI complexity
  "/projects/bizdeck/U09-slide-status-structural-analysis-in-progress.png",
  "/projects/bizdeck/U21-project-iron-ocr-analysis-processing.png",
]

const logs = [
  "SYS.RAG_ACTIVE [OK]",
  "LATENCY: 12ms",
  "STATUS: SYNCHRONIZED",
  "OCR.ENGINE: STANDBY",
  "AGENT.QUEUE: 0",
  "MEMORY.ALLOC: 42%",
]

export function EngineeringViewfinder() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [logIndex, setLogIndex] = useState(0)

  // Image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Log rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] border border-accent/30 bg-background overflow-hidden flex items-center justify-center group">
      
      {/* 1. Base Layer: Images with Grayscale & Blend Mode */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt="System Interface"
            fill
            className="object-cover object-left-top grayscale contrast-125 brightness-75"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Middle Layer: Orange Cyber Overlay */}
      {/* This creates the duotone orange/black effect using multiply/screen blends */}
      <div className="absolute inset-0 bg-accent/20 mix-blend-color z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none opacity-80" />
      
      {/* 3. Top Layer: Structural UI Effects */}
      
      {/* 3.1 Scanner Line */}
      <motion.div
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-[2px] bg-accent/50 shadow-[0_0_8px_2px_rgba(249,115,22,0.4)] z-20 pointer-events-none"
      />

      {/* 3.2 Viewfinder Corners */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent z-20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-accent z-20" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-accent z-20" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent z-20" />

      {/* 3.3 Dynamic Logs & Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500">
        <div className="w-16 h-16 border border-accent rounded-full flex items-center justify-center">
           <div className="w-1 h-1 bg-accent rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-20 font-mono text-[10px] text-accent flex flex-col gap-1">
        <span className="opacity-50">TARGET: /src/engine</span>
        <motion.span
          key={logIndex}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold"
        >
          {logs[logIndex]}
        </motion.span>
      </div>

      <div className="absolute top-6 right-6 z-20 font-mono text-[10px] text-accent text-right">
         <span className="animate-pulse">REC ●</span>
      </div>

      {/* Scanline pattern overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px)`
        }}
      />
    </div>
  )
}
