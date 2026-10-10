import { navItems } from "../data/navigation";

/**
 * SiteHeader — sticky navigation with a mobile disclosure menu.
 *
 * Accessibility notes:
 *  - the toggle is a real <button> with aria-expanded / aria-controls
 *  - Escape closes the menu and returns focus to the toggle
 *  - the panel is inert (not focusable) while closed
 *  - the current section is marked with aria-current="true"
 */
export default function SiteHeader({ activeId, menuOpen, setMenuOpen, menuRef, toggleRef }) {
  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            AS
          </span>
          <span className="brand__text">
            <span className="brand__name">Aman Singh</span>
            <span className="brand__role">B.Tech CSE</span>
          </span>
        </a>

        <nav
          className="site-nav"
          id="primary-navigation"
          aria-label="Primary"
          ref={menuRef}
          {...(menuOpen ? {} : { inert: "" })}
        >
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="site-nav__link"
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "true" : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--ghost btn--sm header-cta" href="#contact" onClick={close}>
            Contact
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            ref={toggleRef}
          >
            <span className="menu-toggle__bar" aria-hidden="true" />
            <span className="menu-toggle__bar" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
