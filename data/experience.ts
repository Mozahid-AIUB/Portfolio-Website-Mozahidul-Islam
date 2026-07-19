export interface Experience {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    org: "Imran's Lab",
    location: "Dhaka, Bangladesh",
    period: "Oct 2025 – Jan 2026",
    points: [
      "Coded, debugged and prototyped on live software projects alongside senior developers.",
      "Supported data analysis and research tasks that fed directly into product decisions.",
      "Delivered production-ready code under review — and learned what 'production-ready' actually means.",
    ],
  },
  {
    role: "Junior Teacher — Mathematics & ICT",
    org: "Creative Academy",
    location: "Dhaka, Bangladesh",
    period: "Oct 2024 – Dec 2025",
    points: [
      "Teach mathematics and ICT to students from grades 1–10 with structured lesson plans.",
      "Mentor students in programming basics and problem-solving techniques.",
    ],
  },
  {
    role: "Tech Content Creator",
    org: "YouTube (self-employed)",
    location: "Dhaka, Bangladesh",
    period: "2023 – Present",
    points: [
      "Produce programming and ICT tutorials — Python, Java and web technologies for beginners.",
      "Built an engaged audience of learners by making complex topics simple.",
    ],
  },
];
