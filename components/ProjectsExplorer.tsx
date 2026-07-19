"use client";

import { useState } from "react";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";
import { ProjectPoster } from "./ProjectPoster";

type Filter = "All" | ProjectCategory;

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const filters: Filter[] = ["All", ...projectCategories];

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              filter === f
                ? "border-amber bg-amber text-bg"
                : "border-line text-muted hover:border-amber/50 hover:text-text"
            }`}
          >
            {f}
            <span className="ml-1.5 opacity-60">
              {f === "All"
                ? projects.length
                : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {visible.map((project, i) => (
          <ProjectPoster key={project.slug} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
