# Rohan Kumar — Portfolio

Personal portfolio site for Rohan Kumar — Software Developer / AI Engineer /
Web3 & Full Stack Developer, and Developer Advocate / Community Builder.

Built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Content

All copy is data-driven from `src/data/*.ts` — projects, experience, skills,
achievements, education, resumes, and social links. Update those files to
change site content without touching components.

Add the two resume PDFs to `public/resume/` (see `public/resume/README.txt`
for the exact filenames expected).

## Contact form

The contact form (`src/components/sections/Contact.tsx`) falls back to a
`mailto:` link by default. To wire it to a real backend (e.g.
[Formspree](https://formspree.io)), set `VITE_FORMSPREE_ENDPOINT` in a local
`.env` file — see `.env.example`.

## Build

```bash
npm run build
```
