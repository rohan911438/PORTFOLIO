import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import Reveal from "./Reveal";

const accentClasses: Record<Project["accent"], { ring: string; glow: string; tag: string; dot: string }> = {
  cyan: {
    ring: "group-hover:border-cyan/40",
    glow: "from-cyan/20",
    tag: "border-cyan/30 text-cyan bg-cyan/10",
    dot: "bg-cyan",
  },
  violet: {
    ring: "group-hover:border-violet/40",
    glow: "from-violet/20",
    tag: "border-violet/30 text-violet bg-violet/10",
    dot: "bg-violet",
  },
  amber: {
    ring: "group-hover:border-amber/40",
    glow: "from-amber/20",
    tag: "border-amber/30 text-amber bg-amber/10",
    dot: "bg-amber",
  },
  rose: {
    ring: "group-hover:border-rose-400/40",
    glow: "from-rose-400/20",
    tag: "border-rose-400/30 text-rose-400 bg-rose-400/10",
    dot: "bg-rose-400",
  },
  emerald: {
    ring: "group-hover:border-emerald-400/40",
    glow: "from-emerald-400/20",
    tag: "border-emerald-400/30 text-emerald-400 bg-emerald-400/10",
    dot: "bg-emerald-400",
  },
};

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const accent = accentClasses[project.accent];

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`card-surface card-surface-hover group relative h-full flex flex-col rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 transition-colors ${accent.ring}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${accent.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-mono ${accent.tag}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                {project.chain}
              </span>
              <span className="text-[11px] font-mono text-faint">{project.role}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-muted">{project.tagline}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="grid place-items-center h-9 w-9 rounded-full border border-border text-muted hover:text-ink hover:border-border-strong transition-colors"
            >
              <Github size={16} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="grid place-items-center h-9 w-9 rounded-full border border-border text-muted hover:text-ink hover:border-border-strong transition-colors"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="relative mt-4 text-sm text-muted leading-relaxed">
          {project.description}
        </p>

        <ul className="relative mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-muted/90">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-60" />
              {h}
            </li>
          ))}
        </ul>

        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-white/[0.03] px-2 py-1 text-[11px] font-mono text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.live ?? project.github}
          target="_blank"
          rel="noreferrer"
          className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-cyan transition-colors"
        >
          {project.live ? "View live demo" : "View repository"}
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </article>
    </Reveal>
  );
}
