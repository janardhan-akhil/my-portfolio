# Boya Janardhan — Angular Portfolio

The navy / cyan / violet portfolio recreated in **Angular 22.1.4, TypeScript 6.0 and Tailwind CSS 4**. This is a real Angular CLI project: there is no React runtime or JSX.

## Run it locally

Use **Node.js 24.15 or newer within the Node 24 release line** (Node 24 LTS recommended). The exact supported Node ranges are listed in `package.json`. A global Angular CLI installation is not needed.

1. Extract the ZIP.
2. Open the `boya-janardhan-angular-portfolio` folder in VS Code.
3. Open a terminal in that folder and run:

```bash
npm ci
npm start
```

Open `http://localhost:4200`. Angular refreshes the page when you save changes. Stop the server with Ctrl+C.

```bash
# Optimized production website
npm run build

# Content, link, PDF and compiled-asset checks (run after building)
npm test
```

## What is included

- Gradient-highlighted name and responsive navigation.
- Hero profile-photo card with a device-local photo picker.
- About, skills, experience and project sections.
- LeetCode section and profile links in the hero and footer contact area.
- Resume section with working **View PDF** and **Download résumé** actions.
- Your existing Modern Classic PDF, copied unchanged with your updated email address.
- Standalone components, signals, zoneless change detection and Angular `@if` / `@for` templates.
- Tailwind utilities plus the original custom CSS design tokens, with reduced-motion support.
- Lightweight SVG icons without a third-party Angular icon dependency.

## Source layout

| File or folder                                | What to change                                                            |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| `src/app/data/portfolio.data.ts`              | All personal details, social URLs, résumé path, skills, jobs and projects |
| `src/app/app.component.html`                  | Main page sections and layout                                             |
| `src/app/app.component.ts`                    | Navigation state and active-section tracking                              |
| `src/app/shared/profile-photo.component.ts`   | Photo validation, preview and device-local persistence                    |
| `src/app/shared/profile-photo.component.html` | Profile-photo card layout                                                 |
| `src/app/shared/section-heading.component.ts` | Shared section heading                                                    |
| `src/app/shared/icon.component.ts`            | Shared SVG icons                                                          |
| `src/styles.css`                              | Tailwind import, shared theme, responsive CSS and new-section styles      |
| `src/index.html`                              | Browser title and search-engine description                               |
| `public/resume/`                              | The downloadable PDF                                                      |
| `public/images/`                              | Add your permanent profile picture here                                   |
| `angular.json`                                | Angular CLI build and server settings                                     |
| `.postcssrc.json`                             | Tailwind 4 PostCSS configuration                                          |

## Change your LeetCode profile

Edit one value in `src/app/data/portfolio.data.ts`:

```ts
social: {
  github: 'https://github.com/janardhan-akhil/',
  linkedin: 'https://www.linkedin.com/in/boya-janardhan-ba28a4374',
  leetcode: 'https://leetcode.com/u/janardhanb8639/',
},
```

The LeetCode URL was recovered from previously shared profile context; its live page could not be verified by the web checker. Confirm it belongs to you before public sharing. No solved-count, ranking, streak, badges or other unverified statistics are displayed.

## Replace your résumé

Replace `public/resume/Boya_Janardhan_Resume.pdf` with your latest PDF. Keep that filename and both buttons work without further edits.

Alternatively, edit `resume.fileUrl` and `resume.downloadName` in the data file. Use a path relative to `public/`, e.g. `resume/my-resume.pdf`. Keep a same-origin PDF if you want the browser's download attribute to work reliably.

The included PDF is the existing `Boya_Janardhan_Resume_Modern_Classic.pdf`, copied without altering its content. It contains your contact details; review it before sharing publicly.

## Add a permanent profile picture

1. Copy your picture to `public/images/profile.jpg`.
2. Update the data file:

```ts
photoUrl: 'images/profile.jpg',
enablePhotoPicker: false,
```

A configured photo is visible to every visitor after deployment. The optional on-page picker is only a local preview: it does not upload an image to a server. It accepts JPG/PNG/WebP up to 5 MB, scales large images down, and attempts to save the preview in that browser. It falls back gracefully when storage is unavailable. A permanent configured picture takes precedence over stored previews on reload.

## Edit content

Edit the arrays in `portfolio.data.ts` to add or remove skills, projects or experience entries. Keep project numbers unique and add navigation items only when a matching section ID exists in `app.component.html`. The template does not contain personal email text directly, which avoids Angular's `@` template parsing issue.

## Build and deploy elsewhere

Run `npm run build`; the static site is in **`dist/`**, including `index.html` and the PDF. Upload that folder to your chosen static host. No backend, database, API keys or environment variables are required.

If deploying under a subfolder, set the base path at build time:

```bash
npm run build -- --base-href /your-repository-name/
```

Asset links are relative so the same configuration works under a non-root base URL. Local modifications do not automatically update the hosted ChatGPT Site.

## Validation and implementation notes

The production Angular compiler validates TypeScript and templates in strict mode. `npm test` performs non-browser checks of section targets, configured links, PDF presence and bytes, Angular dependencies, Tailwind output and reduced-motion styles. It is not an end-to-end browser test suite.

Dependencies are pinned in `package-lock.json`; use `npm ci` to reproduce the installation. Do not use `--force` or `--legacy-peer-deps`. This Angular release requires TypeScript 6.0.x, not TypeScript 7. Tailwind follows Angular's official integration: https://angular.dev/guide/tailwind.

This source ZIP excludes Git history, hosting identity, dependency folders, build caches and credentials. The source remains fully editable and independently deployable.
