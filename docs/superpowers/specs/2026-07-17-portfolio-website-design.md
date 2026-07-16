# Portfolio Website — Design Spec

**Date:** 2026-07-17
**Owner:** Mozahidul Islam (mozahidul.islam.ai@gmail.com)
**Goal:** A personal portfolio that convinces US/UK/EU technical recruiters, within 30 seconds, that Mozahid is a production-grade software engineer worth hiring for remote roles.

## Positioning

**Engineer first — AI is a feature, not the identity.** The word "AI" never leads; it appears only inside project case studies where it represents real engineering (API integration, MCP servers, multi-tenant auth). The hero claim is about *shipping*:

> "I design, build, and ship production software — from Play Store apps to multi-tenant SaaS platforms."

What gets emphasized (in order):
1. Shipped to production — StudyForce live on Play Store (50+ downloads), FBReach SaaS live, Practical Khata BD live, MehendiHub live
2. End-to-end ownership — architecture → build → deploy → store approval
3. Engineering fundamentals — C/C++/Java, DSA, Codeforces, Oracle DB design
4. Breadth — embedded C robotics, desktop (Java Swing, C# .NET), web (Django, Laravel, NestJS), mobile (React Native/Expo)
5. Leadership — team lead, mentor, teacher, content creator

What is deliberately excluded: skill percentage bars, testimonials, stock imagery, "AI-powered" as a headline adjective.

## Site structure

```
/            Home: Nav → Hero → Proof strip → About → Skills → Featured
             Projects (4 case-study cards) → Experience → Education snapshot
             → CTA → Footer
/projects    All ~11 projects, filterable: Mobile / Web / SaaS / Desktop / Hardware
/education   AIUB CSE + HSC + SSC timeline, certifications
/experiments Side builds & learning: robot, RAG app, OpenGL village, Manim series,
             NestJS exploration, YouTube content
/resume      Embedded CV + PDF download (public/CV_Mozahidul_Islam.pdf)
/contact     Web3Forms-powered form + direct links (email, LinkedIn, GitHub, Codeforces)
```

Featured four: StudyForce, FBReach, GoShareX, Practical Khata BD.

## Design system — "Midnight Signal"

The visual metaphor is a **release log / deployment status board**: this engineer's differentiator is shipping, so the interface borrows the vocabulary of production software — status lights, version-date tags, monospace metadata.

**Signature element:** the *Shipping Log* treatment of projects. Every project entry carries a real status light (● LIVE / ◍ IN REVIEW / ○ SOURCE) and a mono date tag; featured cards read as release entries: Problem → Built → Impact, with verifiable links.

**Palette** (dark, but deliberately not near-black + acid green):
- `bg` #0A0F1C — midnight blue-black
- `surface` #101726 — card surface
- `line` #1E2A3E — hairline borders
- `text` #E9EEF6 — primary text
- `muted` #8A97AB — secondary text
- `amber` #F5B841 — the single accent (signal-light amber)
- `live` #4ADE80 — semantic only: tiny LIVE status dots

**Type:**
- Display: **Bricolage Grotesque** (700–800) — characterful, used with restraint in heroes/section titles
- Body: **Manrope** (400–600)
- Utility/mono: **JetBrains Mono** — eyebrows, status badges, tech chips, date tags

**Layout:** single-column scroll, max-width ~1100px, 96–128px section rhythm, mono eyebrows with ruled lines. Sticky blurred nav.

**Motion (restrained):** one hero load sequence, scroll fade-up reveals, hover micro-interactions on cards/links. `prefers-reduced-motion` respected everywhere.

**Copy:** entirely English, plain active voice, specific over clever. Every claim links to proof.

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4 (create-next-app defaults)
- Framer Motion for reveals
- Content lives in typed data files: `data/profile.ts`, `data/projects.ts`, `data/skills.ts`, `data/experience.ts`, `data/education.ts` — adding a project later means editing one file
- Contact: Web3Forms (free; needs an access key generated with the owner's email — placeholder until provided)
- Deploy target: Vercel. SEO metadata + OG image so shared links preview well.

## Content ground truth

Primary: `public/CV_Mozahidul_Islam.pdf` (July 2026). Enriched by live research (2026-07-17):
- StudyForce — Play Store, 50+ downloads: play.google.com/store/apps/details?id=com.studyforce.app
- FBReach — fbreach.onrender.com — tagline "Run your business while you sleep"; AI post generator, smart inbox (Bangla/English), scheduler, auto order + courier (Steadfast/Pathao), Google Sheets autopost, BYOK
- Practical Khata BD — practicalkhata.pro.bd — handwritten SSC/HSC practical books, nationwide delivery, bKash/Nagad
- MehendiHub — mehendihub.netlify.app — 42+ designs, 4 categories
- GitHub (35 repos): RAG-APP-AI, Exploring-nest.js, Live-Translator-App, OpenGL village scene (C++), Manim cinematic series, line-follower robot (C), Day-Care system (C#), automated-job-outreach
- Note: GitHub bio says CGPA 3.68, CV says 3.55 — CV used as ground truth pending owner confirmation.

## Known follow-ups (phase 2)

- Owner's professional photo (hero/about) — gradient placeholder until then
- Project screenshots — styled placeholder cards until provided
- Web3Forms access key from owner's email
- Custom domain; optional blog for technical writing
