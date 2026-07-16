import Link from "next/link";
import { Spotlight } from "@/components/Spotlight";
import { HomeSidebar } from "@/components/HomeSidebar";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import { ShowcaseProject } from "@/components/ShowcaseProject";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { research } from "@/data/research";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-amber lg:sr-only">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <HomeSidebar />

          <main className="pb-32 lg:w-[52%] lg:pb-40 lg:pt-24">
            {/* About */}
            <section id="about" className="scroll-mt-24">
              <SectionLabel>About</SectionLabel>
              <Reveal className="space-y-5 leading-relaxed text-muted">
                {profile.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </Reveal>
              <Reveal delay={0.1}>
                <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 sm:grid-cols-4">
                  {profile.proofPoints.map((point) => (
                    <div key={point.label}>
                      <dd className="font-display text-2xl font-bold text-text">
                        {point.value}
                      </dd>
                      <dt className="mt-1 text-xs leading-snug text-muted">
                        {point.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </section>

            <div className="my-16">
              <Marquee />
            </div>

            {/* Experience */}
            <section id="experience" className="scroll-mt-24">
              <SectionLabel>Experience</SectionLabel>
              <Reveal>
                <ol className="group/list">
                  {experience.map((job) => (
                    <li key={job.role} className="mb-4">
                      <div className="relative grid rounded-xl border border-transparent p-5 transition-all duration-300 sm:grid-cols-[150px_1fr] sm:gap-6 lg:group-hover/list:opacity-40 lg:hover:border-line lg:hover:bg-surface/60 lg:hover:opacity-100!">
                        <div className="mb-1 mt-0.5 font-mono text-xs uppercase tracking-wide text-muted sm:mb-0">
                          {job.period}
                        </div>
                        <div>
                          <h3 className="font-medium text-text">
                            {job.role} ·{" "}
                            <span className="text-muted">{job.org}</span>
                          </h3>
                          <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-muted">
                            {job.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal>
                <a
                  href={profile.cvPath}
                  download
                  className="group ml-5 mt-2 inline-flex items-center gap-2 font-medium text-text transition-colors hover:text-amber"
                >
                  Download full CV
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </a>
              </Reveal>
            </section>

            {/* Projects — premium showcase */}
            <section id="projects" className="mt-24 scroll-mt-24">
              <SectionLabel>Projects</SectionLabel>
              <div className="space-y-20">
                {featuredProjects.map((project, i) => (
                  <Reveal key={project.slug}>
                    <ShowcaseProject project={project} index={i} />
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <Link
                  href="/projects"
                  className="group mt-14 inline-flex items-center gap-2 font-medium text-text transition-colors hover:text-amber"
                >
                  View full project archive
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            </section>

            {/* Research */}
            <section id="research" className="mt-24 scroll-mt-24">
              <SectionLabel>Research</SectionLabel>
              <Reveal>
                <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted">
                  Engineering answers &ldquo;how&rdquo;; research asks
                  &ldquo;what actually works?&rdquo; These are the questions I
                  study — several with live products as the testbed.
                </p>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                {research.map((item, i) => (
                  <Reveal key={item.code} delay={(i % 2) * 0.07}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-xl border border-line bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-amber">
                          {item.code} · {item.area}
                        </span>
                        <span
                          className="text-muted transition-colors group-hover:text-amber"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-bold text-text">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                      <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                        <span
                          className={`status-dot inline-block h-1.5 w-1.5 rounded-full ${
                            item.status === "ongoing"
                              ? "status-dot--pulse bg-amber text-amber"
                              : item.status === "in-production"
                                ? "bg-live text-live"
                                : "bg-muted text-muted"
                          }`}
                          aria-hidden="true"
                        />
                        {item.statusLabel}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Education */}
            <section id="education" className="mt-24 scroll-mt-24">
              <SectionLabel>Education</SectionLabel>
              <Reveal>
                <ol className="group/list">
                  {education.map((entry) => (
                    <li key={entry.degree} className="mb-4">
                      <div className="relative grid rounded-xl border border-transparent p-5 transition-all duration-300 sm:grid-cols-[150px_1fr] sm:gap-6 lg:group-hover/list:opacity-40 lg:hover:border-line lg:hover:bg-surface/60 lg:hover:opacity-100!">
                        <div className="mb-1 mt-0.5 font-mono text-xs uppercase tracking-wide text-muted sm:mb-0">
                          {entry.period}
                        </div>
                        <div>
                          <h3 className="font-medium text-text">{entry.degree}</h3>
                          <p className="mt-0.5 text-sm text-muted">
                            {entry.institution}
                          </p>
                          <p className="mt-2 font-mono text-sm text-amber">
                            {entry.result}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal>
                <Link
                  href="/education"
                  className="group ml-5 mt-2 inline-flex items-center gap-2 font-medium text-text transition-colors hover:text-amber"
                >
                  Certifications & full record
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            </section>

            {/* Outro */}
            <Reveal>
              <div className="mt-28 border-t border-line pt-10">
                <h2 className="font-display text-2xl font-bold text-text">
                  Need an engineer who ships?
                </h2>
                <p className="mt-3 max-w-md text-muted">
                  I work remote-first from {profile.location} ({profile.timezone})
                  and overlap comfortably with US and European hours.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-lg bg-amber px-6 py-3 text-[15px] font-semibold text-bg transition-opacity hover:opacity-90"
                >
                  Start a conversation
                </Link>
                <p className="mt-14 font-mono text-xs text-muted/60">
                  Designed & built by me — Next.js, Tailwind CSS, Framer Motion.
                </p>
              </div>
            </Reveal>
          </main>
        </div>
      </div>
    </>
  );
}
