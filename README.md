# Boya Janardhan — Angular Portfolio

Angular 22.1.4, TypeScript 6.0, Tailwind CSS 4 portfolio.

**Live site:** https://boya-janardhan-my-portfolio.netlify.app/

## Run locally

Requires Node.js 24.15+ (Node 24 LTS recommended).

```bash
npm ci
npm start
```

Open http://localhost:4200

```bash
npm run build   # production build (output in dist/)
npm test        # runs checks after building
```

## Key files

| File | Purpose |
| --- | --- |
| `src/app/data/portfolio.data.ts` | Personal details, social links, résumé path, skills, jobs, projects |
| `src/app/app.component.html` | Page sections and layout |
| `public/resume/` | Downloadable PDF |
| `public/images/` | Profile picture |

## Update résumé

Replace `public/resume/Boya_Janardhan_Resume.pdf` with your PDF (keep the filename), or update `resume.fileUrl` / `resume.downloadName` in `portfolio.data.ts`.

## Add a permanent profile picture

```ts
photoUrl: 'images/profile.jpg',
enablePhotoPicker: false,
```

Place the image at `public/images/profile.jpg`.

## Deploy

```bash
npm run build
```

Upload the `dist/` folder to your static host. Local changes do not auto-update the live Netlify site — redeploy after building.