import { GraduationCap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { education } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.08}>
              <div className="card-surface card-surface-hover h-full rounded-2xl border border-border bg-surface/60 p-6 hover:border-border-strong transition-colors">
                <div className="grid place-items-center h-10 w-10 rounded-xl border border-cyan/25 bg-cyan/10 text-cyan mb-4">
                  <GraduationCap size={18} />
                </div>
                <p className="font-mono text-xs text-faint">{item.period}</p>
                <h3 className="mt-2 font-display text-base font-semibold text-ink leading-snug">
                  {item.degree}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{item.institution}</p>
                {item.detail && (
                  <p className="mt-3 text-sm font-medium text-cyan">{item.detail}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
