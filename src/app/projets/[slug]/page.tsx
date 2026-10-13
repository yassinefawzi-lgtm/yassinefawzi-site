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
          {project.tools.length > 0 && (
            <div>
              <h2>Outils</h2>
              <p>{project.tools.join(" · ")}</p>
            </div>
          )}
          <ShareButton title={project.subtitle} />
        </aside>
        <div className="case-content">
          <section>
            <h2>Le contexte.</h2>
            <p>{project.context}</p>
          </section>
          <section>
            <h2>
              {project.status === "Concept de service" ||
              project.status === "Projet personnel"
                ? "Le projet"
                : "La mission"}
            </h2>
            <p>{project.solution}</p>
          </section>
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
