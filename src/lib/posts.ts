import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  category: z.string(),
  date: z.iso.date(),
  updated: z.iso.date().optional(),
  published: z.boolean().default(false),
});
const directory = path.join(process.cwd(), "content", "articles");
export function getPosts() {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => /^[a-z0-9-]+\.mdx$/.test(file))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), "utf8"),
      );
      return {
        ...schema.parse(data),
        slug: file.replace(/\.mdx$/, ""),
        content,
      };
    })
    .filter(
      (post) => post.published && new Date(post.date).getTime() <= Date.now(),
    )
    .sort((a, b) => b.date.localeCompare(a.date));
}
