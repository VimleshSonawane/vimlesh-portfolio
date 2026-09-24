# Vimlesh Sonawane — Portfolio

A "mission control" themed portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Before you deploy

Search the code for ⚠ flags — these are placeholders that need your real info:

- `components/Contact.tsx` — replace the email and LinkedIn URL
- `components/Experience.tsx` — confirm exact job titles and end dates (marked inline)
- `components/Skills.tsx` — confirm certification names/issuers/dates
- `components/Projects.tsx` — add a specific outcome for the real estate case study

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

1. Push this folder's contents to your `vimlesh-portfolio` GitHub repo (replace everything, or merge if you already have files there).
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**, select this repo, click **Deploy**.
3. In Vercel → Settings → Domains, add your Namecheap domain and follow the DNS instructions shown there.

## Structure

- `app/` — Next.js App Router pages, layout, global styles
- `components/` — one file per section (Hero, About, Experience, Projects, Skills, Contact)
- `tailwind.config.ts` — color tokens and custom animations for the HUD look
