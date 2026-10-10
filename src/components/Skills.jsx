import { skillGroups, levelLegend } from "../data/skills";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

/** Skills — categorised chips with an honest evidence legend. */
export default function Skills() {
  const copy = sections.skills;

  return (
    <section className="section section--alt" id="skills" aria-labelledby="skills-heading">
      <div className="shell">
        <SectionHeading
          id="skills"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
          lead={copy.lead}
        />

        <ul className="legend" aria-label="How to read the skill labels">
          {levelLegend.map((entry) => (
            <li className={`legend__item legend__item--${entry.level}`} key={entry.level}>
              <span className="skill-tag__dot" aria-hidden="true" />
              {entry.label}
            </li>
          ))}
        </ul>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.id}>
              <h3 className="skill-card__title">{group.title}</h3>
              <p className="skill-card__blurb">{group.blurb}</p>
              <ul className="skill-card__tags">
                {group.skills.map((skill) => (
                  <SkillTag key={`${group.id}-${skill.name}`} {...skill} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
