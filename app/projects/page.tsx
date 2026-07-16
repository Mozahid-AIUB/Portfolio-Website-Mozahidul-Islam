import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Every project I've shipped — mobile apps, SaaS platforms, web products, desktop software, and hardware.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="shipping log — full history"
        title="All projects"
        lede="Everything here is verifiable: live sites, store listings, or public source. Filter by the kind of work you're hiring for."
      />
      <ProjectsExplorer />
    </div>
  );
}
