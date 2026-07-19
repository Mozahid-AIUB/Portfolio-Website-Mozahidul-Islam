export interface Experiment {
  name: string;
  description: string;
  tech: string[];
  href: string;
}

export const experiments: Experiment[] = [
  {
    name: "Exploring NestJS",
    description:
      "Working through NestJS's module system, dependency injection and decorators to level up my Node.js architecture.",
    tech: ["NestJS", "TypeScript"],
    href: "https://github.com/Mozahid-AIUB/Exploring-nest.js",
  },
  {
    name: "Library Management System",
    description:
      "Client project: a C# library management system delivered to spec.",
    tech: ["C#", ".NET"],
    href: "https://github.com/Mozahid-AIUB/C-Client-project-Library_Management_System",
  },
  {
    name: "Manim Cinematic Showcase",
    description:
      "Programmatic animation series built with Manim during my internship — math and motion as code.",
    tech: ["Python", "Manim"],
    href: "https://github.com/Mozahid-AIUB/intership-manim-cinematic-showcase-series-2025",
  },
  {
    name: "Automated Job Outreach",
    description:
      "Automation that personalizes and sends job applications — building tools for my own workflows.",
    tech: ["JavaScript", "Automation"],
    href: "https://github.com/Mozahid-AIUB/automated-job-outreach",
  },
  {
    name: "Live Translator App",
    description:
      "Real-time translation experiment — speech in, translated text out.",
    tech: ["JavaScript"],
    href: "https://github.com/Mozahid-AIUB/Live-Translator-App",
  },
  {
    name: "The Village Scenario",
    description:
      "2D animated village scene rendered with OpenGL/GLUT in C++ — computer graphics from primitives up.",
    tech: ["C++", "OpenGL"],
    href: "https://github.com/Mozahid-AIUB/Computer_Grapics_Projects_-The-Village-Scenario",
  },
  {
    name: "Nixus UI Design",
    description:
      "Healthcare product UI/UX designed in Figma — design sensibility beyond code.",
    tech: ["Figma", "UI/UX"],
    href: "https://github.com/Mozahid-AIUB/nixus-ui-design",
  },
];
