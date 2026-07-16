const shipped = [
  { name: "STUDYFORCE", status: "LIVE ON PLAY STORE" },
  { name: "FBREACH", status: "LIVE SAAS" },
  { name: "PRACTICAL KHATA BD", status: "TAKING ORDERS" },
  { name: "MEHENDIHUB", status: "LIVE" },
  { name: "GOSHAREX", status: "IN STORE REVIEW" },
];

export function Marquee() {
  const items = [...shipped, ...shipped];
  return (
    <div
      className="relative overflow-hidden border-y border-line py-3.5"
      aria-label="Shipped products ticker"
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {items.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className="flex items-center gap-10 font-mono text-xs tracking-[0.2em] text-muted"
            aria-hidden={i >= shipped.length}
          >
            <span className="flex items-center gap-3">
              <span
                className={`status-dot inline-block h-1.5 w-1.5 rounded-full ${
                  item.status.includes("REVIEW")
                    ? "bg-amber text-amber"
                    : "bg-live text-live"
                }`}
              />
              <span className="text-text">{item.name}</span>
              <span>— {item.status}</span>
            </span>
            <span className="text-line">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
