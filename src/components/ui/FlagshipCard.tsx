import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "../../data/projects";
import Reveal from "./Reveal";

export default function FlagshipCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="card-surface group relative overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-surface via-surface to-surface/40 p-8 sm:p-10">
        <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-cyan/15 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet/10 blur-[110px]" />

        <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-mono text-cyan">
              <Sparkles size={12} />
              Flagship build
            </span>

            <h3 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-2 text-base font-medium text-muted">{project.tagline}</p>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-white/[0.03] px-2 py-1 text-[11px] font-mono text-faint"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-indigo to-violet px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90 transition-opacity"
              >
                <Github size={16} />
                View repository
              </a>
              <span className="text-xs font-mono text-faint">{project.role}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {project.highlights.map((h) => (
              <div key={h} className="rounded-2xl border border-border bg-bg/40 p-4">
                <p className="text-sm text-ink leading-snug flex items-start gap-2">
                  <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-cyan" />
                  {h}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
