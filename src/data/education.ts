export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech, Information Technology",
    institution: "Government College of Engineering & Ceramic Technology (GCECT), Kolkata",
    period: "Aug 2024 — June 2028",
    detail: "CGPA 9.44 / 10.00",
  },
  {
    degree: "Senior Secondary (Class XII), Science",
    institution: "India International School, Asansol",
    period: "2024",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "India International School, Asansol",
    period: "2022",
  },
];
