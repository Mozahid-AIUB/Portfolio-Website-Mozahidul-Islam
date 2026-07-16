import type { MetadataRoute } from "next";

const base = "https://mozahidulislam.pro.bd";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/education",
    "/experiments",
    "/resume",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
