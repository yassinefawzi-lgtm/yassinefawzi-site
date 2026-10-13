import Link from "next/link";
import Image from "next/image";
import { site, capabilities } from "@/content/site";
import { projects } from "@/content/projects";
import { experimentConfig } from "@/content/experiments";
import { pageMetadata } from "@/lib/seo";
import { Arrow, ContactStrip, Eyebrow } from "@/components/ui";
import { ProjectCard } from "@/components/projects";
import { TrackedLink } from "@/components/actions";
export const metadata = pageMetadata(
  "Growth Marketing, automatisation & IA",
  site.description,
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-top">
          <Eyebrow>Yassine Fawzi / Growth & solutions digitales</Eyebrow>
          <span className="location">Projet de retour · Caen — Rouen</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            {site.photo && (
              <div className="hero-person">
                <Image
                  src={site.photo}
                  alt={site.photoAlt}
                  width={48}
                  height={48}
                  priority
                  sizes="48px"
                />
                <span>
                  Yassine Fawzi<small>Chargé de marketing digital</small>
                </span>
              </div>
            )}
            <h1>
              {experimentConfig.enabled ? (
                experimentConfig.variants[experimentConfig.variant]
              ) : (
                <>
                  Des idées.
                  <br />
                  Des solutions.
                  <br />
                  <em>Du concret.</em>
                </>
              )}
            </h1>
            <p>
              J’associe marketing, automatisation et outils digitaux pour passer
              d’un besoin métier à une solution qui prend forme.
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
              Explorer mon parcours & mon CV <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-object">
            <div className="object-label">
              <span>LE BESOIN COMME POINT DE DÉPART</span>
              <span>↗</span>
            </div>
            <div className="orbit-system" aria-hidden="true">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="orbit orbit-c" />
              <div className="orbit-core">
                yf<span>.</span>
              </div>
              <span className="orbit-chip chip-marketing">Marketing</span>
              <span className="orbit-chip chip-tech">Technologie</span>
              <span className="orbit-chip chip-human">Métier</span>
              <span className="orbit-dot" />
            </div>
            <div className="object-footer">
              <span>
                COMPRENDRE
                <br />
                CONSTRUIRE
                <br />
                AMÉLIORER
              </span>
              <span className="asterisk">✳</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="availability">
            <i />
            {site.availability}
          </span>
          <a href="#selection">
            Explorer la suite <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section className="intro-band">
        <div className="container intro-band-inner">
          <p>
            Un profil à la croisée
            <br />
            <strong>du marketing et de la fabrication.</strong>
          </p>
          <p>
            Une campagne à lancer. Un processus à simplifier. Un outil à
            imaginer. J’aime comprendre ce qui bloque, puis mettre les mains
            dans la solution.
          </p>
          <Link
            href="/a-propos"
            className="round-link"
            aria-label="Découvrir mon parcours"
          >
            ↗
          </Link>
        </div>
      </section>
      <section className="section container" id="selection">
        <div className="section-heading">
          <div>
            <Eyebrow>01 / Sélection de projets</Eyebrow>
            <h2>
              Des besoins réels.
              <br />
              <em>Des réponses sur mesure.</em>
            </h2>
          </div>
          <Link href="/projets" className="text-link">
            Tous les projets <Arrow />
          </Link>
        </div>
        <div className="project-grid">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          <article className="project-invitation">
            <span className="asterisk">✳</span>
            <div>
              <p className="eyebrow">La suite se construit</p>
              <h3>
                Le prochain problème
                <br />à résoudre ?
              </h3>
              <p>
                Une équipe à rejoindre, un projet à débloquer ou une idée à
                mettre à l’épreuve.
              </p>
              <Link href="/contact" className="text-link">
                Parlons-en <Arrow />
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="expertise-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <Eyebrow>02 / Ce que je peux apporter</Eyebrow>
              <h2>
                Relier la réflexion
                <br />
                <em>à l’exécution.</em>
              </h2>
            </div>
            <p className="section-aside">
              Pas une collection d’outils.
              <br />
              Une façon de résoudre des problèmes.
            </p>
          </div>
          <div className="capabilities">
            {capabilities.map((c) => (
              <article key={c.number}>
                <span className="cap-number">{c.number}</span>
                <p className="eyebrow">{c.label}</p>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <Link href={c.href}>
                  Voir un exemple <Arrow />
                </Link>
              </article>
            ))}
          </div>
          <Link href="/competences" className="text-link skills-link">
            Explorer mes compétences et outils <Arrow />
          </Link>
        </div>
      </section>
      <section className="section container about-split">
        <div className="portrait-frame">
          {site.photo ? (
            <Image
              src={site.photo}
              alt={site.photoAlt}
              fill
              sizes="(max-width: 700px) 100vw, 40vw"
            />
          ) : (
            <>
              <span className="portrait-monogram">
                YF<span>.</span>
              </span>
              <span className="portrait-caption">
                Yassine Fawzi
                <br />
                <small>Portrait personnel à ajouter</small>
              </span>
            </>
          )}
        </div>
        <div>
          <Eyebrow>03 / Derrière les projets</Eyebrow>
          <h2>
            Curieux par nature.
            <br />
            <em>Pragmatique par choix.</em>
          </h2>
          <p>
            Ma reconversion vers le Growth Marketing m’a donné une direction :
            comprendre comment le marketing et la technologie peuvent répondre à
            des problèmes concrets.
          </p>
          <p>
            Après ma formation à Rocket School et une alternance chez GR.APP&CO,
            j’ai réalisé des missions auprès d’entrepreneurs, de cabinets
            d’avocats et de PME. Chaque contexte me donne une nouvelle occasion
            d’apprendre et de construire.
          </p>
          <Link href="/a-propos" className="text-link">
            Un peu plus sur moi <Arrow />
          </Link>
        </div>
      </section>
      <section className="container approach-section">
        <Eyebrow>04 / Ma façon d’avancer</Eyebrow>
        <div className="approach-grid">
          {[
            [
              "Comprendre",
              "Le besoin, le contexte et les contraintes avant de choisir un outil.",
            ],
            [
              "Construire",
              "Une réponse opérationnelle, avec un périmètre et des choix explicites.",
            ],
            [
              "Améliorer",
              "Observer l’usage, mesurer ce qui peut l’être et ajuster.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1} →</span>
              <h3>{title}.</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="lab-teaser container">
        <div>
          <Eyebrow>05 / Growth Lab</Eyebrow>
          <h2>
            Ici, les idées passent
            <br />
            <em>à l’épreuve du réel.</em>
          </h2>
          <p>
            Ce site est aussi mon laboratoire. SEO, expérience utilisateur,
            acquisition : un espace pour poser des hypothèses et documenter ce
            que j’apprends.
          </p>
          <Link href="/growth-lab" className="button button-light">
            Entrer dans le laboratoire <Arrow />
          </Link>
        </div>
        <div className="lab-log">
          <div>
            <span className="status-dot" /> CARNET D’EXPÉRIMENTATION
          </div>
          <p>
            <span>01</span> Poser une hypothèse <b>↗</b>
          </p>
          <p>
            <span>02</span> Définir une mesure <b>↗</b>
          </p>
          <p>
            <span>03</span> Tirer un enseignement <b>↗</b>
          </p>
          <small>
            Premiers protocoles en préparation.
            <br />
            Aucun résultat n’est encore publié.
          </small>
        </div>
      </section>
      <div className="container">
        <ContactStrip />
      </div>
    </>
  );
}
