"use client";

import { useState } from "react";

// Get a free access key at https://web3forms.com with your email,
// then set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local (and on Vercel).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const data = new FormData(form);
      data.append("access_key", ACCESS_KEY);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!ACCESS_KEY) {
    return (
      <div className="rounded-xl border border-line bg-surface p-6 text-sm text-muted">
        The contact form needs a Web3Forms access key. Until then, reach me
        directly by email — the links are on the right.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-[15px] text-text placeholder:text-muted/50 focus:border-amber focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-[15px] text-text placeholder:text-muted/50 focus:border-amber focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-[15px] text-text placeholder:text-muted/50 focus:border-amber focus:outline-none"
          placeholder="Tell me about the role or project…"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-amber px-6 py-2.5 text-[15px] font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "sent" && (
          <p className="text-sm text-live">Message sent — I&apos;ll reply soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-amber">
            Something went wrong. Email me directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
