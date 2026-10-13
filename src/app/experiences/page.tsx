import { experimentConfig } from "@/content/experiments";
import { PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Atelier de variantes",
  "Prévisualisation des variantes éditoriales du site. Espace de travail non indexé.",
  "/experiences",
  true,
);
export default function Experiments() {
  return (
    <div className="container">
      <PageIntro
        label="Atelier / Prévisualisation non indexée"
        title="Comparer les idées avant de les tester."
      >
        <p>
          Ces variantes sont des propositions éditoriales. Elles ne sont pas
          distribuées aléatoirement aux visiteurs et ne produisent aucune
          statistique.
        </p>
      </PageIntro>
      <div className="skill-list">
        {Object.entries(experimentConfig.variants).map(([key, title]) => (
          <article key={key}>
            <span className="tag">
              {key === "control" ? "Version de référence" : "Variante"}
            </span>
            <h2 style={{ fontSize: 35, marginTop: 25 }}>{title}</h2>
            <p style={{ marginTop: 25 }}>État : prévisualisation uniquement.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
