"use client";

import { useReducedMotion, motion } from "framer-motion";

interface OrbitItem {
  label: string;
}

const ORBIT_ITEMS: OrbitItem[] = [
  { label: "Full-Stack" },
  { label: "Android + iOS" },
  { label: "Databases" },
  { label: "Shipped Products" },
  { label: "Security" },
  { label: "RAG & LLM" },
];

const SIZE = 420;
const CENTER = SIZE / 2;
const LABEL_RADIUS = 190;
const OUTER_RING_RADIUS = 190;
const MID_RING_RADIUS = 148;
const INNER_RING_RADIUS = 106;
const SPHERE_RADIUS = 56;

function angleFor(index: number, total: number) {
  return (360 / total) * index - 90;
}

function pointOnCircle(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function ringDots(radius: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (360 / count) * i;
    return pointOnCircle(angle, radius);
  });
}

export function OrbitVisual() {
  const reduce = useReducedMotion();
  const outerDots = ringDots(OUTER_RING_RADIUS, 3);
  const midDots = ringDots(MID_RING_RADIUS, 2);
  const innerDots = ringDots(INNER_RING_RADIUS, 4);

  return (
    <div
      className="orbit-container relative mx-auto max-w-full"
      aria-hidden="true"
    >
      <div
        className="orbit-scale absolute left-1/2 top-1/2"
        style={{ width: SIZE, height: SIZE }}
      >
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        className="absolute inset-0"
      >
        {/* Orbit rings — outer dashed, mid solid, inner dotted */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={OUTER_RING_RADIUS}
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.32"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={MID_RING_RADIUS}
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1"
          opacity="0.24"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={INNER_RING_RADIUS}
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1"
          strokeDasharray="1.5 5"
          opacity="0.28"
        />
      </svg>

      {/* Spokes + pulse dots + label pills — the whole group spins as one
          CSS-animated transform (GPU compositor, no React re-render);
          label pills counter-rotate below so their text stays level */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        className={`absolute inset-0 ${reduce ? "" : "orbit-group-spin"}`}
        style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
      >
        <defs>
          {ORBIT_ITEMS.map((item, i) => {
            const angle = angleFor(i, ORBIT_ITEMS.length);
            const from = pointOnCircle(angle, SPHERE_RADIUS);
            const to = pointOnCircle(angle, LABEL_RADIUS);
            return (
              <linearGradient
                key={item.label}
                id={`spoke-${i}`}
                gradientUnits="userSpaceOnUse"
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              >
                <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>

        {/* Spokes: straight line from sphere edge to label, along the exact same angle */}
        {ORBIT_ITEMS.map((item, i) => {
          const angle = angleFor(i, ORBIT_ITEMS.length);
          const from = pointOnCircle(angle, SPHERE_RADIUS);
          const to = pointOnCircle(angle, LABEL_RADIUS);
          return (
            <line
              key={item.label}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={`url(#spoke-${i})`}
              strokeWidth="1.25"
            />
          );
        })}

        {/* Travelling pulse dots along each spoke */}
        {!reduce &&
          ORBIT_ITEMS.map((item, i) => {
            const angle = angleFor(i, ORBIT_ITEMS.length);
            const from = pointOnCircle(angle, SPHERE_RADIUS);
            const to = pointOnCircle(angle, LABEL_RADIUS);
            const dur = 3 + (i % 3) * 0.7;
            return (
              <circle key={item.label} r="2.5" fill="var(--amber)" opacity="0">
                <animateMotion
                  dur={`${dur}s`}
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                  path={`M${from.x},${from.y} L${to.x},${to.y}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur={`${dur}s`}
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
      </svg>

      {/* Label pills — anchored at their static angle inside the same
          spinning group as the spokes (orbit-group-spin), then each pill
          counter-spins in place so its text stays level throughout */}
      <div
        className={`absolute inset-0 ${reduce ? "" : "orbit-group-spin"}`}
        style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
      >
        {ORBIT_ITEMS.map((item, i) => {
          const angle = angleFor(i, ORBIT_ITEMS.length);
          const p = pointOnCircle(angle, LABEL_RADIUS);
          return (
            <div
              key={item.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: p.x, top: p.y }}
            >
              <motion.span
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-text shadow-lg shadow-black/20 ${
                  reduce ? "" : "orbit-group-spin-reverse"
                }`}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_6px_1px_rgba(245,184,65,0.5)]"
                  aria-hidden="true"
                />
                {item.label}
              </motion.span>
            </div>
          );
        })}
      </div>

      {/* Outer ring dots — fastest, creates depth via speed contrast */}
      <div
        className="absolute inset-0 orbit-spin"
        style={{ transformOrigin: `${CENTER}px ${CENTER}px`, animationDuration: "30s" }}
      >
        {outerDots.map((p, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/70 shadow-[0_0_8px_2px_rgba(245,184,65,0.5)]"
            style={{ left: p.x, top: p.y }}
          />
        ))}
      </div>

      {/* Mid ring dots — moderate speed, counter-rotate */}
      <div
        className="absolute inset-0 orbit-spin-reverse"
        style={{ transformOrigin: `${CENTER}px ${CENTER}px`, animationDuration: "60s" }}
      >
        {midDots.map((p, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/60 shadow-[0_0_6px_1px_rgba(245,184,65,0.4)]"
            style={{ left: p.x, top: p.y }}
          />
        ))}
      </div>

      {/* Inner ring dots — slowest, near-static against the sphere for a layered 3D feel */}
      <div
        className="absolute inset-0 orbit-spin"
        style={{ transformOrigin: `${CENTER}px ${CENTER}px`, animationDuration: "150s" }}
      >
        {innerDots.map((p, i) => (
          <div
            key={i}
            className="absolute h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/50 shadow-[0_0_5px_1px_rgba(245,184,65,0.35)]"
            style={{ left: p.x, top: p.y }}
          />
        ))}
      </div>

      {/* Center core — dark glass disc with an amber rim-light, so the
          "Mozahid" label reads as crisp foreground text instead of being
          swallowed by a solid gold fill */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: CENTER,
          top: CENTER,
          width: SPHERE_RADIUS * 2 + 44,
          height: SPHERE_RADIUS * 2 + 44,
          background: "radial-gradient(circle, rgba(245,184,65,0.28), transparent 72%)",
          filter: "blur(18px)",
        }}
      />
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: CENTER,
          top: CENTER,
          width: SPHERE_RADIUS * 2,
          height: SPHERE_RADIUS * 2,
          background:
            "radial-gradient(circle at 50% 38%, #1c2436 0%, #131a29 55%, #0d1220 100%)",
          border: "1.5px solid rgba(245,184,65,0.55)",
          boxShadow:
            "0 0 0 1px rgba(245,184,65,0.12), 0 0 32px 6px rgba(245,184,65,0.22), 0 8px 28px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -14px 22px rgba(245,184,65,0.14)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(155deg, rgba(255,255,255,0.10) 0%, transparent 40%)",
          }}
        />
        <span
          className="display-sharp relative flex h-full w-full items-center justify-center font-display text-xl font-extrabold"
          style={{
            letterSpacing: "-0.01em",
            background:
              "linear-gradient(180deg, #fff6e0 0%, #f5b841 55%, #d99a2b 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 1px 6px rgba(245,184,65,0.45))",
          }}
        >
          Mozahid
        </span>
      </div>
      </div>
    </div>
  );
}
