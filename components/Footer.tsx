import Link from "next/link";
import { profile } from "@/data/profile";

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

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-line bg-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="font-mono text-sm tracking-tight text-text transition-colors hover:text-amber"
          >
            <span className="text-amber">~/</span>mozahid
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Software engineer &amp; researcher shipping production software
            from Dhaka — open to remote roles worldwide.
          </p>
          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-muted">
            <span
              className="status-dot status-dot--pulse inline-block h-1.5 w-1.5 rounded-full bg-live text-live"
              aria-hidden="true"
            />
            Available for work — replies within 24h
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Pages
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
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
          <p className="mt-6 font-mono text-xs text-muted/70">
            {profile.location} · {profile.timezone}
          </p>
        </div>
      </div>

      <div className="border-t border-line">
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
