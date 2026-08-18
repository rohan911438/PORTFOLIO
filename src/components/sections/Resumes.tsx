import { Download, FileText } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { resumes } from "../../data/resumes";

export default function Resumes() {
  return (
    <section id="resumes" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Resumes"
          title="Pick the version that fits the conversation"
          description="Two focused resumes — one for the technical side, one for the community and advocacy side."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {resumes.map((resume, i) => (
            <Reveal key={resume.file} delay={i * 0.1}>
              <div className="card-surface card-surface-hover h-full flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-7 hover:border-cyan/40 transition-colors group">
                <div>
                  <div className="grid place-items-center h-11 w-11 rounded-xl border border-cyan/25 bg-cyan/10 text-cyan">
                    <FileText size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {resume.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {resume.description}
                  </p>
                </div>
                <a
                  href={resume.file}
                  download
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-ink group-hover:border-cyan/50 group-hover:text-cyan transition-colors"
                >
                  <Download size={15} />
                  Download PDF
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
