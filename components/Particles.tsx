"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let raf = 0;
    let running = true;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((width * height) / 22000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.012,
      }));
    }

    function frame() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      const light = document.documentElement.classList.contains("light");
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        s.phase += s.speed;
        if (s.x < -4) s.x = width + 4;
        if (s.x > width + 4) s.x = -4;
        if (s.y < -4) s.y = height + 4;
        if (s.y > height + 4) s.y = -4;
        const twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = light
          ? `rgba(91, 103, 121, ${0.28 * twinkle})`
          : `rgba(233, 238, 246, ${0.4 * twinkle})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    function onVisibility() {
      running = document.visibilityState === "visible";
      if (running) {
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
      }
    }

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
