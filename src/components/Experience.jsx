import { experience } from "../data/experience";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";

/**
 * Experience — internships and practical learning.
 * Every card carries a `kind` badge so a virtual internship is never mistaken
 * for employment. Future jobs slot in as another entry in experience.js.
 */
export default function Experience() {
  const copy = sections.experience;

  return (
    <section className="section section--alt" id="experience" aria-labelledby="experience-heading">
      <div className="shell">
        <SectionHeading
          id="experience"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
          lead={copy.lead}
        />

        <ol className="timeline">
          {experience.map((entry) => (
            <li className="timeline__item" key={entry.id}>
              <article className="entry">
                <div className="entry__meta">
                  <span className="badge badge--kind">{entry.kind}</span>
                  <p className="entry__dates">{entry.dateLabel}</p>
                  {entry.duration ? (
                    <p className="entry__duration">{entry.duration}</p>
                  ) : null}
                </div>

                <div className="entry__main">
                  <h3 className="entry__title">{entry.title}</h3>
                  <p className="entry__org">{entry.organisations}</p>
                  <p className="entry__mode">{entry.mode}</p>
                  <p className="entry__summary">{entry.summary}</p>

                  {entry.highlights?.length ? (
                    <ul className="feature-list feature-list--tight">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="entry__foot">
                    {entry.credentialId ? (
                      <p className="entry__id">
                        <span className="entry__id-label">Certificate ID</span>
                        <code>{entry.credentialId}</code>
                      </p>
                    ) : null}

                    {entry.certificate ? (
                      <a
                        className="text-link"
                        href={entry.certificate}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        View certificate
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <p className="section-note">
          Roles and internships added later appear here automatically — virtual internships,
          courses and independent projects are labelled separately from employment.
        </p>
      </div>
    </section>
  );
}
