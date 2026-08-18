import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Pill from "../ui/Pill";
import { skillGroups } from "../../data/skills";

const tones: Array<"cyan" | "violet" | "amber" | "default"> = [
  "cyan",
  "amber",
  "violet",
  "cyan",
  "violet",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & technologies"
          description="The languages, frameworks, and ecosystems I reach for — across builder work and community work alike."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
                <h3 className="font-display text-base font-semibold text-ink mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item} tone={tones[i % tones.length]}>
                      {item}
                    </Pill>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
