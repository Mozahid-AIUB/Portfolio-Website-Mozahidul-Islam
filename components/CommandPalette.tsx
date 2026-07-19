"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

interface Command {
  label: string;
  hint: string;
  run: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands: Command[] = useMemo(
    () => [
      { label: "About", hint: "Section", run: () => (window.location.href = "/#about") },
      { label: "Skills", hint: "Section", run: () => (window.location.href = "/#skills") },
      { label: "Experience", hint: "Section", run: () => (window.location.href = "/#experience") },
      { label: "Featured projects", hint: "Section", run: () => (window.location.href = "/#projects") },
      { label: "All projects", hint: "Page", run: () => router.push("/projects") },
      { label: "Education & certifications", hint: "Page", run: () => router.push("/education") },
      { label: "Research & publications", hint: "Page", run: () => router.push("/experiments") },
      { label: "Resume", hint: "Page", run: () => router.push("/resume") },
      { label: "Contact", hint: "Page", run: () => router.push("/contact") },
      { label: "Download CV", hint: "Action", run: () => window.open(profile.cvPath, "_blank") },
      { label: "Email me", hint: "Action", run: () => (window.location.href = `mailto:${profile.email}`) },
      {
        label: "Toggle theme",
        hint: "Action",
        run: () => {
          const light = document.documentElement.classList.toggle("light");
          try {
            localStorage.setItem("theme", light ? "light" : "dark");
          } catch {
            /* private mode */
          }
        },
      },
      { label: "GitHub", hint: "Link", run: () => window.open(profile.github, "_blank") },
      { label: "LinkedIn", hint: "Link", run: () => window.open(profile.linkedin, "_blank") },
      { label: "Codeforces", hint: "Link", run: () => window.open(profile.codeforces, "_blank") },
    ],
    [router]
  );

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      const timer = setTimeout(() => inputRef.current?.focus(), 20);
      return () => clearTimeout(timer);
    }
  }, [open]);

  function run(cmd?: Command) {
    if (!cmd) return;
    setOpen(false);
    cmd.run();
  }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(filtered[index]);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="cmdk"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-bg/60 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command menu"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <span className="text-muted" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIndex(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Type a command or search…"
                className="w-full bg-transparent py-3.5 text-[15px] text-text placeholder:text-muted/60 focus:outline-none"
                aria-label="Search commands"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                esc
              </kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto p-2" role="listbox">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-muted">
                  No matches. Try &ldquo;projects&rdquo; or &ldquo;email&rdquo;.
                </li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.label} role="option" aria-selected={i === index}>
                  <button
                    type="button"
                    onClick={() => run(cmd)}
                    onMouseEnter={() => setIndex(i)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      i === index
                        ? "bg-amber-dim text-text"
                        : "text-muted"
                    }`}
                  >
                    <span>{cmd.label}</span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest ${
                        i === index ? "text-amber" : "text-muted/60"
                      }`}
                    >
                      {cmd.hint}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
