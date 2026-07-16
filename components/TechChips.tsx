export function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
