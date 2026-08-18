import type { ComponentType } from "react";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { SocialLink } from "../../data/social";

function XIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={props.size ?? 20}
      height={props.size ?? 20}
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<SocialLink["icon"], ComponentType<LucideProps>> = {
  linkedin: Linkedin,
  github: Github,
  twitter: XIcon,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
};

interface SocialIconProps extends LucideProps {
  icon: SocialLink["icon"];
}

export default function SocialIcon({ icon, ...props }: SocialIconProps) {
  const Icon = iconMap[icon];
  return <Icon {...props} />;
}
