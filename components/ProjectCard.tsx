import Image from "next/image";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { TechChips } from "./TechChips";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-amber/40">
      <div className="relative aspect-[2/1] overflow-hidden" aria-hidden="true">
        {project.kind === "web" && project.screenshots?.length ? (
          <Image
            src={project.screenshots[0]}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-end justify-center"
            style={{ background: project.cover }}
          >
            {project.kind === "mobile" && project.screenshots?.length ? (
              <div className="relative aspect-[9/16] w-28 translate-y-3 overflow-hidden rounded-t-xl border border-black/30 shadow-xl shadow-black/40 transition-transform duration-500 group-hover:translate-y-1.5">
                <Image
                  src={project.screenshots[0]}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <span className="absolute -bottom-6 right-4 select-none font-display text-7xl font-extrabold leading-none text-white/20 transition-transform duration-300 group-hover:scale-110">
                {project.monogram}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-muted">{project.period}</span>
        </div>

        <h3 className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-text">
          {project.logo ? (
            <Image
              src={project.logo}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0 rounded-md border border-line bg-white object-cover"
            />
          ) : (
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[9px] font-bold text-white"
              style={{ background: project.cover }}
              aria-hidden="true"
            >
              {project.monogram}
            </span>
          )}
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>

        {project.impact ? (
          <p className="mt-4 flex-1 border-l-2 border-amber/40 pl-3 font-serif text-[15px] italic leading-relaxed text-text/90 line-clamp-3">
            {project.impact}
          </p>
        ) : (
          <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted">
            {project.built.slice(0, 2).map((point) => (
              <li key={point} className="flex gap-2.5">
                <span
                  className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-amber/60"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <TechChips items={project.tech.slice(0, 3)} />
          <div className="flex gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-amber transition-opacity hover:opacity-80"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
