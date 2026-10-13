"use client";
import Link from "next/link";
import { useState } from "react";
import { categories, type Category, type Project } from "@/content/projects";
import { ProjectArt } from "./project-art";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        className="project-card-link"
        href={`/projets/${project.slug}`}
        aria-label={`${project.subtitle} — lire l’étude de cas`}
      >
        <ProjectArt project={project} />
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span aria-hidden="true">↗</span>
        </div>
        <h3>{project.subtitle}</h3>
        <p>{project.summary}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Category>("Tous");
  const filtered = projects.filter(
    (p) => selected === "Tous" || p.category === selected,
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrer les projets">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            aria-pressed={selected === category}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        {filtered.length} projet{filtered.length > 1 ? "s" : ""} · {selected}
      </p>
      <div className="project-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
