export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
  track: "builder" | "community";
}

export const experience: ExperienceItem[] = [
  {
    role: "Developer Advocate",
    org: "HackQuest",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "Activated 1,000+ builders into Web3 & AI through onboarding programs and hands-on sessions",
      "Organized 5+ IRL events in partnership with MetaMask and WebCMD",
      "2x top-5 finisher in HackQuest's Code Learning Camp",
      "8x hackathon wins across Flow, Arbitrum, Solana, and Injective",
      "Built ecosystem partnerships, including with Solana",
    ],
    track: "community",
  },
  {
    role: "Blockchain Lead",
    org: "GDG on Campus — GCECT",
    period: "2024 — Present",
    location: "Kolkata",
    bullets: [
      "Co-built the GDG on Campus GCECT chapter from zero into a running program",
      "Led the blockchain vertical: workshops, technical sessions, and mentorship",
      "Grew a consistent pipeline of student developers into Web3",
    ],
    track: "community",
  },
  {
    role: "Data Analyst Intern",
    org: "Zidio Development",
    period: "Sep 2025 — Nov 2025",
    location: "Remote",
    bullets: [
      "Owned end-to-end data workflows from ingestion to reporting",
      "Built ML models for predictive analytics as part of a 5-person team",
    ],
    track: "builder",
  },
  {
    role: "Data Science and Analytics Intern",
    org: "Vital Skills",
    period: "June 2025",
    location: "Delhi",
    bullets: [
      "Applied statistical methods and ML techniques on real-world datasets",
      "Delivered analysis and modeling to support decision-making",
    ],
    track: "builder",
  },
];
