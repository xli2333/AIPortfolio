"use client"

import { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"

// Helper to generate random points within the container
const generateNodes = (count: number, isMain = false) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${isMain ? "main" : "sub"}-${i}`,
    x: Math.random() * 100, // percentage
    y: Math.random() * 100, // percentage
    size: isMain ? Math.random() * 4 + 4 : Math.random() * 2 + 1, // Main nodes are bigger
  }))
}

export function AgentSwarmNetwork() {
  const [mounted, setMounted] = useState(false)
  const [activeConnections, setActiveConnections] = useState<number[]>([])

  // Generate fixed nodes on mount to avoid hydration mismatch
  const mainNodes = useMemo(() => generateNodes(5, true), [])
  const subNodes = useMemo(() => generateNodes(40, false), [])
  const allNodes = useMemo(() => [...mainNodes, ...subNodes], [mainNodes, subNodes])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Randomly activate connections to simulate data flow
  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      // Pick 3 random main nodes to act as active hubs
      const newActive = [
        Math.floor(Math.random() * mainNodes.length),
        Math.floor(Math.random() * mainNodes.length),
        Math.floor(Math.random() * mainNodes.length)
      ]
      setActiveConnections(newActive)
    }, 2000)

    return () => clearInterval(interval)
  }, [mounted, mainNodes.length])

  if (!mounted) return <div className="w-full h-full min-h-[300px] border border-border/30 bg-black" />

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] border border-border/30 bg-[#050505] overflow-hidden group">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* SVG Canvas for Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(249,115,22,0)" />
            <stop offset="50%" stopColor="rgba(249,115,22,0.4)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </linearGradient>
        </defs>
        
        {/* Draw faint connections between all main nodes */}
        {mainNodes.map((node, i) => (
          mainNodes.slice(i + 1).map((target, j) => (
            <line
              key={`main-conn-${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))
        ))}

        {/* Draw active pulsing lines from active main nodes to sub nodes */}
        {activeConnections.map((mainIdx, i) => {
          const source = mainNodes[mainIdx]
          // Pick a random sub node to connect to
          const target = subNodes[(mainIdx * 7 + i) % subNodes.length]
          
          return (
            <motion.line
              key={`active-${mainIdx}-${i}`}
              x1={`${source.x}%`}
              y1={`${source.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: Math.random() }}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {allNodes.map((node) => {
        const isMain = node.id.startsWith("main")
        const isActive = isMain && activeConnections.includes(parseInt(node.id.split('-')[1]))
        
        return (
          <motion.div
            key={node.id}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: node.size,
              height: node.size,
              backgroundColor: isMain ? (isActive ? "var(--color-accent)" : "#444") : "#222",
              boxShadow: isActive ? "0 0 10px 2px rgba(249,115,22,0.5)" : "none",
            }}
            animate={
              isMain 
                ? { scale: isActive ? [1, 1.5, 1] : 1 } 
                : { opacity: [0.3, 0.7, 0.3] }
            }
            transition={{ 
              duration: isMain ? 2 : Math.random() * 3 + 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )
      })}

      {/* Roving Data Packet (The glowing dot traveling) */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_2px_rgba(249,115,22,0.8)] -translate-x-1/2 -translate-y-1/2"
        animate={{
          left: mainNodes.map(n => `${n.x}%`),
          top: mainNodes.map(n => `${n.y}%`),
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* UI Overlay Elements */}
      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <span className="font-mono text-[9px] uppercase tracking-widest text-accent flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          SWARM.AGENT_SYNC
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50 ml-3.5">
          STATUS: ACTIVE_ROUTING
        </span>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1">
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
          RAG_VECTOR_SEARCH
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
          LATENCY: {Math.floor(Math.random() * 20 + 8)}ms
        </span>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-border/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-border/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-border/40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-border/40 pointer-events-none" />
    </div>
  )
}
