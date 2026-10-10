/* ==========================================================================
   Projects — one object per project card.
   To add a project: copy a block, change the fields, done.
   Link rules: only put a real URL in `repo` / `demo`. While they are null the
   card renders the plain text "Repository and demo coming soon." — never a
   link, and never an invented URL.
   ========================================================================== */

export const projects = [
  {
    id: "aircanvas-ai",
    name: "AirCanvas AI",
    tagline: "Gesture-Based Virtual Drawing System",
    type: "Computer Vision",
    featured: true,
    problem:
      "Drawing on a screen normally needs a mouse, stylus or touch — which is not always available or hygienic.",
    description:
      "A touchless drawing application that turns hand movement in front of a webcam into strokes on a virtual canvas, exploring hand tracking, gesture recognition and interactive canvas controls.",
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    features: [
      "Real-time hand tracking through the webcam",
      "Gesture-driven drawing on a virtual canvas",
      "Interactive canvas controls such as colour and clear",
    ],
    /** Honest scope note — no accuracy, deployment or user claims. */
    note: "A learning project. No accuracy benchmark or deployment is claimed.",
    repo: null,
    demo: null,
    image: null,
  },
  {
    id: "ai-job-scam-detector",
    name: "AI Job Scam Detector",
    tagline: "Web app for assessing job-posting scam risk",
    type: "Machine Learning · Web",
    featured: true,
    problem:
      "Fake job postings are hard to spot, and students applying for their first roles are common targets.",
    description:
      "A web application that takes details from a job posting and returns an assessment of how likely it is to be a scam, built around a trained classification model and a simple Flask interface.",
    stack: ["Python", "Flask", "HTML", "CSS", "Scikit-learn", "MySQL"],
    features: [
      "Text preprocessing and feature preparation",
      "Classification model trained with Scikit-learn",
      "Flask web interface for entering a posting",
      "MySQL used for storing records",
    ],
    note: "Model accuracy, real-world impact and deployment are not claimed.",
    repo: null,
    demo: null,
    image: null,
  },
  {
    id: "college-bookstore",
    name: "College Bookstore Website",
    tagline: "Multi-page bookstore for students",
    type: "Web Development",
    featured: true,
    problem:
      "Students had no single, organised place to browse the books their department and semester actually need.",
    description:
      "A multi-page bookstore website with department-based listings and semester-wise catalogues, plus search, filtering and sorting to make finding a book quick.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Department-based book listings",
      "Semester-wise catalogues",
      "Search, filtering and sorting",
      "Cart flow for selected books",
    ],
    note: null,
    repo: null,
    demo: null,
    image: null,
  },
  {
    id: "movie-ticket-booking",
    name: "Movie Ticket Booking Management Application",
    tagline: "Low-code workflow application built during Pega learning",
    type: "Low-Code · Workflow",
    featured: false,
    problem:
      "Booking a ticket involves several connected steps — choosing a show, reserving seats and confirming the booking.",
    description:
      "A learning project built while studying the Pega Platform, modelling the booking journey as a case with a defined lifecycle, business rules and automated processing. It is a training project, not employment experience.",
    stack: ["Pega Platform", "App Studio", "Case Management", "Workflow Automation"],
    features: [
      "Booking case with a defined lifecycle",
      "Data objects and business rules",
      "Validation, approval and routing steps",
      "Notifications and automated case processing",
    ],
    note: "Completed as part of Pega learning and project work — not a paid role.",
    repo: null,
    demo: null,
    image: null,
  },
];

export default projects;
