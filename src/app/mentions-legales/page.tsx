import { Breadcrumb, PageIntro } from "@/components/ui";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Mentions légales",
  "Informations sur l’éditeur et l’hébergement du site personnel de Yassine Fawzi. Document à compléter avant publication.",
  "/mentions-legales",
  true,
);
export default function Legal() {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ name: "Mentions légales", path: "/mentions-legales" }]}
      />
      <PageIntro
        label="Informations / Document de préparation"
        title="Mentions légales."
      />
      <div className="legal-copy">
        <div className="notice">
          <strong>Document à compléter avant publication.</strong> Le statut de
          l’éditeur, ses coordonnées légales et l’hébergement effectif ne sont
          pas encore confirmés.
        </div>
        <section>
          <h2>Éditeur du site</h2>
          <p>
            Nom : {site.name}. Domaine de référence : {site.url}.
          </p>
          <p>
            Statut juridique, adresse légale, coordonnées de contact, numéro
            d’immatriculation et TVA le cas échéant :{" "}
            <strong>à compléter selon la situation réelle</strong>.
          </p>
        </section>
        <section>
          <h2>Direction de publication</h2>
          <p>
            Responsable de publication :{" "}
            <strong>à confirmer par l’éditeur</strong>.
          </p>
        </section>
        <section>
          <h2>Hébergement</h2>
          <p>
            Hébergement envisagé : Vercel. Prestataire effectif, raison sociale,
            adresse et coordonnées :{" "}
            <strong>
              à renseigner après choix et configuration de l’hébergement
            </strong>
            .
          </p>
        </section>
        <section>
          <h2>Contenus et propriété intellectuelle</h2>
          <p>
            Les textes décrivent les informations communiquées par Yassine
            Fawzi. Les projets ne présentent aucune donnée confidentielle et les
            illustrations conceptuelles sont identifiées comme telles. Les noms
            d’outils et de services appartiennent à leurs titulaires respectifs.
          </p>
          <p>
            Les autorisations concernant les futurs portraits, captures et
            visuels clients doivent être vérifiées avant leur publication.
          </p>
        </section>
        <section>
          <h2>Données personnelles</h2>
          <p>
            Consultez la{" "}
            <a href="/confidentialite">politique de confidentialité</a> pour
            connaître les traitements prévus et les paramètres de mesure.
          </p>
        </section>
      </div>
    </div>
  );
}
