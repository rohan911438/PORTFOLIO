import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";
import { projects, githubProfile, githubRepoCount } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Work"
            title="Products I've shipped"
            description="Full-stack platforms, compilers, and agentic systems — built end to end, from smart contracts to the UI on top of them."
          />
          <Reveal delay={0.1}>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-ink hover:border-cyan/50 hover:text-cyan transition-colors whitespace-nowrap"
            >
              <Github size={16} />
              {githubRepoCount} repos on GitHub
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.08} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center sm:hidden">
          <a
            href={githubProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-ink"
          >
            <Github size={16} />
            {githubRepoCount} repos on GitHub
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-6 text-center hidden sm:block">
          <a
            href={githubProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-cyan transition-colors"
          >
            View all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
