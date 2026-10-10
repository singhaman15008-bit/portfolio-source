import { profile } from "../data/profile";
import { sections } from "../data/navigation";
import SectionHeading from "./SectionHeading";

/**
 * Contact — real contact details and profile links only.
 * No fake form: a form with nowhere to post would be worse than no form, so
 * the section gives a working mailto link, the resume, and profile links.
 */
export default function Contact() {
  const copy = sections.contact;
  const { email, phone, emailNote } = profile.contact;
  const { resume, socials } = profile;

  return (
    <section className="section section--alt" id="contact" aria-labelledby="contact-heading">
      <div className="shell">
        <SectionHeading
          id="contact"
          index={copy.index}
          label={copy.label}
          heading={copy.heading}
          lead="For internship and entry-level opportunities, email is the fastest way to reach me."
        />

        <div className="contact__grid">
          <div className="contact__primary">
            <a className="contact__email" href={`mailto:${email}`}>
              <span className="contact__email-label">Email</span>
              <span className="contact__email-value">{email}</span>
              <span className="contact__email-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <p className="contact__note">{emailNote}</p>

            {phone ? (
              <p className="contact__phone">
                <span className="contact__email-label">Phone</span>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </p>
            ) : null}

            <a className="btn btn--primary contact__resume" href={resume.href} download>
              {resume.label}
              <span className="btn__meta" aria-hidden="true">
                {resume.fileType}
              </span>
            </a>
          </div>

          <div className="contact__profiles">
            <h3 className="contact__subtitle">Professional profiles</h3>
            <ul className="profile-list">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    className="profile-link"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="profile-link__label">{social.label}</span>
                    <span className="profile-link__handle">{social.handle}</span>
                    <span className="profile-link__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact__note contact__note--muted">
              More profiles will be added here once the URLs are confirmed — nothing is
              published on a guess.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
