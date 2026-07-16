import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { research } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research directions and upcoming publications — RAG systems, LLM tool protocols, EdTech engagement mechanics.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="research"
        title="Formal research & publications"
        lede="This page is reserved for published work. Papers and formal write-ups are in progress — the directions below are where they'll come from."
      />

      <Reveal>
        <div className="rounded-2xl border border-dashed border-amber/40 bg-surface/60 p-10 text-center sm:p-14">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-bg px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-amber">
            <span
              className="status-dot status-dot--pulse inline-block h-1.5 w-1.5 rounded-full bg-amber text-amber"
              aria-hidden="true"
            />
            Upcoming
          </p>
          <h2 className="mx-auto mt-5 max-w-lg font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Publications are on the way.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            I research the way I engineer — with live products as testbeds.
            Formal write-ups of that work will land here.
          </p>
        </div>
      </Reveal>

      <div className="mt-16">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-amber">
          Active research directions
        </p>
        <ol className="divide-y divide-line border-y border-line">
          {research.map((item) => (
            <li key={item.code}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-6 transition-colors sm:grid-cols-[110px_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-xs text-amber">
                  {item.code} · {item.area}
                </span>
                <span>
                  <span className="font-display text-base font-bold text-text transition-colors group-hover:text-amber">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {item.description}
                  </span>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {item.statusLabel} ↗
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <Reveal>
        <p className="mt-14 text-center text-sm text-muted">
          Looking for the smaller builds that used to live here?{" "}
          <Link href="/projects" className="text-amber hover:opacity-80">
            They&apos;re on the projects page now →
          </Link>
        </p>
      </Reveal>
    </div>
  );
}
