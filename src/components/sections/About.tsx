import { Code2, Users2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const facets = [
  {
    icon: Code2,
    tone: "cyan" as const,
    title: "Builder",
    text:
      "Third-year IT student and self-taught developer who ships real products at the intersection of Web3, AI, and full-stack engineering — from smart contract compilers to agentic systems.",
  },
  {
    icon: Users2,
    tone: "violet" as const,
    title: "Community Leader",
    text:
      "Developer Advocate and Blockchain Lead who has activated 1,000+ members into Web3/AI, run 5+ IRL events with partners like MetaMask, and co-built the GDG on Campus GCECT chapter from zero.",
  },
];

const toneClasses = {
  cyan: "border-cyan/25 text-cyan bg-cyan/10",
  violet: "border-violet/25 text-violet bg-violet/10",
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="One person, two ways of moving the ecosystem forward"
          description="I don't treat building and community-building as separate tracks — the products I ship teach me what developers need, and the communities I grow tell me what's worth building next."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-start">
          <div className="space-y-6">
            {facets.map((facet, i) => (
              <Reveal key={facet.title} delay={i * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-6 hover:border-border-strong transition-colors">
                  <div
                    className={`shrink-0 grid place-items-center h-11 w-11 rounded-xl border ${
                      toneClasses[facet.tone]
                    }`}
                  >
                    <facet.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {facet.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">
                      {facet.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <p className="text-muted leading-relaxed">
                I maintain{" "}
                <span className="text-ink font-medium">70+ public repositories</span>{" "}
                and have published an npm SDK used across 8+ EVM networks. Whether
                I'm at a keyboard shipping code or on stage onboarding the next
                cohort of builders, the goal is the same: make the ecosystem
                easier to build in.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/15 via-transparent to-cyan/15 blur-2xl" />
            <div className="relative rounded-2xl border border-border-strong overflow-hidden bg-surface">
              <img
                src="/images/community-group.png"
                alt="Rohan Kumar with the developer community at a Web3 event"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="p-5 border-t border-border">
                <p className="text-sm text-ink font-medium">
                  With the Web3 builder community — Kolkata
                </p>
                <p className="text-xs text-faint mt-1">
                  HackQuest &amp; GDG on Campus GCECT community sessions
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
