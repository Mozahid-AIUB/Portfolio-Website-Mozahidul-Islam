"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX - 3}px, ${targetY - 3}px)`;
      }
    }

    function frame() {
      ringX += (targetX - ringX) * 0.14;
      ringY += (targetY - ringY) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-1.5 w-1.5 rounded-full bg-amber lg:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-9 w-9 rounded-full border border-amber/40 lg:block"
      />
    </>
  );
}
