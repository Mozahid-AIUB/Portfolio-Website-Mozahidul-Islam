export interface ResearchItem {
  code: string;
  title: string;
  area: string;
  description: string;
  status: "ongoing" | "in-production" | "published-code";
  statusLabel: string;
  href: string;
  /** DOI landing page, once minted on Zenodo — shown as a small badge link */
  doi?: string;
}

export const research: ResearchItem[] = [
  {
    code: "R-01",
    title: "Predictive Maintenance with LSTM on the Edge",
    area: "Machine Learning · IoT",
    description:
      "First-author study: LSTM vs GRU on IoT sensor streams for failure prediction — noise-robust training, dropout regularization and TensorFlow Lite quantization for sub-50 ms inference on edge hardware.",
    status: "ongoing",
    statusLabel: "Working paper",
    href: "/research/predictive-maintenance-lstm.pdf",
    doi: "https://doi.org/10.5281/zenodo.21430831",
  },
  {
    code: "R-02",
    title: "Retrieval-Augmented Generation",
    area: "Applied AI",
    description:
      "Building RAG pipelines that ground LLM answers in a custom document corpus — experimenting with chunking strategies, embedding models and retrieval quality evaluation.",
    status: "ongoing",
    statusLabel: "Active research",
    href: "https://github.com/Mozahid-AIUB/RAG-APP-AI",
  },
  {
    code: "R-03",
    title: "LLM Tool Protocols (MCP)",
    area: "AI Systems",
    description:
      "Model Context Protocol servers in a production SaaS: how LLMs safely call business tools — studied and shipped inside FBReach with Claude & OpenAI APIs.",
    status: "in-production",
    statusLabel: "Running in production",
    href: "https://postreach.me",
  },
  {
    code: "R-04",
    title: "Learning Engagement Mechanics",
    area: "EdTech",
    description:
      "Do streaks, XP and national leaderboards actually change study behavior? StudyForce is my live testbed — real students, real retention data.",
    status: "in-production",
    statusLabel: "Live experiment",
    href: "https://play.google.com/store/apps/details?id=com.studyforce.app",
  },
  {
    code: "R-05",
    title: "Programmatic Visualization",
    area: "Graphics",
    description:
      "Mathematical animation as code — a cinematic Manim series built during my internship, plus OpenGL scene rendering in C++ from primitives up.",
    status: "published-code",
    statusLabel: "Open source",
    href: "https://github.com/Mozahid-AIUB/intership-manim-cinematic-showcase-series-2025",
  },
];

/** course-based survey studies — the research-methods groundwork;
    all unpublished manuscripts, presented honestly as working papers */
export interface WorkingPaper {
  title: string;
  note: string;
  href: string;
  doi?: string;
}

export const workingPapers: WorkingPaper[] = [
  {
    title:
      "Strengthening Pharmacy Education in Bangladesh: The Role of Early Academic Screening",
    note: "First author · survey of 59 pharmacy students — descriptive statistics & cross-tabulation (Excel, SPSS)",
    href: "/research/pharmacy-education-screening.pdf",
    doi: "https://doi.org/10.5281/zenodo.21433003",
  },
  {
    title: "Examining the Impact of Technology Integration on Student Engagement",
    note: "Survey of 50 students & 6 teachers — the classroom-scale groundwork behind the live StudyForce experiments (R-04)",
    href: "/research/technology-integration-engagement.pdf",
    doi: "https://doi.org/10.5281/zenodo.21433201",
  },
  {
    title: "The Psychological Impact of Cyberbullying on University Students",
    note: "Survey of 57 students · 22-item questionnaire on mental-health and academic impact",
    href: "/research/cyberbullying-university-students.pdf",
    doi: "https://doi.org/10.5281/zenodo.21433121",
  },
];
