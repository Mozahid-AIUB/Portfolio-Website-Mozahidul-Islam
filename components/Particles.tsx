"use client";

import { useEffect, useMemo, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

async function initEngine(engine: Engine) {
  await loadSlim(engine);
}

function ParticlesLayer() {
  const [light, setLight] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setLight(document.documentElement.classList.contains("light"));

    const observer = new MutationObserver(() => {
      setLight(document.documentElement.classList.contains("light"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const amber = light ? "#9c6f00" : "#f5b841";

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true, width: 1920, height: 1080 } },
        color: { value: amber },
        opacity: { value: light ? 0.35 : 0.5 },
        size: { value: { min: 1, max: 2 } },
        links: {
          enable: true,
          distance: 130,
          color: amber,
          opacity: light ? 0.16 : 0.22,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 180,
            links: { opacity: light ? 0.45 : 0.6 },
          },
        },
      },
      detectRetina: true,
    }),
    [amber, light]
  );

  if (reducedMotion) return null;

  return (
    <Particles
      id="site-particles"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 lg:pointer-events-auto"
      options={options}
    />
  );
}

export function ParticlesBackground() {
  return (
    <ParticlesProvider init={initEngine}>
      <ParticlesLayer />
    </ParticlesProvider>
  );
}
