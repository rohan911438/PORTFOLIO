import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import SocialIcon from "../ui/SocialIcon";
import { contactInfo, socialLinks } from "../../data/social";

// Optional integration point: set VITE_FORMSPREE_ENDPOINT (or swap in EmailJS)
// to send messages through a real backend instead of the mailto fallback below.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

interface FormState {
  name: string;
  email: string;
  message: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!emailRegex.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        return;
      } catch {
        // Fall through to mailto fallback if the backend call fails.
      }
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build or organize something together"
          description="Whether it's a role, a collaboration, or a community you'd like help growing — reach out directly."
        />

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <Reveal className="space-y-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 hover:border-cyan/40 transition-colors"
            >
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl border border-cyan/25 bg-cyan/10 text-cyan">
                <Mail size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wide text-faint">Email</p>
                <p className="text-sm text-ink font-medium truncate">{contactInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 hover:border-cyan/40 transition-colors"
            >
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl border border-cyan/25 bg-cyan/10 text-cyan">
                <Phone size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wide text-faint">Phone</p>
                <p className="text-sm text-ink font-medium">{contactInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5">
              <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl border border-violet/25 bg-violet/10 text-violet">
                <MapPin size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-wide text-faint">Location</p>
                <p className="text-sm text-ink font-medium">{contactInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
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
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-lg border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-cyan/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-lg border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-cyan/50 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full rounded-lg border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-cyan/50 focus:outline-none transition-colors resize-none"
                  placeholder="What are you looking to build or discuss?"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-indigo to-violet px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  <Send size={15} />
                  {status === "sending" ? "Opening your email client…" : "Send Message"}
                </button>
                {status === "sent" && (
                  <span
                    role="status"
                    aria-live="polite"
                    className="inline-flex items-center gap-1.5 text-sm text-cyan"
                  >
                    <CheckCircle2 size={16} />
                    Ready to send — check your email app
                  </span>
                )}
              </div>
              <p className="mt-3 text-xs text-faint">
                Sends via your email client, addressed to {contactInfo.email}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
