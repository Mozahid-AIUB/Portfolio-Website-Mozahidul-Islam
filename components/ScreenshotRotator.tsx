"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ScreenshotRotator({
  images,
  alt,
  sizes,
}: {
  images: string[];
  alt: string;
  sizes: string;
}) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const timer = setInterval(
      () => setIndex((v) => (v >= images.length ? v : v + 1)),
      4000
    );
    return () => clearInterval(timer);
  }, [images.length, reduce]);

  useEffect(() => {
    if (animate) return;
    // let the snap back to slide 0 paint before re-enabling the transition
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true))
    );
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // extra copy of the first image so the wrap-around keeps sliding forward
  const slides = images.length > 1 ? [...images, images[0]] : images;

  return (
    <div
      className={`flex h-full ${
        animate ? "transition-transform duration-700 ease-in-out" : ""
      }`}
      style={{ transform: `translateX(-${index * 100}%)` }}
      onTransitionEnd={() => {
        if (index === images.length) {
          setAnimate(false);
          setIndex(0);
        }
      }}
    >
      {slides.map((src, i) => (
        <div key={`${src}-${i}`} className="relative h-full w-full flex-none">
          <Image
            src={src}
            alt={i === 0 ? alt : ""}
            fill
            sizes={sizes}
            quality={90}
            className="object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}
