import Image from "next/image";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { ScreenshotRotator } from "./ScreenshotRotator";
import { TechChips } from "./TechChips";

function Shots({ project }: { project: Project }) {
  if (!project.screenshots?.length) {
    return (
      <div
        className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-2xl shadow-black/30"
        style={{ background: project.cover }}
      >
        <div className="flex items-center gap-2.5 border-b border-white/15 bg-black/25 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </span>
          <span className="h-2 w-28 rounded-full bg-white/20" aria-hidden="true" />
        </div>
        <div className="flex gap-4 p-5">
          <div className="hidden w-24 shrink-0 space-y-2.5 pt-1 sm:block">
            <div className="h-2 w-full rounded-full bg-white/30" />
            <div className="h-2 w-3/4 rounded-full bg-white/15" />
            <div className="h-2 w-5/6 rounded-full bg-white/15" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-3 h-3 w-1/3 rounded-full bg-white/30" />
            <div className="grid grid-cols-3 gap-2.5">
              <div className="h-12 rounded-lg bg-white/20" />
              <div className="h-12 rounded-lg bg-white/10" />
              <div className="h-12 rounded-lg bg-white/15" />
              <div className="h-12 rounded-lg bg-white/10" />
              <div className="h-12 rounded-lg bg-white/15" />
              <div className="h-12 rounded-lg bg-white/10" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-4/5 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.kind === "mobile") {
    return (
      <div className="relative mx-auto aspect-[9/16] w-56 overflow-hidden rounded-2xl shadow-2xl shadow-black/30 sm:w-64">
        <ScreenshotRotator
          images={project.screenshots}
          alt={`${project.name} app screenshot`}
          sizes="320px"
        />
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/30"
      style={{
        aspectRatio: project.screenshotSize
          ? `${project.screenshotSize.width} / ${project.screenshotSize.height}`
          : "16 / 9",
      }}
    >
      <ScreenshotRotator
        images={project.screenshots}
        alt={`${project.name} screenshot`}
        sizes="(min-width: 1024px) 520px, 100vw"
      />
    </div>
  );
}

export function ProjectPoster({
  project,
  flip,
}: {
  project: Project;
  flip?: boolean;
}) {
  const panel = project.panel;

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10 ${
        panel && !panel.dark ? "light" : ""
      } ${panel ? "" : "border border-line bg-surface"}`}
      style={panel ? { background: panel.bg } : undefined}
    >
      {!panel && (
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: project.cover }}
          aria-hidden="true"
        />
      )}

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={flip ? "lg:order-2" : ""}>
          <div className="flex flex-wrap items-center gap-3">
            {project.logo ? (
              <Image
                src={project.logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl bg-white object-cover"
              />
            ) : (
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                style={{ background: project.cover }}
                aria-hidden="true"
              >
                {project.monogram}
              </span>
            )}
            <h3 className="font-display text-xl font-bold tracking-tight text-text">
              {project.name}
            </h3>
            <StatusBadge status={project.status} detail={project.statusLabel} />
          </div>

          <p className="mt-5 max-w-lg font-display text-2xl font-extrabold leading-tight tracking-tight text-text sm:text-3xl">
            {project.tagline}
          </p>

          {project.problem && (
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                Problem —{" "}
              </span>
              {project.problem}
            </p>
          )}

          <ul className="mt-4 max-w-md space-y-2 text-sm leading-snug text-text/90">
            {project.built.slice(0, 3).map((point) => (
              <li key={point} className="flex gap-2.5">
                <span
                  className="mt-px font-bold"
                  style={{ color: panel?.accent ?? "var(--amber)" }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <TechChips items={project.tech} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            {project.links.map((link, i) =>
              i === 0 ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
                  style={
                    panel
                      ? { background: panel.accent, color: panel.accentText }
                      : undefined
                  }
                >
                  {link.label}
                  <span
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-amber transition-opacity hover:opacity-80"
                >
                  {link.label}
                  <span
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              )
            )}
          </div>
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <Shots project={project} />
        </div>
      </div>
    </article>
  );
}
