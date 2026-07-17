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
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const timer = setInterval(
      () => setIndex((v) => (v + 1) % images.length),
      4000
    );
    return () => clearInterval(timer);
  }, [images.length, reduce]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          fill
          sizes={sizes}
          className={`object-cover object-top transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
