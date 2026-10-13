import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumb, ContactStrip, PageIntro } from "@/components/ui";
export const metadata = pageMetadata(
  "Journal — notes de marketing et d’expérimentation",
  "Un journal consacré au Growth Marketing, au SEO, à l’automatisation et aux expérimentations. Les premiers articles sont en préparation.",
  "/journal",
);
export default function Journal() {
  const posts = getPosts();
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "Journal", path: "/journal" }]} />
      <PageIntro
        label="Journal / Notes de terrain"
        title="Prendre du recul. Garder une trace."
      >
        <p>
          Des méthodes, des retours d’expérience et des questions ouvertes sur
          le marketing et les outils digitaux.
        </p>
      </PageIntro>
      {posts.length ? (
        <div className="skill-list">
          {posts.map((post) => (
            <article key={post.slug}>
              <span className="tag">{post.category}</span>
              <h2>
                <Link href={`/journal/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR")}
              </time>
            </article>
          ))}
        </div>
      ) : (
        <section className="empty-state">
          <span className="asterisk" aria-hidden="true">
            ✳
          </span>
          <h2>
            Les premières notes
            <br />
            <em>sont en préparation.</em>
          </h2>
          <p>
            Je souhaite publier des contenus utiles, nourris par des projets et
            des expérimentations documentés. Aucun article n’est encore publié.
          </p>
          <Link href="/growth-lab" className="text-link">
            Découvrir les pistes du Growth Lab ↗
          </Link>
        </section>
      )}
      <div className="topic-list">
        {[
          "Growth Marketing",
          "SEO",
          "Google Ads",
          "Automatisation",
          "Intelligence artificielle",
          "Études de cas",
          "Expérimentations",
        ].map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <ContactStrip />
    </div>
  );
}
