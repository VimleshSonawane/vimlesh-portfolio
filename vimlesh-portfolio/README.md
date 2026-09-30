# Vimlesh Sonawane — Portfolio

A professional "project command" themed portfolio — blending Project Management,
Agile/PMO, Business Analytics, and Construction visual language. Built with
Next.js, TypeScript, Tailwind CSS, Framer Motion, and lucide-react icons.

## Optional polish (nothing required is outstanding)

- `components/Projects.tsx` — the real-estate project could use specific project names/addresses if you want more detail
- Any of the other 7 project cards can take a real image or slide export — see below

## Adding real images, PPT exports, or a research paper

Each project card opens a modal with a dashed placeholder box (look for
`ImagePlus` in `components/Projects.tsx`). To add a real image:

1. Drop your image file into the `public/` folder (create it if it doesn't exist), e.g. `public/projects/crime-data.png`
2. In `components/Projects.tsx`, replace the placeholder `<div>` block for that project with:
   ```jsx
   <img src="/projects/crime-data.png" alt="Crime data analysis" className="rounded-xl mb-5 w-full" />
   ```

For a PPT export, export your slides as images (PNG/JPG) or a PDF and link to it the same way,
or add a `link` field pointing to a hosted version (Google Slides, Drive, etc.) — the `link` field already
renders a clickable "View" button with an external-link icon.

For your research paper, edit the `research-paper` entry in `PROJECTS` (in `components/Projects.tsx`):
replace `title`, `summary`, `details`, and `link.url` with the real paper title, a plain-language summary,
and a link to the paper (PDF, DOI, or hosted page).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

1. Push this folder's contents to your `vimlesh-portfolio` GitHub repo.
2. Vercel auto-redeploys on every push to `main` (already connected).

## Structure

- `app/` — Next.js App Router pages, layout, global styles
- `components/` — one file per section (Hero, About, Experience, Projects, Credentials, Skills, Contact)
- `components/CategoryTag.tsx` — shared color-coded category system (PMO/Agile, Analytics, Construction, Research, Award)
- `tailwind.config.ts` — color tokens for the theme
