import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { TiltCard } from "./TiltCard";
import { DeviceMockup } from "./DeviceMockup";

export function ShowcaseProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={flip ? "lg:order-2" : ""}>
        <TiltCard>
          <DeviceMockup project={project} />
        </TiltCard>
      </div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-4">
          <span className="font-display text-4xl font-extrabold text-line">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <StatusBadge status={project.status} detail={project.statusLabel} />
            <p className="mt-0.5 font-mono text-xs text-muted">{project.period}</p>
          </div>
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-muted">{project.tagline}</p>

        {project.problem && (
          <p className="mt-4 text-sm leading-relaxed text-muted">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
              Problem —{" "}
            </span>
            {project.problem}
          </p>
        )}

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          {project.built.slice(0, 3).map((point) => (
            <li key={point} className="flex gap-2.5">
              <span
                className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-amber/70"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {project.impact && (
          <p className="mt-4 border-l-2 border-amber/40 pl-4 text-sm leading-relaxed text-text">
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

        <div className="mt-6 flex flex-wrap gap-5">
          {project.links.map((link) => (
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
          ))}
        </div>
      </div>
    </article>
  );
}
