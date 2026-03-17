import { cn } from "@/lib/utils"

interface ProjectLiveLinkProps {
  href: string
  label?: string
  badgeLabel?: string
  className?: string
  wrapperClassName?: string
}

export function ProjectLiveLink({
  href,
  label = "Try Live Project",
  badgeLabel = "OPEN",
  className,
  wrapperClassName,
}: ProjectLiveLinkProps) {
  return (
    <div className={cn("mt-8", wrapperClassName)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group inline-flex min-h-[60px] w-full max-w-full items-center justify-between gap-4 border border-accent/40 bg-accent/5 px-5 py-3 text-left font-mono text-xs uppercase tracking-widest text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 sm:w-auto",
          className,
        )}
      >
        <span className="leading-[1.15]">{label}</span>
        <span className="shrink-0 text-[10px] text-accent transition-transform duration-300 group-hover:translate-x-0.5">
          {badgeLabel}
        </span>
      </a>
    </div>
  )
}
