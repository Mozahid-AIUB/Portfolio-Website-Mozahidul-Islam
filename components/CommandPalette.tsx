"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

type Group = "Navigate" | "Actions" | "Links";

interface Command {
  label: string;
  group: Group;
  run: () => void;
}

const ICONS: Record<Group, ReactNode> = {
  Navigate: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Actions: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Links: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path
        d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1.5 1.5M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1.5-1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands: Command[] = useMemo(
    () => [
      { label: "About", group: "Navigate", run: () => (window.location.href = "/#about") },
      { label: "Skills", group: "Navigate", run: () => (window.location.href = "/#skills") },
      { label: "Experience", group: "Navigate", run: () => (window.location.href = "/#experience") },
      { label: "Featured projects", group: "Navigate", run: () => (window.location.href = "/#projects") },
      { label: "All projects", group: "Navigate", run: () => router.push("/projects") },
      { label: "Education & certifications", group: "Navigate", run: () => router.push("/education") },
      { label: "Research & publications", group: "Navigate", run: () => router.push("/experiments") },
      { label: "Resume", group: "Navigate", run: () => router.push("/resume") },
      { label: "Contact", group: "Navigate", run: () => router.push("/contact") },
      { label: "Download CV", group: "Actions", run: () => window.open(profile.cvPath, "_blank") },
      { label: "Email me", group: "Actions", run: () => (window.location.href = `mailto:${profile.email}`) },
      {
        label: "Toggle theme",
        group: "Actions",
        run: () => {
          const light = document.documentElement.classList.toggle("light");
          try {
            localStorage.setItem("theme", light ? "light" : "dark");
          } catch {
            /* private mode */
          }
        },
      },
      { label: "GitHub", group: "Links", run: () => window.open(profile.github, "_blank") },
      { label: "LinkedIn", group: "Links", run: () => window.open(profile.linkedin, "_blank") },
      { label: "Codeforces", group: "Links", run: () => window.open(profile.codeforces, "_blank") },
    ],
    [router]
  );

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const groups: Group[] = ["Navigate", "Actions", "Links"];
  let flatCursor = -1;

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
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/60 ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 focus-within:border-amber/40">
              <span className="text-amber/70" aria-hidden="true">
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
                className="w-full appearance-none bg-transparent py-3.5 text-[15px] text-text placeholder:text-muted/60 [&]:outline-none [&]:focus:outline-none [&]:focus-visible:outline-none"
                style={{ outline: "none", boxShadow: "none" }}
                aria-label="Search commands"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                esc
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
              {filtered.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted">
                  No matches. Try &ldquo;projects&rdquo; or &ldquo;email&rdquo;.
                </li>
              )}
              {groups.map((group) => {
                const items = filtered.filter((c) => c.group === group);
                if (items.length === 0) return null;
                return (
                  <li key={group} role="presentation">
                    <p className="px-3 pb-1 pt-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted/60">
                      {group}
                    </p>
                    <ul role="group" aria-label={group}>
                      {items.map((cmd) => {
                        flatCursor += 1;
                        const i = flatCursor;
                        const selected = i === index;
                        return (
                          <li key={cmd.label} role="option" aria-selected={selected}>
                            <button
                              type="button"
                              onClick={() => run(cmd)}
                              onMouseEnter={() => setIndex(i)}
                              className={`group relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                                selected ? "bg-amber-dim text-text" : "text-muted"
                              }`}
                            >
                              <span
                                className={`absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-amber transition-opacity ${
                                  selected ? "opacity-100" : "opacity-0"
                                }`}
                                aria-hidden="true"
                              />
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                  selected
                                    ? "border-amber/40 text-amber"
                                    : "border-line text-muted/70"
                                }`}
                                aria-hidden="true"
                              >
                                {ICONS[cmd.group]}
                              </span>
                              <span className="flex-1">{cmd.label}</span>
                              {selected && (
                                <kbd className="rounded border border-amber/30 bg-bg/40 px-1.5 py-0.5 font-mono text-[10px] text-amber">
                                  ↵
                                </kbd>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[10px] text-muted/70">
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-line px-1.5 py-0.5">↑↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-line px-1.5 py-0.5">↵</kbd>
                select
              </span>
              <span className="ml-auto flex items-center gap-1.5">
                <kbd className="rounded border border-line px-1.5 py-0.5">esc</kbd>
                close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
