/* ==========================================================================
   Experience & practical learning.
   `kind` is the honest label shown on each card:
     "Virtual internship" | "Internship program" | "Coursework" | "Project"
   Add a future internship or job by copying a block and setting kind to
   "Internship" or "Employment" and filling in the real dates.
   ========================================================================== */

export const experience = [
  {
    id: "pega-national-internship",
    title: "National Internship Program — Pega",
    organisations: "Pegasystems Worldwide India + SmartBridge",
    kind: "Internship program",
    /** Sponsored, industry-integrated training delivered with SmartBridge. */
    mode: "Industry-integrated training (sponsored by Pegasystems Worldwide India)",
    start: "2026-08-04",
    end: "2026-09-03",
    dateLabel: "4 August – 3 September 2026",
    duration: "60 hours",
    credentialId: "PEGA-SW-NIP-2026-1566",
    summary:
      "60 hours of industry-integrated learning with hands-on exposure to workflow automation, low-code technologies and real-world project implementation on the Pega Platform.",
    highlights: [
      "Workflow automation and low-code application development",
      "Case lifecycle, data objects and business rules in App Studio",
      "Worked on a Movie Ticket Booking Management Application",
    ],
    certificate: "/assets/certificates/pega-national-internship.pdf",
    featured: true,
  },
  {
    id: "servicenow-virtual-internship",
    title: "ServiceNow Virtual Internship Program",
    organisations: "ServiceNow + SmartBridge",
    kind: "Virtual internship",
    mode: "Virtual internship program",
    start: "2026-07-22",
    end: "2026-07-22",
    dateLabel: "Issued 22 July 2026",
    duration: null,
    credentialId: "SNU2032536",
    summary:
      "A virtual internship program covering ServiceNow administration fundamentals and platform configuration, with modules on flows, automated testing, reporting and Agentic AI.",
    highlights: [
      "ServiceNow Administration Fundamentals",
      "Introduction to Flows and Automated Test Framework (ATF) Essentials",
      "Get Started with Reports and Agentic AI concepts",
      "Certified System Administrator (CSA) exam preparation",
    ],
    certificate: "/assets/certificates/servicenow-virtual-internship.pdf",
    featured: true,
  },
  {
    id: "codsoft-web-development",
    title: "Web Development Virtual Internship",
    organisations: "CodSoft",
    kind: "Virtual internship",
    mode: "Virtual internship program",
    start: "2026-02-10",
    end: "2026-03-10",
    dateLabel: "10 February – 10 March 2026",
    duration: null,
    credentialId: null,
    summary:
      "A virtual internship focused on front-end web development tasks, completed as guided practice.",
    highlights: ["Hands-on front-end web development tasks"],
    certificate: "/assets/certificates/codsoft-web-development.pdf",
    featured: false,
  },
  {
    id: "codealpha-java-programming",
    title: "Java Programming Virtual Internship",
    organisations: "CodeAlpha",
    kind: "Virtual internship",
    mode: "Virtual internship program",
    start: "2026-05-01",
    end: "2026-05-30",
    dateLabel: "1 May – 30 May 2026",
    duration: null,
    credentialId: "CA/DF1/53382",
    summary:
      "A virtual internship in Java programming, completed as active participant with guided programming tasks.",
    highlights: ["Java programming practice and task submissions"],
    certificate: "/assets/certificates/codealpha-java-programming.pdf",
    featured: false,
  },
];

export default experience;
