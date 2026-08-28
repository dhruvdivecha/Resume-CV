# Resume — Dhruv Hitesh Divecha

A React + Vite single-page resume. All content lives in one place:
[`src/data/resume.js`](src/data/resume.js) — edit that file to update the
resume; the components hold no copy.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

`vite.config.js` sets `base: "./"`, so `dist/` deploys unchanged to GitHub
Pages, Vercel, Netlify, or any static host.

## Layout

```
index.html                 Vite entry
public/certifications/     certificate PDFs, linked from the Certifications section
src/data/resume.js         all resume content
src/components/            presentational components, one per section
src/index.css              design tokens, layout, and the print stylesheet
```

## Printing

The "Save as PDF" button calls `window.print()`. The print stylesheet in
`src/index.css` switches to a high-contrast ink palette, drops the page
chrome, and sets `break-inside: avoid` on sections and entries so nothing
splits across a page boundary.
