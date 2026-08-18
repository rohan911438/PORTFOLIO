import { Download } from "lucide-react";
import { navLinks } from "../../data/nav";
import { socialLinks } from "../../data/social";
import { resumes } from "../../data/resumes";
import SocialIcon from "../ui/SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#top" className="font-display text-xl font-semibold text-ink">
              Rohan Kumar
            </a>
            <p className="mt-3 text-sm text-muted max-w-sm leading-relaxed">
              Building at the intersection of Web3, AI, and full-stack software —
              and growing the communities around them.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid place-items-center h-10 w-10 rounded-full border border-border text-muted hover:text-cyan hover:border-cyan/40 transition-colors"
                >
                  <SocialIcon icon={link.icon} size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint mb-4">
              Resumes
            </h3>
            <ul className="space-y-3">
              {resumes.map((resume) => (
                <li key={resume.file}>
                  <a
                    href={resume.file}
                    download
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors"
                  >
                    <Download size={14} />
                    {resume.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-faint">
            &copy; {year} Rohan Kumar. Built by Rohan Kumar.
          </p>
          <p className="text-xs text-faint">Kolkata, West Bengal, India</p>
        </div>
      </div>
    </footer>
  );
}
