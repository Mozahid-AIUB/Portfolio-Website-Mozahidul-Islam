import Link from "next/link";
import { Spotlight } from "@/components/Spotlight";
import { HomeSidebar } from "@/components/HomeSidebar";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/StatusBadge";
import { ShowcaseProject } from "@/components/ShowcaseProject";
import { CountUp } from "@/components/CountUp";
import { OrbitVisual } from "@/components/OrbitVisual";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";

const bentoSpans = [
  "sm:col-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
];

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

          <main className="overflow-x-hidden pb-32 lg:w-[52%] lg:overflow-x-visible lg:pb-40 lg:pt-24">
            {/* Orbit hero */}
            <Reveal>
              <OrbitVisual />
            </Reveal>

            {/* About */}
            <section id="about" className="mt-4 scroll-mt-24">
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
                        <CountUp value={point.value} />
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

            {/* Skills — bento grid */}
            <section id="skills" className="scroll-mt-24">
              <SectionLabel>Skills</SectionLabel>
              <div className="grid gap-4 sm:grid-cols-3">
                {skillGroups.map((group, i) => (
                  <Reveal
                    key={group.title}
                    delay={(i % 3) * 0.06}
                    className={bentoSpans[i] ?? ""}
                  >
                    <div className="group h-full rounded-2xl border border-line bg-surface/70 p-6 transition-colors duration-300 hover:border-amber/40">
                      <h3 className="font-display text-base font-bold text-text">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {group.note}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted transition-colors group-hover:border-line group-hover:text-text"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section id="experience" className="mt-24 scroll-mt-24">
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

            {/* Outro */}
            <Reveal>
              <div className="mt-28 border-t border-line pt-10">
                <p className="max-w-md text-sm text-muted">
                  Based in {profile.location} ({profile.timezone}), I overlap
                  comfortably with US and European hours — remote, hybrid, or
                  on-site with relocation.
                </p>
              </div>
            </Reveal>
          </main>
        </div>
      </div>
    </>
  );
}
