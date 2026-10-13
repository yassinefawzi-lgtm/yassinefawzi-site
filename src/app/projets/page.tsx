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
      <PageIntro
        label="Portfolio / Du besoin à la réalisation"
        title="Chaque projet commence par une question."
      >
        <p>
          Des missions professionnelles et des explorations personnelles. Le
          contexte, la démarche et les limites sont aussi importants que la
          solution.
        </p>
      </PageIntro>
      <ProjectGallery projects={projects} />
      <ContactStrip />
    </div>
  );
}
