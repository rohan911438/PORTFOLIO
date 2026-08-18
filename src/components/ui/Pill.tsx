import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  tone?: "default" | "cyan" | "violet" | "amber";
  className?: string;
}

const toneStyles: Record<NonNullable<PillProps["tone"]>, string> = {
  default: "border-border text-muted bg-white/[0.03]",
  cyan: "border-cyan/30 text-cyan bg-cyan/10",
  violet: "border-violet/30 text-violet bg-violet/10",
  amber: "border-amber/30 text-amber bg-amber/10",
};

export default function Pill({ children, tone = "default", className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium font-mono tracking-tight ${toneStyles[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
