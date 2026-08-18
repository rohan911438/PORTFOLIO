export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "twitter" | "instagram" | "mail" | "phone";
}

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rohan-kumar-1a60b7314",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/rohan911438",
    icon: "github",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Roan0i",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rohan_kr.io",
    icon: "instagram",
  },
];

export const contactInfo = {
  email: "123131rkorohan@gmail.com",
  phone: "+91 8617614518",
  location: "Kolkata, West Bengal, India",
};
