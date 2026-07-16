export type ProjectStatus = "live" | "in-review" | "source";

export type ProjectCategory =
  | "Mobile"
  | "SaaS"
  | "Web"
  | "Desktop"
  | "Hardware"
  | "Database";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  status: ProjectStatus;
  statusLabel: string;
  category: ProjectCategory;
  featured?: boolean;
  problem?: string;
  built: string[];
  impact?: string;
  tech: string[];
  links: ProjectLink[];
  /** duotone gradient used for the project's cover artwork */
  cover: string;
  monogram: string;
  kind: "web" | "mobile";
  /** short URL shown in the mockup chrome */
  displayUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "studyforce",
    name: "StudyForce",
    tagline: "Study planner for SSC, HSC & admission students",
    period: "Mar 2026",
    status: "live",
    statusLabel: "Live on Play Store",
    category: "Mobile",
    featured: true,
    problem:
      "Exam candidates in Bangladesh juggle coaching, school and self-study with no structured way to plan, stay focused, or measure themselves against peers.",
    built: [
      "Cross-platform mobile app in React Native with Firebase: auth, real-time data sync and push notifications.",
      "14+ shipped features — smart routine planner, focus timer, analytics dashboard, streak & XP system, study rooms, and a national leaderboard with real-time rankings.",
      "An AI study coach as one feature among many — integrated behind a clean product experience, not the headline.",
      "Took the app through Google Play review to a public production release.",
    ],
    impact:
      "Live on the Play Store with active users and 50+ installs, now scaling into a multi-role EdTech platform with parent, student and teacher accounts.",
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.studyforce.app",
      },
    ],
    cover: "linear-gradient(135deg, #1d4ed8 0%, #06b6d4 100%)",
    monogram: "SF",
    kind: "mobile",
    displayUrl: "play.google.com/studyforce",
  },
  {
    slug: "fbreach",
    name: "FBReach",
    tagline: "Facebook business automation platform for Bangladeshi sellers",
    period: "Jun 2026",
    status: "live",
    statusLabel: "Live SaaS",
    category: "SaaS",
    featured: true,
    problem:
      "Small businesses in Bangladesh run on Facebook Pages but can't afford staff to write posts, answer messages at 3 a.m., and track orders.",
    built: [
      "Full multi-tenant SaaS: OAuth-secured Facebook integration, encrypted token storage, per-tenant data isolation, HTTPS end to end.",
      "Content pipeline that turns product names or any web link into publish-ready Bangla posts, with smart scheduling and Google Sheets catalog auto-posting.",
      "24/7 auto-reply inbox in Bangla and English, plus order capture wired into Steadfast and Pathao courier booking.",
      "Claude & OpenAI API integration with MCP server support and bring-your-own-key mode.",
    ],
    impact:
      'Deployed and serving real businesses — the landing promise is literal: "Run your business while you sleep."',
    tech: ["Node.js", "Claude API", "OpenAI API", "OAuth", "PostgreSQL", "MCP"],
    links: [{ label: "Live site", href: "https://fbreach.onrender.com" }],
    cover: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
    monogram: "FB",
    kind: "web",
    displayUrl: "fbreach.onrender.com",
  },
  {
    slug: "gosharex",
    name: "GoShareX",
    tagline: "Ride-sharing app with real-time tracking",
    period: "Apr 2026",
    status: "in-review",
    statusLabel: "Pending Play Store approval",
    category: "Mobile",
    featured: true,
    problem:
      "Ride-sharing is a hard product surface: live location, matching, secure identity — a real test of end-to-end mobile engineering.",
    built: [
      "Cross-platform app in React Native + TypeScript on Expo, with Supabase for the backend: Postgres, row-level security and realtime channels.",
      "Real-time ride tracking and secure authentication flows.",
      "Full product lifecycle: architecture, implementation, and Play Store submission.",
    ],
    impact:
      "Demonstrates end-to-end mobile product development from first commit to store review.",
    tech: ["React Native", "TypeScript", "Expo", "Supabase", "PostgreSQL"],
    links: [
      {
        label: "GitHub (private)",
        href: "https://github.com/Mozahid-AIUB",
      },
    ],
    cover: "linear-gradient(135deg, #0d9488 0%, #84cc16 100%)",
    monogram: "GX",
    kind: "mobile",
    displayUrl: "GoShareX — ride sharing",
  },
  {
    slug: "practical-khata-bd",
    name: "Practical Khata BD",
    tagline: "E-commerce for handwritten SSC/HSC practical notebooks",
    period: "Feb 2026",
    status: "live",
    statusLabel: "Live & taking orders",
    category: "Web",
    featured: true,
    problem:
      "SSC/HSC students across Bangladesh need examiner-ready handwritten practical books, but there was no organized way to order them online.",
    built: [
      "Full-stack e-commerce site in Django with a streamlined ordering flow and responsive interface.",
      "Product catalog for physics, chemistry, biology, math and ICT lab books, with bundle pricing and promotions.",
      "Real-world operations: nationwide delivery and mobile payments via bKash and Nagad.",
    ],
    impact:
      "A live business, not a demo — orders come in through the site and physical products ship across the country in 2–3 days.",
    tech: ["Django", "Python", "JavaScript", "MySQL"],
    links: [{ label: "Live site", href: "https://practicalkhata.pro.bd" }],
    cover: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
    monogram: "PK",
    kind: "web",
    displayUrl: "practicalkhata.pro.bd",
  },
  {
    slug: "mehendihub",
    name: "MehendiHub",
    tagline: "Free mehendi design gallery for Eid",
    period: "Jan 2026",
    status: "live",
    statusLabel: "Live",
    category: "Web",
    built: [
      "Design platform with 42+ mehendi designs across Simple, Arabic, Bridal and Kids categories.",
      "Daily featured picks, a favorites system, and free downloads.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "Live site", href: "https://mehendihub.netlify.app" },
      { label: "GitHub", href: "https://github.com/Mozahid-AIUB/mehenidihub" },
    ],
    cover: "linear-gradient(135deg, #be123c 0%, #f97316 100%)",
    monogram: "MH",
    kind: "web",
    displayUrl: "mehendihub.netlify.app",
  },
  {
    slug: "day-care-management",
    name: "Child Care Management System",
    tagline: "Real-time day-care operations for parents, staff and admins",
    period: "Jan – Jun 2025",
    status: "source",
    statusLabel: "Open source",
    category: "Desktop",
    built: [
      "C# .NET application connecting parents, children, staff and administrators in real time.",
      "Role-specific dashboards with attendance tracking, billing and reporting.",
    ],
    tech: ["C#", ".NET", "SQL Server"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Mozahid-AIUB/Day-Care-Management-System",
      },
    ],
    cover: "linear-gradient(135deg, #0369a1 0%, #22d3ee 100%)",
    monogram: "CC",
    kind: "web",
  },
  {
    slug: "patient-management",
    name: "Patient Management System",
    tagline: "Hospital patient management desktop app",
    period: "Oct 2023 – Jan 2024",
    status: "source",
    statusLabel: "Open source",
    category: "Desktop",
    built: [
      "Java Swing desktop application for hospital patient management.",
      "Automated patient service workflows to improve healthcare accessibility.",
    ],
    tech: ["Java", "Swing"],
    links: [
      { label: "GitHub", href: "https://github.com/Mozahid-AIUB/HMS_JAVA" },
    ],
    cover: "linear-gradient(135deg, #334155 0%, #64748b 100%)",
    monogram: "PM",
    kind: "web",
  },
  {
    slug: "line-follower-robot",
    name: "Line Follower & Obstacle Avoider Robot",
    tagline: "Autonomous robot on Arduino with real-time path correction",
    period: "May – Oct 2024",
    status: "source",
    statusLabel: "Open source",
    category: "Hardware",
    built: [
      "Autonomous robot on Arduino Uno: IR sensors for line tracking, HC-SR04 ultrasonic sensor for obstacle detection, servo-driven directional scanning.",
      "Real-time decision logic in embedded C with an L298N motor driver for dual-wheel control and automatic path correction.",
    ],
    tech: ["Arduino", "Embedded C", "Electronics"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Mozahid-AIUB/line-follower-obstacle-avoider-robot",
      },
    ],
    cover: "linear-gradient(135deg, #166534 0%, #4ade80 100%)",
    monogram: "RB",
    kind: "web",
  },
  {
    slug: "organ-transplant-db",
    name: "Organ Transplant Management System",
    tagline: "Relational database design for transplant records",
    period: "May – Aug 2024",
    status: "source",
    statusLabel: "Open source",
    category: "Database",
    built: [
      "Oracle DBMS project for organ transplant record management.",
      "ER diagrams, normalization and table design for accurate, consistent data.",
    ],
    tech: ["Oracle", "PL/SQL"],
    links: [{ label: "GitHub", href: "https://github.com/Mozahid-AIUB" }],
    cover: "linear-gradient(135deg, #7f1d1d 0%, #ef4444 100%)",
    monogram: "OT",
    kind: "web",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: ProjectCategory[] = [
  "Mobile",
  "SaaS",
  "Web",
  "Desktop",
  "Hardware",
  "Database",
];
