import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { research, workingPapers, type ResearchItem } from "@/data/research";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research directions, working papers and preprints — RAG systems, LLM tool protocols, EdTech engagement mechanics, and predictive maintenance with LSTM.",
};

function DoiBadge({ doi }: { doi: string }) {
  return (
    <a
      href={doi}
      target="_blank"
      rel="noopener noreferrer"
      className="group/doi inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber-dim px-3 py-1 font-mono text-[11px] font-semibold text-amber transition-colors hover:bg-amber hover:text-bg"
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber transition-colors group-hover/doi:bg-bg"
        aria-hidden="true"
      />
      DOI
      <span
        className="transition-transform group-hover/doi:translate-x-0.5"
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  );
}

function StatusPill({ item }: { item: ResearchItem }) {
  const dot =
    item.status === "ongoing"
      ? "status-dot--pulse bg-amber text-amber"
      : item.status === "in-production"
        ? "bg-live text-live"
        : "bg-muted text-muted";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted">
      <span
        className={`status-dot inline-block h-1.5 w-1.5 rounded-full ${dot}`}
        aria-hidden="true"
      />
      {item.statusLabel}
    </span>
  );
}

export default function ResearchPage() {
  const [flagship, ...rest] = research;

  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="research"
        title="Research & working papers"
        lede="Engineering answers &ldquo;how&rdquo;; research asks &ldquo;what actually works?&rdquo; Everything below is verifiable: DOIs on Zenodo, live products as testbeds, or open-source code."
      />

      <Reveal>
        <a
          href={profile.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-14 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-amber/40 hover:text-amber"
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a6ce39]"
            aria-hidden="true"
          />
          ORCID: 0009-0004-8941-7132
          <span aria-hidden="true">↗</span>
        </a>
      </Reveal>

      {/* Flagship paper */}
      {flagship && (
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-amber">
            Flagship study
          </p>
          <a
            href={flagship.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-amber/30 bg-gradient-to-br from-amber-dim to-surface p-8 transition-colors hover:border-amber/60 sm:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-amber">
                {flagship.code} · {flagship.area}
              </span>
              <StatusPill item={flagship} />
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold tracking-tight text-text transition-colors group-hover:text-amber sm:text-3xl">
              {flagship.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {flagship.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {flagship.doi && <DoiBadge doi={flagship.doi} />}
              <span className="font-mono text-xs text-muted">
                Read the paper ↗
              </span>
            </div>
          </a>
        </Reveal>
      )}

      {/* Other active directions */}
      <div className="mt-16">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-amber">
          Active research directions
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {rest.map((item) => (
            <Reveal key={item.code}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-line bg-surface/70 p-6 transition-colors hover:border-amber/40"
              >
                <span className="font-mono text-xs text-amber">
                  {item.code} · {item.area}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-text transition-colors group-hover:text-amber">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <StatusPill item={item} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Working papers */}
      <div className="mt-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-amber">
          Working papers — course-based survey studies
        </p>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
          Unpublished manuscripts from undergraduate coursework — the
          research-methods groundwork behind the directions above. Presented
          honestly as working papers, each with a DOI on Zenodo.
        </p>
        <div className="space-y-4">
          {workingPapers.map((paper) => (
            <Reveal key={paper.title}>
              <div className="group flex flex-col gap-4 rounded-xl border border-line bg-surface/70 p-6 transition-colors hover:border-amber/40 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-base font-bold text-text transition-colors group-hover:text-amber"
                  >
                    {paper.title}
                  </a>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {paper.note}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap font-mono text-xs text-muted transition-colors hover:text-text"
                  >
                    Read PDF ↗
                  </a>
                  {paper.doi && <DoiBadge doi={paper.doi} />}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <p className="mt-16 text-center text-sm text-muted">
          Looking for the smaller builds that used to live here?{" "}
          <a href="/projects" className="text-amber hover:opacity-80">
            They&apos;re on the projects page now →
          </a>
        </p>
      </Reveal>
    </div>
  );
}
