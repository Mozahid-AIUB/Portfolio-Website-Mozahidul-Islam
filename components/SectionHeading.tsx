interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
}

export function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {lede && <p className="mt-4 max-w-2xl text-muted">{lede}</p>}
    </div>
  );
}
