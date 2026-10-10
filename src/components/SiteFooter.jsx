import { profile } from "../data/profile";

/** Footer — closing statement, contact links and the honest build note. */

/* Resolved once at module load rather than during render. */
const YEAR = new Date().getFullYear();

export default function SiteFooter() {
  const year = YEAR;

  return (
    <footer className="site-footer">
      <div className="shell">
        <p className="closing">
          Building{" "}
          <span className="closing__accent">one honest project</span> at a time.
        </p>

        <div className="site-footer__grid">
          <div>
            <p className="site-footer__name">{profile.name}</p>
            <p className="site-footer__role">{profile.headline}</p>
            <p className="site-footer__place">{profile.location}</p>
          </div>

          <nav className="site-footer__links" aria-label="Contact and profiles">
            <a href={`mailto:${profile.contact.email}`}>Email</a>
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer noopener">
                {social.label}
              </a>
            ))}
            <a href={profile.resume.href} download>
              Resume
            </a>
          </nav>
        </div>

        <div className="site-footer__base">
          <p>
            © {year} {profile.name}. Built with React and Vite.
          </p>
          <a className="site-footer__top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
