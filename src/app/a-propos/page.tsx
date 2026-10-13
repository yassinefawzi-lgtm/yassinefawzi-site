import Link from "next/link";
import { profile, site } from "@/content/site";
import { Breadcrumb, ContactStrip, JsonLd, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "À propos — un parcours vers le Growth Marketing",
  "Reconversion, alternance chez GR.APP&CO et missions indépendantes : découvrez le parcours et la manière de travailler de Yassine Fawzi en Normandie.",
  "/a-propos",
);
export default function About() {
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "À propos", path: "/a-propos" }]} />
      <PageIntro
        label="À propos / Le parcours derrière les projets"
        title="Yassine Fawzi, chargé de marketing digital"
      >
        <p>
          Je suis Yassine Fawzi. Je travaille sur les sujets qui demandent de
          comprendre un métier, de relier plusieurs disciplines et de produire
          quelque chose d’utile.
        </p>
      </PageIntro>
      <div className="reading-grid">
        <h2>
          Une reconversion,
          <br />
          <em>puis du terrain.</em>
        </h2>
        <div>
          <p>
            Après une expérience de chargé d’études chez Fiber Academy à
            Colombelles, j’ai choisi de me reconvertir dans le marketing
            digital. J’ai suivi le parcours Marketing digital & Growth Hacking
            de Rocket School Lyon entre 2022 et 2024, avec une alternance chez
            GR.APP&CO en 2022–2023.
          </p>
          <p>
            Depuis 2023, mes missions indépendantes m’ont amené à travailler
            avec des entrepreneurs, des cabinets d’avocats et des PME. Des
            besoins différents, avec un même fil conducteur : chercher une
            réponse opérationnelle.
          </p>
          <p>
            Je m’intéresse particulièrement aux équipes qui associent marketing,
            technologie et automatisation. Je privilégie les opportunités dans
            la région Caen–Rouen, tout en restant ouvert à des projets au-delà
            de la Normandie.
          </p>
        </div>
      </div>
      <div className="reading-grid">
        <h2>Mon parcours.</h2>
        <div>
          {profile.experiences.map((e) => (
            <article className="timeline-item" key={e.title}>
              <span className="period">{e.period}</span>
              <h3>{e.title}</h3>
              <p>
                <strong>{e.organization}</strong>
              </p>
              <p>{e.description}</p>
            </article>
          ))}
          <article className="timeline-item">
            <h3>{profile.education.title}</h3>
            <p>{profile.education.details}</p>
          </article>
          <article className="timeline-item">
            <h3>{profile.previousEducation.title}</h3>
            <p>{profile.previousEducation.details}</p>
          </article>
        </div>
      </div>
      <div className="reading-grid">
        <h2>
          Une manière
          <br />
          <em>de travailler.</em>
        </h2>
        <div>
          <p>
            <strong>Le besoin avant l’outil.</strong> Comprendre le contexte et
            les contraintes pour choisir une réponse adaptée.
          </p>
          <p>
            <strong>Une première version concrète.</strong> Mettre l’idée à
            l’épreuve d’un usage, puis ajuster le périmètre.
          </p>
          <p>
            <strong>Des preuves à leur juste place.</strong> Distinguer une
            intention, une réalisation et un résultat mesuré. Documenter les
            limites fait partie du travail.
          </p>
          <Link href="/cv" className="text-link">
            Consulter mon CV ↗
          </Link>
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${site.url}/a-propos`,
          mainEntity: {
            "@type": "Person",
            "@id": `${site.url}/#person`,
            name: site.name,
            url: site.url,
            description: site.description,
            ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
          },
        }}
      />
      <ContactStrip />
    </div>
  );
}
