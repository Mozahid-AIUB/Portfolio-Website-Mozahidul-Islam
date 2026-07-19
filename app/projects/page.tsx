import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Reveal } from "@/components/Reveal";
import { experiments } from "@/data/experiments";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Every project I've shipped — mobile apps, SaaS platforms, web products, desktop software, hardware, and smaller explorations.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="shipping log — full history"
        title="All projects"
        lede="Everything here is verifiable: live sites, store listings, or public source. Filter by the kind of work you're hiring for."
      />
      <ProjectsExplorer />

      {/* Smaller builds & explorations — priority order */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="explorations"
          title="Smaller builds & explorations"
          lede="Not every build is a flagship. These are where I learn new tools, test research ideas, and automate my own workflows — all public on GitHub."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((exp, i) => (
            <Reveal key={exp.name} delay={(i % 3) * 0.05}>
              <a
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">
                    {exp.tech.join(" · ")}
                  </span>
                  <span
                    className="text-muted transition-colors group-hover:text-amber"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-text">
                  {exp.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {exp.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-xl border border-line bg-surface p-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              Also on YouTube
            </p>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              I make programming and ICT tutorials for beginners — Python, Java
              and web technologies. Teaching in public keeps my fundamentals
              honest.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-mono text-sm text-amber hover:opacity-80"
            >
              Browse all 37 repos on GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
