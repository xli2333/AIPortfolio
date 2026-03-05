interface ProjectLiveLinkProps {
  href: string
  label?: string
}

export function ProjectLiveLink({ href, label = "Try Live Project" }: ProjectLiveLinkProps) {
  return (
    <div className="mt-8">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/5 px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10"
      >
        <span>{label}</span>
        <span className="text-[10px] text-accent transition-transform duration-300 group-hover:translate-x-0.5">OPEN</span>
      </a>
    </div>
  )
}
