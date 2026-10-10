import { projects } from "../data/projects";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

/** Projects — a responsive grid of ProjectCards, driven entirely by data. */
export default function Projects() {
  const copy = sections.projects;

  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="shell">
        <SectionHeading
          id="projects"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
          lead={copy.lead}
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
