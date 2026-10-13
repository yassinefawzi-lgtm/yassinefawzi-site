import { site } from "@/content/site";
import { contactConfigured } from "@/lib/contact";
import { ContactForm } from "@/components/contact-form";
import { ExternalLink } from "@/components/actions";
import { Breadcrumb, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Contact — parlons de votre besoin",
  "Une opportunité de recrutement ou un projet d’acquisition, d’automatisation ou d’outil métier ? Contactez Yassine Fawzi.",
  "/contact",
);
export default function Contact() {
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "Contact", path: "/contact" }]} />
      <PageIntro
        label="Contact / Le début d’une conversation"
        title="Parlons de ce que vous voulez faire avancer."
      >
        <p>
          Une équipe à rejoindre, un processus à simplifier ou un projet à
          construire. Quelques lignes suffisent pour poser le contexte.
        </p>
      </PageIntro>
      <div className="contact-layout">
        <aside className="contact-aside">
          <h2>
            Un premier échange,
            <br />
            <em>sans grand discours.</em>
          </h2>
          <p>
            Décrivez votre situation, l’objectif et les contraintes que vous
            connaissez déjà. Nous pourrons ensuite préciser ce qui serait utile.
          </p>
          <p>
            {site.location}
            <br />
            Opportunités professionnelles et missions.
          </p>
          {site.email ? (
            <a href={`mailto:${site.email}`}>{site.email}</a>
          ) : (
            <p className="notice">
              Coordonnées directes à compléter avant la mise en ligne.
            </p>
          )}
          {site.linkedin && (
            <ExternalLink
              href={site.linkedin}
              label="Retrouver mon profil LinkedIn"
              network="linkedin"
            />
          )}
        </aside>
        <ContactForm configured={contactConfigured()} />
      </div>
    </div>
  );
}
