import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Manrope,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import { CursorGlow } from "@/components/CursorGlow";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { CommandPalette } from "@/components/CommandPalette";
import { profile } from "@/data/profile";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

// single job: the italic pull-quote voice for project impact lines
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const siteUrl = "https://mozahidulislam.pro.bd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title} & Researcher`,
    template: `%s — ${profile.name}`,
  },
  description: `${profile.headline} ${profile.subhead}`,
  keywords: [
    "Mozahidul Islam",
    "Software Engineer Bangladesh",
    "Full-Stack Developer",
    "React Native Developer",
    "Mobile App Developer Dhaka",
    "Remote Software Engineer",
    "Next.js Developer",
    "NestJS Developer",
    "ASP.NET Developer",
    "Django Developer",
    "AIUB CSE",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — ${profile.title} & Researcher`,
    description: profile.headline,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title} & Researcher`,
    description: profile.headline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: "Software Engineer",
  description: profile.headline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "American International University–Bangladesh (AIUB)",
  },
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "React Native",
    "Node.js",
    "NestJS",
    "ASP.NET",
    "Django",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
  ],
  sameAs: [profile.github, profile.linkedin, profile.codeforces],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${manrope.variable} ${jetbrains.variable} ${instrument.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.theme==='light')document.documentElement.classList.add('light')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Preloader />
        <SmoothScroll />
        <CommandPalette />
        <Particles />
        <CursorGlow />
        <div aria-hidden="true" className="grain" />
        <Nav />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
