import { education, priorEducation } from "../data/education";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";

/** Education — current degree with coursework, plus prior qualifications. */
export default function Education() {
  const copy = sections.education;

  return (
    <section className="section section--alt" id="education" aria-labelledby="education-heading">
      <div className="shell">
        <SectionHeading
          id="education"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
        />

        <div className="education__list">
          {education.map((entry) => (
            <article className="edu-card edu-card--primary" key={entry.id}>
              <div className="edu-card__head">
                <div>
                  <p className="edu-card__status">{entry.status}</p>
                  <h3 className="edu-card__degree">{entry.degree}</h3>
                  <p className="edu-card__institution">{entry.institution}</p>
                </div>
                <p className="edu-card__period">{entry.period}</p>
              </div>

              {entry.result ? (
                <p className="edu-card__result">{entry.result}</p>
              ) : (
                <p className="edu-card__result edu-card__result--muted">
                  No CGPA published — nothing unverified is listed here.
                </p>
              )}

              {entry.coursework?.length ? (
                <div className="edu-card__coursework">
                  <h4 className="project-card__label">Relevant coursework</h4>
                  <ul className="chip-list chip-list--tight">
                    {entry.coursework.map((course) => (
                      <li className="chip" key={course}>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}

          <div className="edu-card edu-card--stack">
            <h3 className="edu-card__degree">Earlier qualifications</h3>
            <ul className="edu-stack">
              {priorEducation.map((entry) => (
                <li className="edu-stack__row" key={entry.id}>
                  <div>
                    <p className="edu-stack__degree">{entry.degree}</p>
                    <p className="edu-stack__institution">{entry.institution}</p>
                  </div>
                  <p className="edu-stack__period">{entry.period}</p>
                </li>
              ))}
            </ul>
            <p className="edu-card__result edu-card__result--muted">
              Semester results and academic achievements will be added here as they are
              confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
