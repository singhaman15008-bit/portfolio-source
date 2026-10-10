/**
 * SkillTag — one technology chip.
 * `level` renders a small dot: filled for "used in a project",
 * hollow for "explored through coursework or practice".
 * The meaning is also spelled out for screen readers, never colour alone.
 */
export default function SkillTag({ name, level }) {
  const isProject = level === "project";
  const label = isProject
    ? "used in a completed project"
    : "explored through coursework or practice";

  return (
    <li className={`skill-tag skill-tag--${level}`}>
      <span className="skill-tag__dot" aria-hidden="true" />
      <span className="skill-tag__name">{name}</span>
      <span className="sr-only"> — {label}</span>
    </li>
  );
}
