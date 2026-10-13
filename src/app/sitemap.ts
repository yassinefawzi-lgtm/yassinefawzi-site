import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { getPosts } from "@/lib/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexable) return [];
  return [
    "/",
    "/a-propos",
    "/projets",
    "/competences",
    "/cv",
    "/journal",
    "/growth-lab",
    "/contact",
    ...projects.map((p) => `/projets/${p.slug}`),
    ...getPosts().map((p) => `/journal/${p.slug}`),
  ].map((path) => ({ url: new URL(path, site.url).href }));
}
