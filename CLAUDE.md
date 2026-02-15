# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Dev server (port 3000)
npm run build   # Production build
npm test        # Jest in watch mode
```

No dedicated lint script exists. ESLint is configured via `eslintConfig` in package.json (react-app preset). Prettier is configured in `.prettierrc` (no semicolons, single quotes, trailing commas ES5, 2-space indent).

## Architecture

React 18 SPA (Create React App) deployed on Netlify. Personal portfolio site with three pages.

**Routing** (src/App.js): React Router v6 with nested routes.
- `/` — Layout wrapper (Sidebar + Outlet) containing Home (index) and `/contact`
- `/projects` — Standalone page (renders its own Sidebar)

**Component structure** (src/components/):
- `Layout/` — Wraps Sidebar + child routes via `<Outlet/>`
- `Sidebar/` — Persistent nav bar with page links and social icons; responsive hamburger menu
- `Home/` — Hero section with AnimatedLetters + Logo sub-component
- `Projects/` — Card gallery using intersection observer for scroll animations; data from `src/data/projectInfo.json`
- `Contact/` — Form that sends email via EmailJS (`@emailjs/browser`)
- `AnimatedLetters/` — Reusable staggered letter animation component

**Styling**: SASS (`.scss` files co-located with components), animate.css, custom fonts in `src/assets/fonts/`.

## Environment Variables

EmailJS requires three `REACT_APP_*` env vars (defined in `.env`, gitignored):
- `REACT_APP_EMAIL_SERVICEID`
- `REACT_APP_EMAIL_TAMPLATEID`
- `REACT_APP_EMAIL_PUBLICID`

## Deployment

Netlify with SPA fallback (`public/_redirects`: `/* /index.html 200`). Build output is the `build/` directory.
