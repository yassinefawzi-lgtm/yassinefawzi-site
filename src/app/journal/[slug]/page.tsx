import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumb, JsonLd, PageIntro } from "@/components/ui";
import { site } from "@/content/site";
export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  return post
    ? pageMetadata(post.title, post.description, `/journal/${slug}`)
    : {};
}
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { name: "Journal", path: "/journal" },
          { name: post.title, path: `/journal/${slug}` },
        ]}
      />
      <PageIntro label={post.category} title={post.title}>
        <p>{post.description}</p>
        <p>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("fr-FR")}
          </time>{" "}
          · {site.name}
        </p>
      </PageIntro>
      <article className="article-body">
        <MDXRemote source={post.content} />
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          author: {
            "@type": "Person",
            name: site.name,
            url: `${site.url}/a-propos`,
          },
          mainEntityOfPage: `${site.url}/journal/${slug}`,
          inLanguage: "fr-FR",
        }}
      />
    </div>
  );
}
