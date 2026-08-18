import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { achievements } from "../../data/achievements";
import { asset } from "../../lib/asset";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="Achievements at a glance"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="card-surface card-surface-hover h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-8 text-center hover:border-border-strong transition-colors">
                <p className="font-display text-3xl sm:text-4xl font-semibold gradient-text">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-muted leading-snug">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 sm:gap-6">
          <Reveal delay={0.3}>
            <div className="card-surface relative rounded-2xl border border-border-strong overflow-hidden">
              <img
                src={asset("/images/community-event.png")}
                alt="Algorand Build Station Kolkata — full community turnout"
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-5">
                <p className="text-sm text-ink font-medium">
                  Algorand Build Station — Kolkata
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="card-surface relative rounded-2xl border border-border-strong overflow-hidden">
              <img
                src={asset("/images/community-session.png")}
                alt="Rise In Web3 coding session with the developer community"
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-5">
                <p className="text-sm text-ink font-medium">
                  Rise In — Learn Web3 Coding session
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
