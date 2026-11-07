# Ekin Tanuwijaya — Portfolio

React, TypeScript, Vite, and plain CSS. Content and the downloadable resume are based on the updated November 2026 CV, including MCP backend services, automated reporting, AI pull request reviews, and Airflow pipelines. Samsung contributions are grouped under the corresponding employment role, followed by education, skills, and contact information.

Navigation uses three pages: About (`/`), Projects (`/projects/`), and Contact (`/contact/`). Experience, education, and skills remain section links within About. The project gallery links to individual detail pages, starting with Financial Tracker at `/projects/financial-tracker/`.

Financial Tracker includes a static dashboard mockup, fictional sample data, and a usage guide based on its local source. The editable mockup is `public/projects/financial-tracker-dashboard.html`; its screenshot is `public/projects/financial-tracker-dashboard.png` (1440 x 1120). No finance backend is required. Vite builds all page entries so direct links work on static hosting.

## Development

```sh
npm install
npm run dev
```

## Validation and production

```sh
npm test
npm run build
npm run preview
```

Edit profile content in `src/main.tsx`, the gallery in `src/Projects.tsx`, project details in `src/FinancialTracker.tsx`, contact details in `src/Contact.tsx`, and design in `src/style.css`. For another project, add its detail component, HTML entry, route in `src/main.tsx`, build input in `vite.config.js`, and gallery card. The downloadable résumé lives in `public/`. Google Fonts are optional; system fonts remain available when offline. Update employment dates when they change.
