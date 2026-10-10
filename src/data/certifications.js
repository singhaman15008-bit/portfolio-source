/* ==========================================================================
   Certifications — verified against the uploaded certificate PDFs.
   `file` points at public/assets/certificates/<name>.pdf
   `additional: true` puts a credential in the collapsed disclosure section.
   ========================================================================== */

export const certifications = [
  {
    id: "pega",
    title: "National Internship Program — Pega",
    organisation: "Pegasystems Worldwide India + SmartBridge",
    dateLabel: "4 August – 3 September 2026 · 60 hours",
    credentialId: "PEGA-SW-NIP-2026-1566",
    file: "/assets/certificates/pega-national-internship.pdf",
    additional: false,
  },
  {
    id: "servicenow",
    title: "ServiceNow Virtual Internship Program",
    organisation: "ServiceNow + SmartBridge",
    dateLabel: "Issued 22 July 2026",
    credentialId: "SNU2032536",
    file: "/assets/certificates/servicenow-virtual-internship.pdf",
    additional: false,
  },
  {
    id: "generative-ai-essentials",
    title: "TCS iON Career Edge — Generative AI Essentials",
    organisation: "TCS iON",
    dateLabel: "Completed 2 June 2026",
    credentialId: "8766-30896116-1016",
    file: "/assets/certificates/generative-ai-essentials.pdf",
    additional: false,
  },
  {
    id: "ai-cybersecurity-awareness",
    title: "AI and Cybersecurity Awareness",
    organisation: "AI for All / MPIT-CoE + TCS Foundation",
    dateLabel: "Issued 19 April 2026",
    credentialId: "277082-30896116-1016",
    file: "/assets/certificates/ai-cybersecurity-awareness.pdf",
    additional: false,
  },
  {
    id: "yuva-ai-for-all",
    title: "YUVA AI For All",
    organisation: "IndiaAI via TCS iON",
    dateLabel: "Issued 18 April 2026",
    credentialId: null,
    file: "/assets/certificates/yuva-ai-for-all.pdf",
    additional: false,
  },
  {
    id: "young-professional",
    title: "TCS iON Career Edge — Young Professional",
    organisation: "TCS iON",
    dateLabel: "Completed 2 June 2026",
    credentialId: "272697-30896116-1016",
    file: "/assets/certificates/young-professional.pdf",
    additional: false,
  },

  /* --- Additional credentials (rendered inside a disclosure) ------------- */
  {
    id: "codsoft",
    title: "Web Development Virtual Internship",
    organisation: "CodSoft",
    dateLabel: "10 February – 10 March 2026",
    credentialId: null,
    file: "/assets/certificates/codsoft-web-development.pdf",
    additional: true,
  },
  {
    id: "codealpha",
    title: "Java Programming Virtual Internship",
    organisation: "CodeAlpha",
    dateLabel: "1 May – 30 May 2026",
    credentialId: "CA/DF1/53382",
    file: "/assets/certificates/codealpha-java-programming.pdf",
    additional: true,
  },
];

/** Labels for the collapsed section. */
export const additionalCredentialsLabel = "Additional credentials (2)";

export default certifications;
