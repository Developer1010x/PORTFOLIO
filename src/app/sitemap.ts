import type { MetadataRoute } from "next";
import { posts, profile } from "@/lib/content";

const base = profile.portfolio.replace(/\/$/, "");

// Static routes, highest-intent first. Kept in one place so adding a page means
// editing this list rather than remembering a second file exists.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "monthly" },
  { path: "/experience", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/publications", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/social", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...routes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    // Only published posts belong in a sitemap. Listing a post whose page says
    // "coming soon" invites a crawler to index an empty page under a real title.
    ...posts
      .filter((p) => p.body)
      .map((p) => ({
        url: `${base}/blog/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: "yearly" as const,
        priority: 0.5,
      })),
  ];
}
