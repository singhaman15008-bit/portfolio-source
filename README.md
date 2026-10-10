# Aman Singh — Portfolio

A premium, accessible personal portfolio for **Aman Singh**, B.Tech Computer Science &
Engineering student at Uttar Pradesh Textile Technology Institute, Kanpur.

Built with React 19 + Vite. No backend, no database, no authentication — a fast,
static, recruiter-friendly site that is easy to keep updated.

---

## Quick start

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

---

## Where the content lives

**You almost never need to touch a component.** All content is in `src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/profile.js` | Name, headline, availability, About copy, photo, resume, contact, SEO |
| `src/data/skills.js` | Skill categories and each skill's evidence level |
| `src/data/projects.js` | Projects, problem statements, stacks, repo/demo links |
| `src/data/experience.js` | Internships, virtual internships and practical learning |
| `src/data/certifications.js` | Credentials, IDs and certificate PDF paths |
| `src/data/education.js` | Degree, coursework and prior qualifications |
| `src/data/goals.js` | Career interests and current goals |
| `src/data/navigation.js` | Nav items and section headings |

Design tokens (colours, type scale, spacing, radii, shadows) are in
`src/styles/tokens.css`. Change them there and the whole site re-themes.

Components live in `src/components/`, styles in `src/styles/`.

---

## Common edits

### 1. Change the About section
Edit the `about` array in `src/data/profile.js`. Each string is one paragraph.

### 2. Add a project, with its real GitHub URL
Copy a block in `src/data/projects.js` and fill it in:

```js
{
  id: "my-new-project",
  name: "My New Project",
  tagline: "One-line summary",
  type: "Web Development",
  featured: true,
  problem: "What problem it solves.",
  description: "What it is and how it works.",
  stack: ["Python", "Flask"],
  features: ["Feature one", "Feature two"],
  note: null,
  repo: "https://github.com/singhaman15008-bit/my-new-project",  // real URL only
  demo: null,
  image: null,
}
```

While `repo` and `demo` are `null`, the card prints the plain, non-clickable text
*"Repository and demo coming soon."* Set a real URL and a working link appears.

### 3. Replace the resume
Overwrite `public/assets/Aman_Singh_Resume.pdf` keeping the same filename. Nothing
else needs to change. (If you ever ship a `.pages` file instead, update
`profile.resume.fileType` so the button is labelled honestly.)

### 4. Add or remove a certificate
Put the PDF in `public/assets/certificates/` and add an entry to
`src/data/certifications.js`. Set `additional: true` to place it in the collapsed
"Additional credentials" disclosure instead of the main grid.

### 5. Add a future internship or job
Append an entry to `src/data/experience.js`. Set `kind` honestly —
`"Internship"`, `"Employment"`, `"Virtual internship"` or `"Coursework"` — because
that label is what recruiters read.

### 6. Update colours or typography
Edit `src/styles/tokens.css`. Every component reads from those variables; there are
no hard-coded colours elsewhere.

### 7. Add a profile link (e.g. LinkedIn)
Add an entry to `profile.socials` in `src/data/profile.js`. Only add URLs that are
real — the site is designed never to publish a guessed handle.

---

## Editorial rules this project follows

These are deliberate, please keep them:

- **No fabricated links.** A repository or demo URL is published only when it exists.
- **No fake metrics.** No skill percentages, no "accuracy: 98%", no user counts.
- **Honest labels.** Virtual internships are never presented as employment; skills are
  marked as *used in a completed project* or *explored through coursework*.
- **No invented credentials.** Certificate IDs match the certificate files.

---

## Accessibility

- Skip-to-content link
- Keyboard-accessible mobile menu with `aria-expanded`, Escape-to-close and focus return
- `aria-current` on the active navigation item
- Visible focus indicators on every interactive element
- `prefers-reduced-motion` support
- Semantic landmarks and a single `h1`

## Performance

- Self-hosted fonts (no third-party font requests, no trackers, no analytics)
- No runtime UI library; plain CSS driven by design tokens
- Optimised images with explicit dimensions to avoid layout shift

---

## Deployment

The build output in `dist/` is static — upload it to any static host (GitHub Pages,
Netlify, Vercel, Cloudflare Pages). Before sharing the link publicly, replace
`public/og-image.svg` with a real 1200×630 PNG/JPG and update `seo.ogImage` in
`src/data/profile.js`.

---

## Before you publish: two things to check

1. **Resume consistency.** The resume PDF and this site should tell the same story
   (same year of study, same GitHub/LinkedIn handles). Re-check after any resume update.
2. **LinkedIn.** Not currently listed because no verified URL was supplied. Add it to
   `profile.socials` once confirmed.

---

© Aman Singh. Built with React and Vite.
