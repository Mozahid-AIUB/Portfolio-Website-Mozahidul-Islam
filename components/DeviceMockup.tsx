import type { Project } from "@/data/projects";

function SkeletonLines() {
  return (
    <div className="space-y-2.5">
      <div className="h-2 w-3/4 rounded-full bg-white/25" />
      <div className="h-2 w-1/2 rounded-full bg-white/15" />
      <div className="h-2 w-2/3 rounded-full bg-white/10" />
    </div>
  );
}

export function DeviceMockup({ project }: { project: Project }) {
  if (project.kind === "mobile") {
    return (
      <div className="relative mx-auto w-48 sm:w-52">
        <div className="rounded-[2.4rem] border border-line bg-surface p-2 shadow-2xl shadow-black/40">
          <div
            className="relative flex h-[380px] flex-col overflow-hidden rounded-[1.9rem] p-5"
            style={{ background: project.cover }}
          >
            <div className="mx-auto mb-6 h-5 w-20 rounded-full bg-black/30" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              {project.displayUrl ?? project.name}
            </p>
            <div className="mt-4">
              <SkeletonLines />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <div className="h-14 rounded-xl bg-white/15" />
              <div className="h-14 rounded-xl bg-white/10" />
              <div className="h-14 rounded-xl bg-white/10" />
              <div className="h-14 rounded-xl bg-white/15" />
            </div>
            <span
              className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display text-8xl font-extrabold text-white/15"
              aria-hidden="true"
            >
              {project.monogram}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[10px] text-muted">
          {project.displayUrl ?? project.name}
        </span>
      </div>
      <div
        className="relative h-60 overflow-hidden p-6 sm:h-64"
        style={{ background: project.cover }}
      >
        <div className="max-w-[55%]">
          <div className="mb-4 h-3 w-24 rounded-full bg-white/30" />
          <SkeletonLines />
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-20 rounded-md bg-white/25" />
            <div className="h-7 w-14 rounded-md bg-white/10" />
          </div>
        </div>
        <span
          className="pointer-events-none absolute -bottom-8 -right-3 select-none font-display text-[10rem] font-extrabold leading-none text-white/15"
          aria-hidden="true"
        >
          {project.monogram}
        </span>
      </div>
    </div>
  );
}
