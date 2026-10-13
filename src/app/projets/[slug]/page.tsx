import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumb, ContactStrip, PageIntro } from "@/components/ui";
import { ProjectArt } from "@/components/project-art";
import { ProjectView, ShareButton } from "@/components/actions";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p ? pageMetadata(p.subtitle, p.summary, `/projets/${slug}`) : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div className="container">
      <ProjectView slug={project.slug} />
      <Breadcrumb
        items={[
          { name: "Projets", path: "/projets" },
          { name: project.subtitle, path: `/projets/${slug}` },
        ]}
      />
      <PageIntro
        label={`Étude de cas / ${project.category}`}
        title={project.title}
      >
        <p>{project.summary}</p>
      </PageIntro>
      <div className="project-hero">
        <div className="tag-list">
          <span className="tag">{project.status}</span>
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <ProjectArt project={project} large />
      </div>
      <div className="case-layout">
        <aside className="case-aside">
          <div>
            <h2>Mon rôle</h2>
            <p>{project.role}</p>
          </div>
          <div>
            <h2>Outils & méthode</h2>
            <p>{project.tools.join(" · ")}</p>
          </div>
          <ShareButton title={project.subtitle} />
        </aside>
        <div className="case-content">
          <section>
            <h2>Le contexte.</h2>
            <p>{project.context}</p>
          </section>
          <section>
            <h2>Le problème à résoudre.</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <h2>Les objectifs.</h2>
            <ul>
              {project.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>La démarche.</h2>
            <ol>
              {project.approach.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2>La solution.</h2>
            <p>{project.solution}</p>
          </section>
          <section>
            <h2>Les résultats disponibles.</h2>
            <p>{project.results}</p>
          </section>
          <section>
            <h2>Les enseignements.</h2>
            <p>{project.lessons}</p>
          </section>
          <aside className="notice">
            <strong>Une étude de cas qui reste à enrichir</strong>
            <ul>
              {project.pending.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p>
              Le visuel est une illustration conceptuelle, pas une capture du
              produit. Aucune donnée confidentielle n’est présentée.
            </p>
          </aside>
        </div>
      </div>
      <Link href={`/projets/${next.slug}`} className="next-project">
        <span>Continuer l’exploration</span>
        <strong>{next.subtitle} ↗</strong>
      </Link>
      <ContactStrip />
    </div>
  );
}
