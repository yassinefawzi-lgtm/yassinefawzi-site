import Link from "next/link";
import Image from "next/image";
import { site, capabilities } from "@/content/site";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { Arrow, ContactStrip, Eyebrow } from "@/components/ui";
import { ProjectCard } from "@/components/projects";
import { TrackedLink } from "@/components/actions";
export const metadata = pageMetadata(
  `${site.name} — ${site.role}`,
  site.description,
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero container home-intro">
        <div className="hero-top">
          <Eyebrow>{site.name}</Eyebrow>
          <span className="location">{site.location}</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <h1>{site.role}</h1>
            <p>
              Je gère des campagnes Google Ads et Instagram et conçois des
              outils pour automatiser le travail quotidien. Mes missions
              concernent des cabinets d’avocats, des restaurants et des
              entrepreneurs.
            </p>
            <div className="button-row">
              <TrackedLink
                href="/projets"
                label="hero_projects"
                className="button"
              >
                Découvrir mes projets <Arrow />
              </TrackedLink>
              <TrackedLink
                href="/contact"
                label="hero_contact"
                className="button button-outline"
              >
                Me contacter <Arrow />
              </TrackedLink>
            </div>
            <Link href="/cv" className="cv-link">
              Consulter mon CV <Arrow />
            </Link>
          </div>
          <div className="home-portrait">
            <Image
              src={site.photo}
              alt={site.photoAlt}
              width={1200}
              height={1200}
              priority
              sizes="(max-width: 800px) 70vw, 340px"
            />
          </div>
        </div>
        <p className="availability">{site.availability}</p>
      </section>
      <section className="section container" id="selection">
        <div className="section-heading">
          <h2>Missions réalisées</h2>
          <Link href="/projets" className="text-link">
            Tous les projets <Arrow />
          </Link>
        </div>
        <div className="project-grid home-projects">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>
      <section className="expertise-section">
        <div className="container section">
          <div className="section-heading">
            <h2>Mes domaines d’intervention</h2>
          </div>
          <div className="capabilities">
            {capabilities.map((c) => (
              <article key={c.number}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <Link href={c.href}>
                  Voir le projet <Arrow />
                </Link>
              </article>
            ))}
          </div>
          <Link href="/competences" className="text-link skills-link">
            Compétences et outils <Arrow />
          </Link>
        </div>
      </section>
      <section className="section container home-background">
        <h2>Mon parcours en marketing digital</h2>
        <div>
          <p>
            Formé à Rocket School Lyon entre 2022 et 2024, j’ai travaillé en
            alternance chez GR.APP&amp;CO sur la prospection B2B, les campagnes
            publicitaires et la rédaction d’articles SEO.
          </p>
          <p>
            Depuis 2023, je réalise des missions indépendantes en acquisition et
            en conception d’outils métiers. Je recherche également des
            opportunités à Caen et à Rouen.
          </p>
          <Link href="/a-propos" className="text-link">
            Parcours et formation <Arrow />
          </Link>
        </div>
      </section>
      <div className="container">
        <ContactStrip />
      </div>
    </>
  );
}
