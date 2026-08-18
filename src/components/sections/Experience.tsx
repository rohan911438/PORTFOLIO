import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { experience } from "../../data/experience";

const tracks = [
  { id: "builder" as const, label: "What I Build" },
  { id: "community" as const, label: "Who I Build With" },
];

export default function Experience() {
  const [track, setTrack] = useState<"builder" | "community">("builder");
  const items = experience.filter((e) => e.track === track);
  const accent = track === "builder" ? "cyan" : "violet";

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Experience"
            title="Two tracks, one direction"
            description="Toggle between the technical work and the community work — they run in parallel, not in sequence."
          />

          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Experience track"
              className="inline-flex rounded-full border border-border bg-surface/60 p-1"
            >
              {tracks.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={track === t.id}
                  aria-controls={`track-panel-${t.id}`}
                  onClick={() => setTrack(t.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    track === t.id ? "text-bg" : "text-muted hover:text-ink"
                  }`}
                >
                  {track === t.id && (
                    <motion.span
                      layoutId="track-pill"
                      className={`absolute inset-0 rounded-full ${
                        t.id === "builder"
                          ? "bg-gradient-to-r from-cyan to-indigo"
                          : "bg-gradient-to-r from-violet to-indigo"
                      }`}
                      transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={track}
              id={`track-panel-${track}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative border-l border-border pl-8 sm:pl-10 space-y-10"
            >
              {items.map((item) => (
                <div key={`${item.role}-${item.org}`} className="relative">
                  <span
                    className={`absolute -left-[2.55rem] sm:-left-[2.65rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-bg ${
                      accent === "cyan" ? "bg-cyan" : "bg-violet"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {item.role}
                    </h3>
                    <span className="text-muted">·</span>
                    <span
                      className={`text-sm font-medium ${
                        accent === "cyan" ? "text-cyan" : "text-violet"
                      }`}
                    >
                      {item.org}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-faint font-mono">
                    <span>{item.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted leading-relaxed">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-50" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
