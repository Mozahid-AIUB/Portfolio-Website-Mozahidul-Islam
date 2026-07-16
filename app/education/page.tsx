import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { education, certifications } from "@/data/education";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Education",
  description:
    "B.Sc. in Computer Science & Engineering at AIUB, with perfect GPAs through HSC and SSC, plus professional certifications.",
};

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="education"
        title="Academic record"
        lede="Consistent results from school through university — and the certifications I picked up along the way."
      />

      <div className="space-y-6">
        {education.map((entry, i) => (
          <Reveal key={entry.degree} delay={i * 0.05}>
            <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-xl font-bold text-text">
                  {entry.degree}
                </h2>
                <span className="font-mono text-sm text-muted">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 text-muted">
                {entry.institution} · {entry.location}
              </p>
              <p className="mt-3 inline-block rounded border border-amber/30 bg-amber-dim px-3 py-1 font-mono text-sm text-amber">
                {entry.result}
              </p>
              <ul className="mt-4 space-y-1.5 text-[15px] text-muted">
                {entry.details.map((detail) => (
                  <li key={detail} className="flex gap-2.5">
                    <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-amber/60" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="certifications" title="Professional certifications" />
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.04}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-surface p-5">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                <div>
                  <p className="font-medium text-text">{cert.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <p className="mt-16 text-center font-mono text-sm text-muted">
          Competitive programming:{" "}
          <a
            href={profile.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:opacity-80"
          >
            Codeforces profile ↗
          </a>
        </p>
      </Reveal>
    </div>
  );
}
