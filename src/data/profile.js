/* ==========================================================================
   Profile data — the single source of truth for personal information.
   Change your name, headline, links, or About copy here and the whole site
   updates. No component hardcodes any of this.
   ========================================================================== */

export const profile = {
  name: "Aman Singh",

  /** Shown under the name in the hero and in the footer. */
  headline: "B.Tech CSE Student · Software, Data & AI Learner",

  /** Availability badge. Set to null to hide the badge entirely. */
  availability: "Open to internship opportunities",

  role: "B.Tech Computer Science & Engineering Student",

  institution: "Uttar Pradesh Textile Technology Institute, Kanpur",
  degree: "B.Tech — Computer Science & Engineering",
  studyPeriod: "2025–2028",

  location: "Prayagraj, Uttar Pradesh, India",

  careerInterests: [
    "Software Development",
    "Web Development",
    "Data Analytics",
    "Machine Learning",
    "Artificial Intelligence",
  ],

  /** Hero paragraph. Keep it honest and short. */
  intro:
    "I'm developing practical software, web development, data analytics and AI skills through academic learning, hands-on projects and virtual internship programs — and I'm looking for a team to learn alongside.",

  /** About Me — displayed exactly as written. */
  about: [
    "I'm a B.Tech Computer Science & Engineering student at Uttar Pradesh Textile Technology Institute, Kanpur, building practical software and data-driven solutions. My interests span software development, web technologies, machine learning and AI. Through hands-on learning in Pega and ServiceNow, I've explored workflow automation, low-code application development and platform administration. I'm currently seeking opportunities to contribute to software, data, and AI-focused projects while strengthening my problem-solving skills.",
  ],

  /** Quick facts shown as a small grid in the About section. */
  facts: [
    { label: "Based in", value: "Prayagraj, India" },
    { label: "Focusing on", value: "Software · Data · AI" },
    { label: "Education", value: "B.Tech CSE · 2025–2028" },
  ],

  /** Portrait: place the real photograph at public/images/aman-singh.jpeg */
  photo: {
    src: "/images/aman-singh.jpeg",
    alt: "Aman Singh, B.Tech CSE student.",
    /** Intrinsic size of the source file, used to avoid layout shift. */
    width: 1086,
    height: 1448,
  },

  /** Resume: place the real PDF at public/assets/Aman_Singh_Resume.pdf */
  resume: {
    href: "/assets/Aman_Singh_Resume.pdf",
    label: "Download Resume",
    /** Set to "Pages" if you ever ship a .pages file instead of a PDF. */
    fileType: "PDF",
  },

  /**
   * Contact details. Only add what is verified — never invent an email,
   * phone number or profile URL.
   * `email` is the address published in the footer and resume of record.
   */
  contact: {
    email: "singhaman15008@gmail.com",
    emailNote: "Verified from the resume in this portfolio.",
    /** Set to a string to publish a phone number; leave null to hide it. */
    phone: null,
  },

  /** Professional profiles. Add LinkedIn once the real URL is confirmed. */
  socials: [
    {
      label: "GitHub",
      handle: "singhaman15008-bit",
      href: "https://github.com/singhaman15008-bit",
      icon: "github",
    },
    // {
    //   label: "LinkedIn",
    //   handle: "your-handle",
    //   href: "https://www.linkedin.com/in/your-handle",
    //   icon: "linkedin",
    // },
  ],

  /** Site metadata (SEO). No production domain is claimed. */
  seo: {
    title: "Aman Singh — B.Tech CSE Student | Software, Data & AI Portfolio",
    description:
      "Portfolio of Aman Singh, a B.Tech Computer Science & Engineering student at Uttar Pradesh Textile Technology Institute, Kanpur — projects in software development, web, data analytics and machine learning.",
    ogImage: "/og-image.svg",
    ogImageNote:
      "Placeholder social-sharing image. Replace public/og-image.svg with a real 1200×630 PNG/JPG before sharing the link publicly, and update seo.ogImage.",
  },
};

export default profile;
