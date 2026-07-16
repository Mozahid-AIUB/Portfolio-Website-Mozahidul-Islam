export interface ResearchItem {
  code: string;
  title: string;
  area: string;
  description: string;
  status: "ongoing" | "in-production" | "published-code";
  statusLabel: string;
  href: string;
}

export const research: ResearchItem[] = [
  {
    code: "R-01",
    title: "Retrieval-Augmented Generation",
    area: "Applied AI",
    description:
      "Building RAG pipelines that ground LLM answers in a custom document corpus — experimenting with chunking strategies, embedding models and retrieval quality evaluation.",
    status: "ongoing",
    statusLabel: "Active research",
    href: "https://github.com/Mozahid-AIUB/RAG-APP-AI",
  },
  {
    code: "R-02",
    title: "LLM Tool Protocols (MCP)",
    area: "AI Systems",
    description:
      "Model Context Protocol servers in a production SaaS: how LLMs safely call business tools — studied and shipped inside FBReach with Claude & OpenAI APIs.",
    status: "in-production",
    statusLabel: "Running in production",
    href: "https://fbreach.onrender.com",
  },
  {
    code: "R-03",
    title: "Learning Engagement Mechanics",
    area: "EdTech",
    description:
      "Do streaks, XP and national leaderboards actually change study behavior? StudyForce is my live testbed — real students, real retention data.",
    status: "in-production",
    statusLabel: "Live experiment",
    href: "https://play.google.com/store/apps/details?id=com.studyforce.app",
  },
  {
    code: "R-04",
    title: "Programmatic Visualization",
    area: "Graphics",
    description:
      "Mathematical animation as code — a cinematic Manim series built during my internship, plus OpenGL scene rendering in C++ from primitives up.",
    status: "published-code",
    statusLabel: "Open source",
    href: "https://github.com/Mozahid-AIUB/intership-manim-cinematic-showcase-series-2025",
  },
];
