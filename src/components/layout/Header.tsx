import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "../../data/nav";
import { resumes } from "../../data/resumes";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            Rohan<span className="gradient-text">.</span>
          </a>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-full transition-colors ${
                  active === link.href
                    ? "text-ink bg-white/[0.06]"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href={resumes[0].file}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-ink hover:border-cyan/50 hover:text-cyan transition-colors"
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-indigo to-violet px-4 py-2 text-sm font-semibold text-bg hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
          </div>

          <button
            className="xl:hidden text-ink p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-bg/98 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base text-muted hover:text-ink rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
              <a
                href={resumes[0].file}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-ink"
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan via-indigo to-violet px-4 py-2.5 text-sm font-semibold text-bg"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
