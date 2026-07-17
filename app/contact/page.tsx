import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about software engineering roles — remote or on-site — or projects.",
};

const directLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "Mozahid-AIUB", href: profile.github },
  {
    label: "LinkedIn",
    value: "md-mozahidul-islam",
    href: profile.linkedin,
  },
  { label: "Codeforces", value: "mozahid1212121", href: profile.codeforces },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="contact"
        title="Let's talk"
        lede={`I'm ${profile.openTo.toLowerCase()} — based in ${profile.location} (${profile.timezone}), comfortable overlapping with US and European hours. Recruiters, founders and fellow engineers all welcome.`}
      />

      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-3">
            {directLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-amber/40"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  {link.label}
                </span>
                <span className="text-sm text-text">{link.value} ↗</span>
              </a>
            ))}
            <div className="rounded-xl border border-line bg-surface px-5 py-4">
              <div className="flex items-center gap-2.5 font-mono text-xs text-muted">
                <span
                  className="status-dot status-dot--pulse inline-block h-1.5 w-1.5 rounded-full bg-live text-live"
                  aria-hidden="true"
                />
                Usually replies within 24 hours
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
