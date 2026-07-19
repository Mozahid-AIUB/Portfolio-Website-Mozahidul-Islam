"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { LocalTime } from "./LocalTime";

const pages = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/experiments", label: "Research" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const connect = [
  { href: `mailto:${profile.email}`, label: "Email", external: false },
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: profile.codeforces, label: "Codeforces", external: true },
];

const stats = [
  { value: "10+", label: "products shipped" },
  { value: "4", label: "live in production" },
];

export function Footer() {
  const pathname = usePathname();
  const onContactPage = pathname === "/contact";

  return (
    <footer className="relative z-20 overflow-hidden border-t border-line bg-bg">
      {!onContactPage && (
        <div className="relative">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-amber/10 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 pt-16 sm:px-10">
            <Link
              href="/contact"
              className="group flex flex-col gap-4 border-b border-line pb-12 sm:flex-row sm:items-end sm:justify-between"
            >
              <h2 className="max-w-md font-display text-3xl font-extrabold leading-tight tracking-tight text-text transition-colors group-hover:text-amber sm:text-4xl">
                Let&rsquo;s build something.
              </h2>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber/30 bg-amber-dim px-5 py-2.5 font-mono text-sm font-semibold text-amber transition-colors group-hover:bg-amber group-hover:text-bg">
                Start a conversation
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      )}

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <Link
            href="/"
            className="font-mono text-sm tracking-tight text-text transition-colors hover:text-amber"
          >
            <span className="text-amber">~/</span>mozahid
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Software engineer &amp; researcher shipping production software
            from Dhaka — open to remote and on-site roles worldwide.
          </p>
          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-muted">
            <span
              className="status-dot status-dot--pulse inline-block h-1.5 w-1.5 rounded-full bg-live text-live"
              aria-hidden="true"
            />
            Available for work — replies within 12h
          </p>
          <dl className="mt-8 flex gap-8 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-xl font-bold text-text">
                  {stat.value}
                </dd>
                <dt className="mt-0.5 text-xs text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 font-mono text-xs text-muted/70">
            {profile.location} · <LocalTime /> ({profile.timezone})
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Pages
          </p>
          <ul className="mt-4 space-y-2.5">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5">
            {connect.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
                >
                  {link.label}
                  {link.external && (
                    <span
                      className="text-xs opacity-50 transition group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Pages I run
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {profile.facebookPages.map((page) => (
              <li key={page.href}>
                <a
                  href={page.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
                >
                  {page.label}
                  <span
                    className="text-xs opacity-50 transition group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-muted transition-colors hover:border-amber/40 hover:text-amber"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a6ce39]"
              aria-hidden="true"
            />
            ORCID
            <span
              className="text-[10px] opacity-50 transition group-hover:opacity-100"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 font-mono text-xs text-muted/60 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
