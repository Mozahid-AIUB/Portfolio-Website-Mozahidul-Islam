"use client";

import { useEffect, useState } from "react";

const phrases = [
  "React Native apps on the Play Store",
  "multi-tenant SaaS platforms",
  "RAG & MCP-powered AI systems",
  "NestJS, Django & ASP.NET backends",
  "software that real people use",
];

export function Typewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const phrase = phrases[i % phrases.length];
    let delay: number;

    if (!deleting && text.length < phrase.length) {
      delay = 42 + Math.random() * 40;
    } else if (!deleting) {
      delay = 2000;
    } else if (text.length > 0) {
      delay = 22;
    } else {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < phrase.length) {
          setText(phrase.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, i, reduce]);

  if (reduce) {
    return (
      <span className="font-mono text-sm text-muted">
        I build {phrases[0]}.
      </span>
    );
  }

  return (
    <span className="font-mono text-sm text-muted">
      I build <span className="text-amber">{text}</span>
      <span className="type-caret text-amber" aria-hidden="true">
        ▍
      </span>
    </span>
  );
}
