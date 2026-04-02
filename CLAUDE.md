# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (opens browser automatically)
npm start

# Production build → outputs to /dist
npm run build
```

No test runner is configured (`npm test` exits with error).

## Architecture

This is a **Vue 3 SPA** bundled with **Webpack 5**, not Vite. Keep that in mind when modifying the build config.

### Entry point flow
```
index.html  →  dist/bundle.js  ←  src/index.js
                                      ├── App.vue          (shell: navbar + <router-view>)
                                      ├── router/index.js  (Vue Router 4, web history)
                                      └── Bootstrap 5 CSS/JS (imported globally here)
```

### Component map
| Route | Component | Status |
|---|---|---|
| `/` | `components/HomeComponent.vue` | Main page — hero, skills, experience, projects |
| `/about` | `components/AboutComponent.vue` | Bio, education, competencies |
| `/projects/:id` | `components/ProjectsComponent.vue` | Project detail, loads from Firestore |
| `/blog` | `components/BlogComponent.vue` | Stub — empty |
| `/contact` | `components/ContactComponent.vue` | Stub — contact is handled via SweetAlert2 modal in `App.vue` |

### Data layer
- **Firebase Firestore** is the only data source.
- All Firebase logic lives in `assets/js/firebase.js`.
- Two exported functions: `getBlogPosts()` (fetches all projects from `proyectos` collection) and `getProjectById(id)`.
- Firebase credentials come exclusively from `.env` via `dotenv-webpack`. Never hardcode them.

### Static assets
- Global CSS: `assets/css/style.css` (loaded via `index.html`, not Webpack).
- Images: `assets/images/` — referenced as static paths or imported in components.
- The Webpack dev server serves `assets/` as static directory, so `/css/style.css` and `/images/*` resolve correctly in dev.

### Key libraries in use
- **Bootstrap 5.3** — dark theme (`data-bs-theme="dark"` on `<html>`). Use Bootstrap utility classes; don't fight the theme.
- **AOS** — scroll animations. Initialized per-component in `mounted()`.
- **SweetAlert2** — modals (contact form, image viewer in ProjectsComponent).
- **FontAwesome Free** — imported in `App.vue`, available globally.
- **animejs** — imported in `src/index.js` but not actively used.

### Vue style
- All components use **Options API**. Do not rewrite to Composition API.
- The navbar in `App.vue` exposes `showContact()` for the contact modal — it is called directly via `@click` in the template.
- `ion-icon` (Ionic icons) is used in the navbar brand via CDN script tag in `index.html` — it is **not** an npm package.

### Deployment
- Hosted on **Netlify**. The `_redirects` file contains `/* /index.html 200` to support Vue Router's web history mode.
- Build output goes to `/dist`. Point Netlify's publish directory there.
