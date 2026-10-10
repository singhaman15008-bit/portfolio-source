/* ==========================================================================
   Site structure: navigation and section copy.
   Adding a section? Add its id here and the nav picks it up automatically.
   ========================================================================== */

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export const sections = {
  about: {
    index: "01",
    label: "About",
    heading: "Curiosity first, working software second.",
  },
  skills: {
    index: "02",
    label: "Skills",
    heading: "Tools I reach for, and how far I've taken them.",
    lead: "Honest labels: a technology is marked as used in a completed project, or as explored through coursework and practice. No percentages.",
  },
  projects: {
    index: "03",
    label: "Projects",
    heading: "Things I've built and what they taught me.",
    lead: "Each card states the problem, the actual stack and the features implemented. Links appear only when a real repository or demo exists.",
  },
  experience: {
    index: "04",
    label: "Experience",
    heading: "Practical learning, labelled honestly.",
    lead: "These are virtual and industry-integrated training programs, independent projects and courses — not employment.",
  },
  certifications: {
    index: "05",
    label: "Certifications",
    heading: "Credentials, verified against the certificate.",
    lead: "Every entry links to the original certificate file.",
  },
  education: {
    index: "06",
    label: "Education",
    heading: "The academic foundation.",
  },
  goals: {
    index: "07",
    label: "Goals",
    heading: "What I'm working towards next.",
  },
  contact: {
    index: "08",
    label: "Contact",
    heading: "Looking for an intern? Let's talk.",
  },
};

/** The closing statement above the footer. */
export const closing = {
  text: "Building one honest project at a time.",
  accent: "one honest project",
};
