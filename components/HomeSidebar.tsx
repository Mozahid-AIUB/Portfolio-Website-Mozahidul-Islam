"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { Typewriter } from "./Typewriter";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
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
    <header className="scrollbar-none relative py-12 lg:sticky lg:top-16 lg:flex lg:max-h-[calc(100vh-4rem)] lg:w-[44%] lg:flex-col lg:overflow-y-auto lg:py-10">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="aurora" />
      </div>
      <motion.div
        initial={reduce ? false : "hidden"}
        animate="show"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={entrance}
          transition={{ duration: 0.5 }}
          className="flex items-end gap-5"
        >
          <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
            <Image
              src="/mozahid.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="96px"
              priority
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0 pb-0.5">
            <p className="font-mono text-xs tracking-[0.2em] text-amber">
              ~/mozahid · {profile.location.toUpperCase()}
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
          {["Mozahidul", "Islam"].map((word, i) => (
            <span key={word} className="block overflow-hidden pb-0.5">
              <motion.span
                className="shimmer-text block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.21, 0.65, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
            </h1>
          </div>
        </motion.div>

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
          className="mt-9 hidden lg:block"
          aria-label="Section navigation"
        >
          <ul className="space-y-3">
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

      </motion.div>
    </header>
  );
}
