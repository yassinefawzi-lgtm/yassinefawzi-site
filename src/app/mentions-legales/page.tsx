import Link from "next/link";
import { Breadcrumb, PageIntro } from "@/components/ui";
import { legal, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Mentions légales",
  "Informations sur l’éditeur, la direction de publication et l’hébergement du site personnel de Yassine Fawzi.",
  "/mentions-legales",
  true,
);
export default function Legal() {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ name: "Mentions légales", path: "/mentions-legales" }]}
      />
      <PageIntro label="Informations / Cadre légal" title="Mentions légales." />
      <div className="legal-copy">
        <p>
          Conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
          la confiance dans l’économie numérique (LCEN), voici les informations
          relatives à l’éditeur et à l’hébergeur du site {site.url}.
        </p>
        <section>
          <h2>Éditeur du site</h2>
          <p>
            {site.name}, {legal.status}.
            {legal.siret && (
              <>
                <br />
                SIRET : {legal.siret}
              </>
            )}
            {legal.address && (
              <>
                <br />
                Adresse : {legal.address}
              </>
            )}
            {legal.vatExempt && (
              <>
                <br />
                TVA non applicable, article 293 B du Code général des impôts.
              </>
            )}
          </p>
          <p>
            Email : <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            Téléphone : <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </p>
        </section>
        <section>
          <h2>Direction de publication</h2>
          <p>Directeur de la publication : {legal.publicationDirector}.</p>
        </section>
        <section>
          <h2>Hébergement</h2>
          <p>
            {legal.host.name}
            <br />
            {legal.host.address}
            <br />
            <a href={legal.host.url} target="_blank" rel="noopener noreferrer">
              {legal.host.url.replace("https://", "")}
            </a>
          </p>
        </section>
        <section>
          <h2>Contenus et propriété intellectuelle</h2>
          <p>
            L’ensemble des textes, de la structure et des éléments graphiques du
            site est la propriété de {site.name}, sauf mention contraire. Toute
            reproduction ou réutilisation sans autorisation préalable est
            interdite. Les projets présentés ne contiennent aucune donnée
            confidentielle et les illustrations conceptuelles sont identifiées
            comme telles. Les noms d’outils et de services cités appartiennent à
            leurs titulaires respectifs.
          </p>
        </section>
        <section>
          <h2>Responsabilité et liens</h2>
          <p>
            Les informations publiées sont fournies à titre indicatif et peuvent
            être mises à jour à tout moment. Les liens vers des sites tiers sont
            proposés pour information ; leur contenu ne relève pas de la
            responsabilité de l’éditeur.
          </p>
        </section>
        <section>
          <h2>Données personnelles</h2>
          <p>
            Consultez la{" "}
            <Link href="/confidentialite">politique de confidentialité</Link>{" "}
            pour connaître les traitements réalisés, notamment via le formulaire
            de contact, et vos droits.
          </p>
        </section>
      </div>
    </div>
  );
}
