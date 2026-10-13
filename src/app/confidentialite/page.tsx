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
        <div className="notice">
          Document de préparation à valider avant ouverture au public.
          Coordonnées du responsable, bases légales applicables, durées
          retenues, prestataires et modalités de transfert doivent être
          confirmés.
        </div>
        <section>
          <h2>Responsable du traitement</h2>
          <p>
            {site.name}. Adresse et contact pour l’exercice des droits :{" "}
            <strong>à compléter</strong>.
          </p>
        </section>
        <section>
          <h2>Demandes de contact</h2>
          <p>
            Le formulaire demande un nom, un email, le type de demande et un
            message pour permettre une réponse. Une fois configuré, le serveur
            transmet ces informations au prestataire d’envoi Resend et à la
            boîte du destinataire. Aucune base de données de contacts n’est
            intégrée au site.
          </p>
          <p>
            La base légale doit être précisée selon le type de demande et
            l’activité réelle. Durée de conservation des échanges et gestion des
            sauvegardes :{" "}
            <strong>
              à définir et appliquer dans la messagerie et chez les prestataires
            </strong>
            .
          </p>
        </section>
        <section>
          <h2>Protection antispam</h2>
          <p>
            Une vérification Cloudflare Turnstile peut être chargée à la demande
            du visiteur pour protéger le formulaire. Elle implique une
            communication avec Cloudflare. Le serveur vérifie le jeton, l’hôte
            et l’action avant de transmettre un message.
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
            boutons, le téléchargement du CV et les envois confirmés par le
            service de messagerie. Les noms, emails et textes du formulaire ne
            sont pas inclus dans ces événements. Les campagnes UTM sont limitées
            à une liste d’identifiants autorisés.
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
            Selon le traitement, vous pouvez disposer de droits d’accès, de
            rectification, d’effacement, de limitation, d’opposition ou de
            portabilité. Les coordonnées permettant de les exercer doivent être
            ajoutées avant publication. Vous pouvez également adresser une
            réclamation à la CNIL.
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
