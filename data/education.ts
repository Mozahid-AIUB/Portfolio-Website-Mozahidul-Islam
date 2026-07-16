export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  result: string;
  details: string[];
}

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "American International University–Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2023 – 2026",
    result: "CGPA 3.55 / 4.00",
    details: [
      "Coursework spanning data structures & algorithms, database systems, software engineering, computer graphics and networking.",
      "Active competitive programmer on Codeforces.",
      "Team lead and mentor on group projects.",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Govt. Khan Bahadur Ahsanullah College",
    location: "Dhaka, Bangladesh",
    period: "2019 – 2022",
    result: "GPA 5.00 / 5.00",
    details: ["Advanced Mathematics and Advanced Physics."],
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Town Sreepur SC High School",
    location: "Dhaka, Bangladesh",
    period: "2013 – 2019",
    result: "GPA 5.00 / 5.00",
    details: ["Leadership and extracurricular activities."],
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Python for Beginners", issuer: "Microsoft" },
  { name: "C# Development — Proficiency Certification", issuer: "Microsoft" },
  {
    name: "Database Management & SQL — Normalization, ER Diagrams, Table Design",
    issuer: "Oracle DBMS Essentials",
  },
  {
    name: "Outstanding Performance Award — Inter-University Programming Contests",
    issuer: "Competitive Programming",
  },
  { name: "Networking Fundamentals — Cisco Networking Basics", issuer: "AIUB" },
];
