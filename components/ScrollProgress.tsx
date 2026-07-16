"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-amber"
      style={{ scaleX }}
    />
  );
}
