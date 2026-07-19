"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollProgress } from "./ScrollProgress";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/experiments", label: "Research" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-text transition-colors hover:text-amber"
          onClick={() => setOpen(false)}
        >
          <span
            className="status-dot status-dot--pulse inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-live text-live"
            aria-hidden="true"
          />
          <span>
            <span className="text-amber">~/</span>mozahid
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={active}
                className={`nav-link rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-amber-dim text-amber"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-cmdk"))}
              aria-label="Open command menu"
              className="hidden items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-amber/50 hover:text-text lg:flex"
            >
              <kbd>Ctrl</kbd>
              <kbd>K</kbd>
            </button>
            <ThemeToggle />
            <Magnetic>
              <Link
                href="/contact"
                className="beam-border block rounded-full border border-amber/30 bg-amber-dim px-4 py-1.5 text-sm font-semibold text-amber transition-colors hover:bg-amber hover:text-bg"
              >
                Let's talk
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted hover:text-text"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-6">
            {links.map((link, i) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 border-b border-line py-4 font-display text-2xl font-bold transition-colors ${
                    active ? "text-amber" : "text-text hover:text-amber"
                  }`}
                >
                  <span className="font-mono text-xs font-normal text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 block rounded-full bg-amber px-6 py-3 text-center text-[15px] font-semibold text-bg"
            >
              Let's talk →
            </Link>
            <p className="mt-6 flex items-center gap-2 font-mono text-xs text-muted">
              <span
                className="status-dot status-dot--pulse inline-block h-1.5 w-1.5 rounded-full bg-live text-live"
                aria-hidden="true"
              />
              Available for work — replies within 12h
            </p>
          </div>
        </div>
      )}

      <ScrollProgress />
    </header>
  );
}
