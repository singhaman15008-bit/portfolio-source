/* ==========================================================================
   Education — one entry per qualification.
   No CGPA or unsupported academic achievement is listed. When a semester
   result or an award is confirmed, add it to `notes` or as a new entry.
   ========================================================================== */

export const education = [
  {
    id: "btech-cse",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Uttar Pradesh Textile Technology Institute, Kanpur",
    period: "2025–2028",
    status: "In progress",
    /** No CGPA is published — none is verified. */
    result: null,
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Machine Learning",
      "Web Technology",
      "Java & Object-Oriented Programming",
      "Theory of Computation",
    ],
  },
];

/** Extra qualifications from the resume, kept separate so they can be removed. */
export const priorEducation = [
  {
    id: "diploma",
    degree: "Diploma — Electrical Engineering",
    institution: "Handia Polytechnic",
    period: "2022–2025",
    status: "Completed",
  },
  {
    id: "class-12",
    degree: "Intermediate (Class 12)",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2022",
    status: "Completed",
  },
  {
    id: "class-10",
    degree: "High School (Class 10)",
    institution: "Central Board of Secondary Education (CBSE)",
    period: "2020",
    status: "Completed",
  },
];

export default education;
