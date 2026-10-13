import { Breadcrumb, PageIntro } from "@/components/ui";
import { CookiePreferencesButton } from "@/components/consent";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Confidentialité & cookies",
  "Fonctionnement du formulaire, mesure d’audience et gestion des préférences de confidentialité du site Yassine Fawzi.",
  "/confidentialite",
  true,
);
export default function Privacy() {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ name: "Confidentialité", path: "/confidentialite" }]}
      />
      <PageIntro
        label="Confidentialité / Des choix explicites"
        title="Vos données, avec mesure."
      />
      <div className="legal-copy">
        <section>
          <h2>Responsable du traitement</h2>
          <p>
            {site.name}, entrepreneur individuel. Contact pour toute question ou
            pour exercer vos droits :{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </section>
        <section>
          <h2>Demandes de contact</h2>
          <p>
            Le formulaire demande un nom, un email, le type de demande et un
            message, uniquement pour pouvoir vous répondre. Les messages sont
            reçus et stockés par Netlify Forms, service de l’hébergeur du site
            (Netlify, Inc., États-Unis), puis transmis par email à {site.name}.
            Aucune autre base de contacts n’est constituée et les données ne
            sont ni revendues ni utilisées à des fins publicitaires.
          </p>
          <p>
            Base légale : les mesures précontractuelles prises à votre demande
            (mission, recrutement) ou l’intérêt légitime à répondre aux
            sollicitations reçues. Les messages sont conservés au maximum trois
            ans après le dernier échange, puis supprimés.
          </p>
          <p>
            Netlify étant établi aux États-Unis, ce transfert est encadré par
            les garanties prévues par le RGPD (clauses contractuelles types de
            la Commission européenne).
          </p>
        </section>
        <section>
          <h2>Protection antispam</h2>
          <p>
            Le formulaire comporte un champ piège invisible pour limiter les
            envois automatisés. Netlify applique également un filtrage antispam
            aux messages reçus. Aucun service antispam tiers n’est chargé dans
            votre navigateur.
          </p>
        </section>
        <section>
          <h2>Mesure d’audience et publicité</h2>
          <p>
            Les outils de mesure sont désactivés tant qu’aucun identifiant de
            conteneur n’est configuré. Après configuration, Google Tag Manager
            n’est chargé que si le visiteur accepte au moins une finalité. Les
            autorisations de mesure d’audience et de publicité sont distinctes.
          </p>
          <p>
            Les événements prévus portent sur les pages, les projets, les
            boutons, le téléchargement du CV et les envois confirmés du
            formulaire. Les noms, emails et textes du formulaire ne sont pas
            inclus dans ces événements. Les campagnes UTM sont limitées à une
            liste d’identifiants autorisés.
          </p>
          <p>
            Le conteneur GTM devra respecter ces choix pour chaque tag. Liste
            effective des tags, prestataires, durées des cookies et éventuels
            transferts : <strong>à compléter avant leur activation</strong>.
          </p>
        </section>
        <section>
          <h2>Vos préférences</h2>
          <p>
            Les choix sont conservés dans le stockage local du navigateur
            pendant six mois au maximum. Ils peuvent être modifiés à tout
            moment. Le retrait d’une autorisation recharge la page afin
            d’arrêter les scripts précédemment chargés et tente de supprimer
            leurs cookies accessibles sur le domaine.
          </p>
          <p>
            <CookiePreferencesButton />
          </p>
        </section>
        <section>
          <h2>Vos droits</h2>
          <p>
            Vous disposez de droits d’accès, de rectification, d’effacement, de
            limitation, d’opposition et, le cas échéant, de portabilité. Pour
            les exercer, écrivez à{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez
            également adresser une réclamation à la CNIL (www.cnil.fr).
          </p>
          <p>
            Référence :{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi"
              target="_blank"
              rel="noopener noreferrer"
            >
              informations de la CNIL sur les cookies et traceurs
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
