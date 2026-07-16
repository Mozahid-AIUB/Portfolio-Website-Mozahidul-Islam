"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function TiltCard({ children }: { children: ReactNode }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20 });
  const reduce = useReducedMotion();

  if (reduce) {
    return <div>{children}</div>;
  }

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 900,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
