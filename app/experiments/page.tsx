import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { experiments } from "@/data/experiments";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research & Experiments",
  description:
    "Research explorations and side builds — RAG systems, MCP protocols, NestJS, OpenGL graphics, Manim animations, and workflow automation.",
};

export default function ExperimentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="research & experiments"
        title="The laboratory"
        lede="Research needs a lab. This is mine — RAG pipelines, LLM tool protocols, graphics programming, and builds where I test ideas before they reach production. 35 public repos and counting."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((exp, i) => (
          <Reveal key={exp.name} delay={(i % 3) * 0.05}>
            <a
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-amber/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">
                  {exp.tech.join(" · ")}
                </span>
                <span className="text-muted transition-colors group-hover:text-amber" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h2 className="font-display text-lg font-bold text-text">
                {exp.name}
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted">{exp.description}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 rounded-xl border border-line bg-surface p-8 text-center">
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
            Browse all 35 repos on GitHub ↗
          </a>
        </div>
      </Reveal>
    </div>
  );
}
