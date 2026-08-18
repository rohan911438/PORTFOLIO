import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Download } from "lucide-react";
import { resumes } from "../../data/resumes";
import { asset } from "../../lib/asset";

const taglines = [
  "Software Developer · AI Engineer · Web3 & Full Stack Developer",
  "Developer Advocate · Community Builder · Web3 & AI Education",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % taglines.length), 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0 noise-veil" />
      <div
        className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-cyan/20 blur-[100px] animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-violet/20 blur-[110px] animate-float"
        style={{ animationDelay: "-3s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl w-full px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-muted mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.03]"
            >
              Rohan Kumar
            </motion.h1>

            <div className="mt-5 h-16 sm:h-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-base sm:text-lg font-medium gradient-text"
                >
                  {taglines[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
            >
              I build real products across Web3, AI, and full-stack — and I
              spend just as much energy helping other developers ship theirs,
              onboarding builders into the ecosystems I work in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-indigo to-violet px-5 py-3 text-sm font-semibold text-bg hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-ink hover:border-cyan/50 hover:text-cyan transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {resumes.map((resume) => (
                <a
                  key={resume.file}
                  href={resume.file}
                  download
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-cyan transition-colors"
                >
                  <Download size={14} />
                  {resume.label}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="mt-6 flex items-center gap-1.5 text-sm text-faint"
            >
              <MapPin size={14} />
              Kolkata, West Bengal, India
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan/30 via-indigo/20 to-violet/30 blur-2xl" />
            <div className="card-surface relative rounded-[1.75rem] border border-border-strong bg-surface overflow-hidden">
              <img
                src={asset("/images/profile.png")}
                alt="Portrait of Rohan Kumar"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent p-5">
                <p className="font-mono text-xs text-cyan">now building</p>
                <p className="text-sm text-ink font-medium mt-0.5">
                  ArbitPy — Python-to-Blockchain compiler
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
