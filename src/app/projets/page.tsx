import { projects } from "@/content/projects";
import { ProjectGallery } from "@/components/projects";
import { Breadcrumb, ContactStrip, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Projets & études de cas",
  "Acquisition, automatisation et outils métiers : découvrez les projets de Yassine Fawzi, leur contexte et les solutions envisagées ou développées.",
  "/projets",
);
export default function ProjectsPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "Projets", path: "/projets" }]} />
      <PageIntro label="Portfolio" title="Missions et projets personnels">
        <p>
          Campagnes publicitaires, génération documentaire et organisation
          d’activité : retrouvez mes missions clients et mes projets personnels.
        </p>
      </PageIntro>
      <ProjectGallery projects={projects} />
      <ContactStrip />
    </div>
  );
}
