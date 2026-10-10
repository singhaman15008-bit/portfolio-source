/**
 * CertificateCard — one credential.
 * Every card links to the original certificate file, opened in a new tab.
 */
export default function CertificateCard({ certificate }) {
  // No data imports here: the card renders exactly what it is handed.
  return (
    <article className="cert-card">
      <header className="cert-card__head">
        <h3 className="cert-card__title">{certificate.title}</h3>
        <p className="cert-card__org">{certificate.organisation}</p>
      </header>

      <dl className="cert-card__meta">
        <div>
          <dt>Date</dt>
          <dd>{certificate.dateLabel}</dd>
        </div>
        {certificate.credentialId ? (
          <div>
            <dt>ID</dt>
            <dd>
              <code>{certificate.credentialId}</code>
            </dd>
          </div>
        ) : null}
      </dl>

      <a
        className="text-link cert-card__link"
        href={certificate.file}
        target="_blank"
        rel="noreferrer noopener"
      >
        View certificate
        <span aria-hidden="true"> ↗</span>
        <span className="sr-only">
          {" "}
          — {certificate.title}, {certificate.organisation} (opens in a new tab)
        </span>
      </a>
    </article>
  );
}
