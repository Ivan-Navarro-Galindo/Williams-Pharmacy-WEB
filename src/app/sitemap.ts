import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.PLACEHOLDER_url.replace(/\/$/, "");
  const lastModified = new Date();

  return nav.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
