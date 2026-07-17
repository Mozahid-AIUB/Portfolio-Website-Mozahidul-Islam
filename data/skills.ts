export interface SkillGroup {
  title: string;
  note: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    note: "Fundamentals first — DSA in C++, systems in C, OOP in Java & C#",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C / C++", "PHP", "SQL"],
  },
  {
    title: "Mobile",
    note: "Two apps taken through Play Store review",
    items: ["React Native", "Expo", "Firebase", "Play Store release process"],
  },
  {
    title: "Backend & Web",
    note: "Production APIs with auth, encryption and multi-tenancy",
    items: ["Node.js", "NestJS", "ASP.NET", "Django", "Laravel", "Multi-tenant SaaS", "REST APIs", "OAuth 2.0", "Tailwind CSS"],
  },
  {
    title: "Data & Infrastructure",
    note: "From ER design and normalization to realtime sync",
    items: ["PostgreSQL", "Oracle DBMS", "PL/SQL", "MySQL", "Firebase", "Supabase", "Neon", "Linux", "Git / GitHub"],
  },
  {
    title: "Engineering practice",
    note: "How I work day to day",
    items: ["System design", "Agile / Scrum", "Figma & UI prototyping", "Code review", "Postman", "Competitive programming"],
  },
  {
    title: "Leadership & communication",
    note: "Remote work runs on clear writing and teaching",
    items: ["Team leadership", "Mentorship", "Teaching (Math & ICT)", "Technical content creation"],
  },
];
