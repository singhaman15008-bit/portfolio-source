/* ==========================================================================
   Skills — grouped, honest and editable.
   `level` communicates evidence, not a fake percentage:
     "project"  → used in a completed project
     "learning" → explored through coursework, courses or practice
   ========================================================================== */

export const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    blurb: "Languages I write code in, at coursework and project level.",
    skills: [
      { name: "C", level: "learning" },
      { name: "C++", level: "learning" },
      { name: "Java", level: "learning" },
      { name: "Python", level: "project" },
      { name: "JavaScript", level: "project" },
      { name: "SQL", level: "project" },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    blurb: "Front-end and light back-end work from my own projects.",
    skills: [
      { name: "HTML", level: "project" },
      { name: "CSS", level: "project" },
      { name: "JavaScript", level: "project" },
      { name: "Responsive UI", level: "project" },
      { name: "Flask", level: "project" },
      { name: "React", level: "learning" },
    ],
  },
  {
    id: "data-ml",
    title: "Data Analytics & Machine Learning",
    blurb: "Applied in coursework and in my AI projects.",
    skills: [
      { name: "NumPy", level: "project" },
      { name: "Pandas", level: "project" },
      { name: "Matplotlib", level: "project" },
      { name: "Scikit-learn", level: "project" },
      { name: "Data cleaning", level: "project" },
      { name: "Exploratory data analysis", level: "project" },
      { name: "Regression", level: "learning" },
      { name: "Classification", level: "project" },
      { name: "Decision trees", level: "learning" },
      { name: "KNN", level: "learning" },
      { name: "Ensemble learning", level: "learning" },
      { name: "OpenCV", level: "project" },
      { name: "MediaPipe", level: "project" },
    ],
  },
  {
    id: "fundamentals",
    title: "Computer Science Fundamentals",
    blurb: "Core coursework I'm building my problem-solving on.",
    skills: [
      { name: "Data Structures & Algorithms", level: "learning" },
      { name: "DBMS", level: "learning" },
      { name: "SQL", level: "learning" },
      { name: "Operating Systems", level: "learning" },
      { name: "Object-Oriented Programming", level: "learning" },
      { name: "Theory of Computation", level: "learning" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    blurb: "What I use day to day, plus platforms from my internships.",
    skills: [
      { name: "Git", level: "learning" },
      { name: "GitHub", level: "learning" },
      { name: "VS Code", level: "project" },
      { name: "Jupyter Notebook", level: "project" },
      { name: "Google Colab", level: "project" },
      { name: "MySQL", level: "project" },
      { name: "Pega Platform", level: "learning" },
      { name: "ServiceNow", level: "learning" },
    ],
  },
];

/** Legend rendered under the skills grid. */
export const levelLegend = [
  { level: "project", label: "Used in a completed project" },
  { level: "learning", label: "Explored through coursework or practice" },
];

export default skillGroups;
