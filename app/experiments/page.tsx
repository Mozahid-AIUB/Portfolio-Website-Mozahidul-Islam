import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { research, workingPapers } from "@/data/research";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research directions, working papers and preprints — RAG systems, LLM tool protocols, EdTech engagement mechanics, and predictive maintenance with LSTM.",
};

export default function ResearchPage() {
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
          className="mb-16 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-amber"
        >
          ORCID: 0009-0004-8941-7132
          <span aria-hidden="true">↗</span>
        </a>
      </Reveal>

      <div>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-amber">
          Active research directions
        </p>
        <ol className="divide-y divide-line border-y border-line">
          {research.map((item) => (
            <li key={item.code}>
              <div className="group grid gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs text-amber">
                  {item.code} · {item.area}
                </span>
                <span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-base font-bold text-text transition-colors hover:text-amber"
                  >
                    {item.title}
                  </a>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {item.description}
                  </span>
                  {item.doi && (
                    <a
                      href={item.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-mono text-[11px] text-amber underline-offset-2 hover:underline"
                    >
                      DOI ↗
                    </a>
                  )}
                </span>
                <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-muted">
                  {item.statusLabel}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-amber">
          Working papers — course-based survey studies
        </p>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
          Unpublished manuscripts from undergraduate coursework — the
          research-methods groundwork behind the directions above. Presented
          honestly as working papers, each with a DOI on Zenodo.
        </p>
        <ol className="divide-y divide-line border-y border-line">
          {workingPapers.map((paper) => (
            <li key={paper.title} className="py-6">
              <span className="font-display text-base font-bold text-text">
                {paper.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-muted">
                {paper.note}
              </span>
              <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest">
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-amber"
                >
                  Read PDF ↗
                </a>
                {paper.doi && (
                  <a
                    href={paper.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="normal-case text-amber underline-offset-2 hover:underline"
                  >
                    DOI ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
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
