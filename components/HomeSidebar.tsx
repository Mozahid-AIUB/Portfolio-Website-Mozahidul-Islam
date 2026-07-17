"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { Typewriter } from "./Typewriter";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
];

const pageLinks = [
  { href: "/projects", label: "All projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const entrance = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function HomeSidebar() {
  const [active, setActive] = useState("about");
  const reduce = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative py-16 lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:w-[44%] lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-14">
      <div
        className="glow-blob absolute -left-20 top-4 -z-10 h-72 w-72 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        initial={reduce ? false : "hidden"}
        animate="show"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={entrance}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <div className="relative h-28 w-24 overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
            <Image
              src="/mozahid.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="96px"
              priority
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.p
          variants={entrance}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.2em] text-amber"
        >
          ~/mozahid · {profile.location.toUpperCase()}
        </motion.p>

        <motion.h1
          variants={entrance}
          transition={{ duration: 0.55 }}
          className="shimmer-text mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl"
        >
          Mozahidul
          <br />
          Islam
        </motion.h1>

        <motion.h2
          variants={entrance}
          transition={{ duration: 0.55 }}
          className="mt-4 text-lg font-medium text-text"
        >
          {profile.identity}
        </motion.h2>

        <motion.p
          variants={entrance}
          transition={{ duration: 0.55 }}
          className="mt-4 min-h-[1.5rem] max-w-sm"
        >
          <Typewriter />
        </motion.p>

        <motion.p
          variants={entrance}
          transition={{ duration: 0.55 }}
          className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-muted"
        >
          <span
            className="status-dot status-dot--pulse inline-block h-1.5 w-1.5 rounded-full bg-live text-live"
            aria-hidden="true"
          />
          {profile.openTo}
        </motion.p>

        <motion.nav
          variants={entrance}
          transition={{ duration: 0.55 }}
          className="mt-14 hidden lg:block"
          aria-label="Section navigation"
        >
          <ul className="space-y-4">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-4"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-amber"
                          : "w-8 bg-line group-hover:w-16 group-hover:bg-muted"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                        isActive
                          ? "text-amber"
                          : "text-muted group-hover:text-text"
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>

        <motion.div
          variants={entrance}
          transition={{ duration: 0.55 }}
          className="mt-10 hidden flex-wrap gap-x-5 gap-y-2 lg:flex"
        >
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted transition-colors hover:text-amber"
            >
              {link.label} ↗
            </Link>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 flex items-center gap-5 lg:mt-0"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-amber"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-amber"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
          </svg>
        </a>
        <a
          href={profile.codeforces}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codeforces"
          className="font-mono text-sm text-muted transition-colors hover:text-amber"
        >
          CF
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-muted transition-colors hover:text-amber"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
            <path d="m3 6 9 7 9-7" />
          </svg>
        </a>
      </motion.div>
    </header>
  );
}
