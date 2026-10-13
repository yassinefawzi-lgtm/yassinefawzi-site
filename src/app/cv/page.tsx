import Link from "next/link";
import { profile, site, capabilities } from "@/content/site";
import { Breadcrumb, PageIntro } from "@/components/ui";
import { CvDownload, PrintButton } from "@/components/actions";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "CV — Growth Marketing & automatisation",
  "Le parcours professionnel de Yassine Fawzi : expériences, formation, compétences et réalisations. Version web accessible et imprimable.",
  "/cv",
);
export default function Cv() {
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "CV", path: "/cv" }]} />
      <PageIntro
        label="Parcours / Version web & impression"
        title="Un parcours. Plusieurs façons d’être utile."
      >
        <p>
          Retrouvez les éléments de mon profil dans une version conçue pour être
          lue, partagée ou imprimée.
        </p>
        <div className="button-row no-print">
          <PrintButton />
          {site.cvPdf ? (
            <CvDownload href={site.cvPdf} />
          ) : (
            <span className="tag">CV PDF original à ajouter</span>
          )}
        </div>
      </PageIntro>
      <article className="cv-sheet">
        <header className="cv-heading">
          <div>
            <p className="cv-name">{site.name}</p>
            <p className="cv-role">{site.role}</p>
          </div>
          <div className="cv-meta">
            {site.location}
            <br />
            <Link href="/contact">Contact via le site</Link>
            {site.email && (
              <>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </>
            )}
            <br />
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <br />
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              Profil LinkedIn ↗
            </a>
          </div>
        </header>
        <p>
          Profil à la croisée du marketing, de l’automatisation et des outils
          digitaux. Reconversion en Growth Marketing, expérience en alternance
          et missions indépendantes auprès d’entrepreneurs, de cabinets
          d’avocats et de PME.
        </p>
        <div className="notice">
          Cette version web reprend le CV fourni par Yassine. Le téléchargement
          donne accès au PDF original, sans modification.
        </div>
        <h2>Expériences</h2>
        {profile.experiences.map((e) => (
          <section className="timeline-item" key={e.title}>
            <span className="period">{e.period}</span>
            <h3>
              {e.title} · {e.organization}
            </h3>
            <p>{e.description}</p>
          </section>
        ))}
        <h2>Formation</h2>
        <h3>{profile.education.title}</h3>
        <p>{profile.education.details}</p>
        <h3 style={{ marginTop: 24 }}>{profile.previousEducation.title}</h3>
        <p>{profile.previousEducation.details}</p>
        <h2>Domaines d’intervention</h2>
        {capabilities.map((c) => (
          <section key={c.number} className="timeline-item">
            <h3>{c.label}</h3>
            <p>{c.example}</p>
          </section>
        ))}
        <h2>Quelques réalisations</h2>
        <ul>
          <li>
            <Link href="/projets/offres-de-reprise">
              Génération documentaire pour des offres de reprise.
            </Link>
          </li>
          <li>
            <Link href="/projets/organisation-wedding-planner">
              Organisation et suivi d’activité d’une wedding planner.
            </Link>
          </li>
          <li>
            <Link href="/projets/acquisition-cabinet-avocat">
              Accompagnement Google Ads d’un cabinet d’avocat.
            </Link>
          </li>
        </ul>
        <h2>Pour aller plus loin</h2>
        <p>Centres d’intérêt : {profile.interests.join(" · ")}.</p>
        <p>
          <a href={site.url}>{site.url}</a> ·{" "}
          <Link href="/projets">Études de cas</Link> ·{" "}
          <Link href="/contact">Contact</Link>
        </p>
      </article>
    </div>
  );
}
