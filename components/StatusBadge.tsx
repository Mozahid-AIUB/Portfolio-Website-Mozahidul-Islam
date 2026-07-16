import type { ProjectStatus } from "@/data/projects";

const meta: Record<
  ProjectStatus,
  { label: string; dot: string; text: string; pulse: boolean }
> = {
  live: { label: "LIVE", dot: "bg-live text-live", text: "text-live", pulse: true },
  "in-review": {
    label: "IN REVIEW",
    dot: "bg-amber text-amber",
    text: "text-amber",
    pulse: false,
  },
  source: {
    label: "SOURCE",
    dot: "bg-muted text-muted",
    text: "text-muted",
    pulse: false,
  },
};

export function StatusBadge({
  status,
  detail,
}: {
  status: ProjectStatus;
  detail?: string;
}) {
  const m = meta[status];
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-widest ${m.text}`}>
      <span
        className={`status-dot inline-block h-1.5 w-1.5 rounded-full ${m.dot} ${
          m.pulse ? "status-dot--pulse" : ""
        }`}
        aria-hidden="true"
      />
      {detail ? detail.toUpperCase() : m.label}
    </span>
  );
}
