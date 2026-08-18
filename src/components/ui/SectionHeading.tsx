import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal className={isCenter ? "text-center" : "text-left"}>
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-muted text-base sm:text-lg max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
