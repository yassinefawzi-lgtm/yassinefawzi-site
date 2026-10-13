import Image from "next/image";
import type { Project } from "@/content/projects";
export function ProjectArt({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (project.image)
    return (
      <div className="project-art image-art">
        <Image
          src={project.image}
          alt={project.imageAlt || project.subtitle}
          fill
          sizes={
            large
              ? "(max-width: 900px) 100vw, 1200px"
              : "(max-width: 700px) 100vw, 50vw"
          }
        />
      </div>
    );
  return (
    <div
      className={`project-art art-${project.visual} ${large ? "art-large" : ""}`}
      aria-label={`Illustration conceptuelle : ${project.subtitle}`}
      role="img"
    >
      <span className="art-note">ILLUSTRATION DU PRINCIPE</span>
      {project.visual === "document" ? (
        <div className="doc-scene">
          <div className="data-node">
            <span>01 / INFORMATIONS</span>
            <i />
            <i />
            <i />
            <b>Données structurées</b>
          </div>
          <div className="connector">→</div>
          <div className="paper">
            <span>OFFRE DE REPRISE</span>
            <b>
              Du dossier
              <br />
              au document.
            </b>
            <i />
            <i />
            <i />
            <div className="paper-seal">YF / AUTO</div>
          </div>
        </div>
      ) : project.visual === "planner" ? (
        <div className="planner-scene">
          <div className="planner-head">
            <span>Le fil de l’événement</span>
            <b>✳</b>
          </div>
          <div className="planner-cols">
            {["Préparer", "Coordonner", "Suivre"].map((s, i) => (
              <div key={s}>
                <span>{s}</span>
                <div className={`planner-item item-${i}`}>
                  {["Informations", "Échéances", "Relances"][i]}
                  <i />
                  <i />
                </div>
              </div>
            ))}
          </div>
          <span className="planner-foot">Chaque détail, à sa place.</span>
        </div>
      ) : project.visual === "ads" || project.visual === "campaign" ? (
        <div className="ads-scene">
          <span className="ads-ring ring-one" />
          <span className="ads-ring ring-two" />
          <span className="ads-ring ring-three" />
          <div className="ads-center">↗</div>
          <div className="ads-label label-one">Le bon périmètre</div>
          <div className="ads-label label-two">Le bon rythme</div>
          <span className="ads-bottom">OBJECTIF → DEMANDES QUALIFIÉES</span>
        </div>
      ) : project.visual === "jobs" ? (
        <div className="jobs-scene">
          <span>SOURCES → TRI → PERTINENCE</span>
          <div>
            <i />
            <i />
            <i />
          </div>
          <b>
            Moins de bruit.
            <br />
            Plus de sens.
          </b>
        </div>
      ) : project.visual === "rent" ? (
        <div className="rent-scene">
          <span>DONNÉES PUBLIQUES / CONCEPT</span>
          <div className="house-mark">⌂</div>
          <b>
            Comprendre
            <br />
            son loyer.
          </b>
        </div>
      ) : (
        <div className="site-scene">
          <span>UN SITE. UN TERRAIN D’ESSAI.</span>
          <b>
            yf<span>.</span>
          </b>
          <div>CONSTRUIRE ↗ MESURER ↗ APPRENDRE</div>
        </div>
      )}
    </div>
  );
}
