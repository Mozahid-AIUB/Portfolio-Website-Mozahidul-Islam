import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download Mozahidul Islam's CV.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="resume"
        title="The one-pager"
        lede="The same story as this site, compressed for applicant tracking systems and busy hiring managers."
      />

      <Reveal>
        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={profile.cvPath}
            download
            className="rounded-lg bg-amber px-6 py-3 text-[15px] font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Download CV (PDF)
          </a>
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-6 py-3 text-[15px] font-medium text-text transition-colors hover:border-amber/50"
          >
            Open in new tab
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <object
            data={profile.cvPath}
            type="application/pdf"
            className="h-[75vh] w-full"
            aria-label="Mozahidul Islam's CV"
          >
            <div className="p-10 text-center text-muted">
              <p>
                Your browser can&apos;t display the PDF inline.{" "}
                <a href={profile.cvPath} download className="text-amber">
                  Download it instead.
                </a>
              </p>
            </div>
          </object>
        </div>
      </Reveal>
    </div>
  );
}
