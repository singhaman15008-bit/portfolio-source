/**
 * ProjectCard — problem, description, stack, features and links.
 *
 * Link rule: when `repo`/`demo` are null the card prints the plain sentence
 * "Repository and demo coming soon." as text. It is never rendered as a link
 * and no placeholder URL is invented.
 */
export default function ProjectCard({ project }) {
  const hasLinks = Boolean(project.repo || project.demo);

  return (
    <article className="project-card">
      <header className="project-card__head">
        <p className="project-card__type">{project.type}</p>
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
      </header>

      <div className="project-card__body">
        <div className="project-card__block">
          <h4 className="project-card__label">The problem</h4>
          <p>{project.problem}</p>
        </div>

        <div className="project-card__block">
          <h4 className="project-card__label">What it is</h4>
          <p>{project.description}</p>
        </div>

        <div className="project-card__block">
          <h4 className="project-card__label">Implemented features</h4>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-card__block">
          <h4 className="project-card__label">Technology stack</h4>
          <ul className="chip-list chip-list--tight">
            {project.stack.map((tech) => (
              <li className="chip chip--mono" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="project-card__foot">
        {hasLinks ? (
          <div className="project-card__links">
            {project.repo ? (
              <a className="text-link" href={project.repo} target="_blank" rel="noreferrer noopener">
                View repository
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : null}
            {project.demo ? (
              <a className="text-link" href={project.demo} target="_blank" rel="noreferrer noopener">
                Live demo
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : null}
          </div>
        ) : (
          <p className="project-card__pending">Repository and demo coming soon.</p>
        )}

        {project.note ? <p className="project-card__note">{project.note}</p> : null}
      </footer>
    </article>
  );
}
