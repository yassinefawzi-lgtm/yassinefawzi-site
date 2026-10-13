import Link from "next/link";
import { capabilities, skillGroups } from "@/content/site";
import { Breadcrumb, ContactStrip, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Compétences — acquisition, automatisation & outils",
  "Compétences en Growth Marketing, acquisition, automatisation et outils digitaux, reliées à des exemples de missions et de projets.",
  "/competences",
);
export default function Skills() {
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "Compétences", path: "/competences" }]} />
      <PageIntro
        label="Compétences / Partir de l’usage"
        title="Les outils changent. Le besoin reste le point de départ."
      >
        <p>
          Une compétence prend son sens dans une situation concrète. Voici les
          domaines de mon profil et les exemples qui permettent de les
          comprendre.
        </p>
      </PageIntro>
      <div className="proof-list">
        {capabilities.map((c) => (
          <article key={c.number}>
            <h3>{c.label}</h3>
            <p>{c.example}</p>
            <Link className="text-link" href={c.href}>
              Voir le projet ↗
            </Link>
          </article>
        ))}
      </div>
      <div className="notice">
        <strong>Une pratique reliée aux missions</strong>
        <p>
          Ces domaines et outils figurent dans mon CV. Je les mobilise selon le
          besoin : campagnes, prospection, contenu, automatisation ou conception
          d’une solution métier. Les études de cas donnent le contexte.
        </p>
      </div>
      <div className="skill-list">
        {skillGroups.map((g) => (
          <article key={g.title}>
            <h3>{g.title}</h3>
            <div className="tag-list">
              {g.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="reading-grid">
        <h2>
          Et la technique
          <br />
          <em>de ce site ?</em>
        </h2>
        <div>
          <p>
            Ce site utilise Next.js, React, TypeScript, Tailwind CSS et MDX. Son
            développement est assisté par IA. Cette stack décrit le projet
            actuel ; elle ne prouve pas, à elle seule, une expérience
            professionnelle préalable sur ces technologies.
          </p>
          <Link href="/projets/site-personnel" className="text-link">
            Lire les choix de construction ↗
          </Link>
        </div>
      </div>
      <ContactStrip />
    </div>
  );
}
