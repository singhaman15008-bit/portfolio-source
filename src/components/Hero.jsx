import { profile } from "../data/profile";

/**
 * Hero — name, headline, availability, intro, three CTAs and the portrait.
 * The portrait is the real uploaded photograph; nothing is generated.
 */
export default function Hero() {
  const { name, headline, availability, intro, location, photo, resume } = profile;

  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__ambient" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__copy">
          {availability ? (
            <p className="pill pill--live">
              <span className="pill__dot" aria-hidden="true" />
              {availability}
            </p>
          ) : null}

          <h1 className="hero__name" id="hero-heading">
            {name}
          </h1>

          <p className="hero__headline">{headline}</p>

          <p className="hero__intro">{intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              Explore Projects
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="btn btn--secondary"
              href={resume.href}
              download
              type="application/pdf"
            >
              {resume.label}
              <span className="btn__meta" aria-hidden="true">
                {resume.fileType}
              </span>
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>Based in</dt>
              <dd>{location}</dd>
            </div>
            <div>
              <dt>Studying at</dt>
              <dd>{profile.institution}</dd>
            </div>
          </dl>
        </div>

        <figure className="hero__portrait">
          <div className="hero__portrait-glow" aria-hidden="true" />
          <img
            className="hero__photo"
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <figcaption className="hero__portrait-caption">
            <span>{profile.degree}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.studyPeriod}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
