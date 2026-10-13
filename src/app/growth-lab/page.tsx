import Link from "next/link";
import { experiments } from "@/content/experiments";
import { Breadcrumb, ContactStrip, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Growth Lab — expérimenter et documenter",
  "Le laboratoire marketing de Yassine Fawzi : hypothèses, protocoles et apprentissages en SEO, acquisition, expérience utilisateur et performance.",
  "/growth-lab",
);
export default function Lab() {
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "Growth Lab", path: "/growth-lab" }]} />
      <PageIntro
        label="Growth Lab / Le site comme terrain d’essai"
        title="Une hypothèse n’est pas encore un résultat."
      >
        <p>
          Un espace pour tester des idées, observer leurs effets et documenter
          leurs limites. Les premières expériences sont en préparation.
        </p>
      </PageIntro>
      <div className="lab-stats">
        <div>
          <span>Expériences publiées</span>
          <strong>Aucune pour l’instant</strong>
          <p>Les protocoles ci-dessous sont des pistes.</p>
        </div>
        <div>
          <span>Performance du site</span>
          <strong>À mesurer</strong>
          <p>Objectif Lighthouse 95+, pas un score constaté.</p>
        </div>
        <div>
          <span>Mesure d’audience</span>
          <strong>Désactivée par défaut</strong>
          <p>Activation après configuration et consentement.</p>
        </div>
      </div>
      <h2>Le carnet d’expériences.</h2>
      <div style={{ marginTop: 35 }}>
        {experiments.map((e) => (
          <article className="experiment-card" key={e.id}>
            <span>{e.id}</span>
            <div>
              <span className="tag">{e.topic}</span>
              <h3>{e.title}</h3>
              <p>{e.hypothesis}</p>
            </div>
            <div className="metric">
              <span>Mesure envisagée</span>
              <p>{e.metric}</p>
              <p>{e.status}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="reading-grid">
        <h2>
          Le protocole
          <br />
          <em>avant le verdict.</em>
        </h2>
        <div>
          <p>
            Chaque expérience doit préciser son hypothèse, une mesure
            principale, son public et sa période d’observation. Une variante
            visuelle ne suffit pas à constituer un test A/B.
          </p>
          <p>
            Avec peu de trafic, les observations qualitatives peuvent être plus
            utiles qu’un pourcentage fragile. Un résultat incertain sera
            présenté comme tel.
          </p>
          <Link href="/projets/site-personnel" className="text-link">
            Découvrir la construction du site ↗
          </Link>
        </div>
      </section>
      <ContactStrip />
    </div>
  );
}
