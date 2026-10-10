import { useEffect, useRef, useState } from "react";
import { navItems } from "./data/navigation";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Goals from "./components/Goals";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";

/**
 * App — the page shell.
 *
 * Responsibilities kept here on purpose:
 *  - the mobile menu's open/closed state
 *  - Escape-to-close and focus return for that menu
 *  - the active-section highlight driven by IntersectionObserver
 * Everything else lives in the section components and the data files.
 */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  /* --- Close the mobile menu on Escape, returning focus to the toggle ---- */
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  /* --- Close the mobile menu when the viewport grows to desktop --------- */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  /* --- Highlight the section currently in view -------------------------- */
  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((element) => Boolean(element));

    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      {
        // A band across the middle of the viewport: whichever section crosses
        // it owns the highlight.
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader
        activeId={activeId}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuRef={menuRef}
        toggleRef={toggleRef}
      />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Goals />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
