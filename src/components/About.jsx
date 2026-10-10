import { profile } from "../data/profile";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";

/** About — the exact supplied copy, plus quick facts and the portrait. */
export default function About() {
  const copy = sections.about;

  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="shell">
        <SectionHeading
          id="about"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
        />

        <div className="about__grid">
          <div className="about__body">
            {profile.about.map((paragraph) => (
              <p className="about__paragraph" key={paragraph.slice(0, 32)}>
                {paragraph}
              </p>
            ))}

            <dl className="facts">
              {profile.facts.map((fact) => (
                <div className="facts__item" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="about__aside" aria-label="Career interests">
            <h3 className="about__aside-title">Career interests</h3>
            <ul className="chip-list">
              {profile.careerInterests.map((interest) => (
                <li className="chip" key={interest}>
                  {interest}
                </li>
              ))}
            </ul>
            <p className="about__aside-note">
              Building towards software development, data analytics and AI/ML roles as I
              progress through my degree.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
