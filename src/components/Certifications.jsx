import { certifications, additionalCredentialsLabel } from "../data/certifications";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";
import CertificateCard from "./CertificateCard";

/**
 * Certifications — featured credentials in a grid, remaining ones inside a
 * native <details> disclosure (keyboard accessible without any JS).
 */
export default function Certifications() {
  const copy = sections.certifications;
  const featured = certifications.filter((item) => !item.additional);
  const additional = certifications.filter((item) => item.additional);

  return (
    <section className="section" id="certifications" aria-labelledby="certifications-heading">
      <div className="shell">
        <SectionHeading
          id="certifications"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
          lead={copy.lead}
        />

        <div className="certs__grid">
          {featured.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {additional.length ? (
          <details className="disclosure">
            <summary className="disclosure__summary">
              <span className="disclosure__label">
                {additionalCredentialsLabel.replace(/\d+/, String(additional.length))}
              </span>
              <span className="disclosure__chevron" aria-hidden="true" />
            </summary>
            <div className="disclosure__content">
              <div className="certs__grid certs__grid--compact">
                {additional.map((certificate) => (
                  <CertificateCard key={certificate.id} certificate={certificate} />
                ))}
              </div>
            </div>
          </details>
        ) : null}
      </div>
    </section>
  );
}
