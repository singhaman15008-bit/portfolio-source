/**
 * SectionHeading — the numbered editorial heading used by every section.
 * One component keeps the rhythm identical down the page and means a new
 * section needs no new heading markup.
 */
export default function SectionHeading({ index, label, heading, lead, id }) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <header className="section-head">
      <p className="section-head__kicker">
        <span className="section-head__index" aria-hidden="true">
          {index}
        </span>
        <span className="section-head__rule" aria-hidden="true" />
        <span className="section-head__label">{label}</span>
      </p>
      <div className="section-head__body">
        <h2 className="section-head__title" id={headingId}>
          {heading}
        </h2>
        {lead ? <p className="section-head__lead">{lead}</p> : null}
      </div>
    </header>
  );
}
