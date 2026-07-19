import Image from "next/image";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { TiltCard } from "./TiltCard";
import { DeviceMockup } from "./DeviceMockup";

export function ShowcaseProject({
  project,
}: {
  project: Project;
  index?: number;
}) {
  const panel = project.panel;

  return (
    <article
      className={`relative rounded-3xl p-6 sm:p-9 ${
        panel && !panel.dark ? "light" : ""
      }`}
      style={panel ? { background: panel.bg } : undefined}
    >
      {!panel && (
        <div
          className="absolute inset-0 -z-10 rounded-3xl opacity-[0.07]"
          style={{ background: project.cover }}
          aria-hidden="true"
        />
      )}
      <div className="mb-9">
        <TiltCard>
          <DeviceMockup project={project} />
        </TiltCard>
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {project.logo ? (
            <Image
              src={project.logo}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-xl border border-line bg-white object-cover"
            />
          ) : (
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
              style={{ background: project.cover }}
              aria-hidden="true"
            >
              {project.monogram}
            </span>
          )}
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {project.name}
            <StatusBadge status={project.status} detail={project.statusLabel} />
          </span>
        </h3>
        <p className="mt-2 text-muted">{project.tagline}</p>

        {project.impact && (
          <p className="mt-5 border-l-2 border-amber/40 pl-4 font-serif text-lg italic leading-relaxed text-text">
            {project.impact}
          </p>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-amber-dim px-3 py-1 font-mono text-xs text-amber"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          {project.links.map((link, i) =>
            i === 0 ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
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
                className="group inline-flex items-center gap-2 font-medium text-amber transition-opacity hover:opacity-80"
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
    </article>
  );
}
