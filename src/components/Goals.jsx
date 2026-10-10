import { careerInterests, goals } from "../data/goals";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";

/** Goals — career interests and what I'm actively working towards. */
export default function Goals() {
  const copy = sections.goals;

  return (
    <section className="section" id="goals" aria-labelledby="goals-heading">
      <div className="shell">
        <SectionHeading
          id="goals"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
        />

        <div className="goals__grid">
          <div className="goals__interests">
            <h3 className="goals__subtitle">Career interests</h3>
            <ul className="interests">
              {careerInterests.map((interest) => (
                <li className="interest" key={interest.title}>
                  <h4 className="interest__title">{interest.title}</h4>
                  <p className="interest__text">{interest.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="goals__now">
            <h3 className="goals__subtitle">Current goals</h3>
            <ol className="goal-list">
              {goals.map((goal, index) => (
                <li className="goal" key={goal.title}>
                  <span className="goal__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="goal__title">{goal.title}</h4>
                    <p className="goal__detail">{goal.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
