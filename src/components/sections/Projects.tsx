import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import FlagshipCard from "../ui/FlagshipCard";
import Reveal from "../ui/Reveal";
import { flagshipProject, gridProjects, githubProfile } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Products I've shipped"
          description="Agentic infrastructure, compilers, and full-stack platforms spanning Arbitrum, Stellar, Solana, Algorand, and Injective — built end to end, from smart contracts to the UI on top of them."
        />

        <div className="mt-14">
          <FlagshipCard project={flagshipProject} />
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.06} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a
            href={githubProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-cyan transition-colors"
          >
            More projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
