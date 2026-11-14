# Ekin Tanuwijaya — Portfolio

React, TypeScript, Vite, and plain CSS. Content and the downloadable resume are based on the updated November 2026 CV, including MCP backend services, automated reporting, AI pull request reviews, and Airflow pipelines. Samsung contributions are grouped under the corresponding employment role, followed by education, skills, and contact information.

Navigation uses three pages: About (`/`), Projects (`/projects/`), and Contact (`/contact/`). Experience, education, and skills remain section links within About. The project gallery links to individual detail pages, starting with Financial Tracker at `/projects/financial-tracker/`.

Financial Tracker links to the live VPS-hosted app at https://financetrackerfree.duckdns.org from its gallery card and detail page. Project details cover AI receipt processing, PDF reports, authentication, Telegram pairing, and Docker/GitHub Actions deployment, based on its local source. The overview screenshot is `public/projects/financial-tracker-dashboard.png`; `public/projects/financial-tracker-dashboard.html` opens it in a standalone viewer. No finance backend is required to run the portfolio. Vite builds all page entries so direct links work on static hosting.

The Financial Tracker detail page displays all five screenshots in one carousel in `src/FinanceFeatureMockups.tsx`: overview, transactions, wallets, categories, and reports. Controls include previous/next buttons, slide indicators, arrow keys, and horizontal touch swipes. The carousel wraps at either end and links each screenshot at full size. All five screenshots are rendered from the unmodified components, layout, styles, and icons in `D:/Belajar/Financial-Tracker/apps/dashboard/src`, using a temporary Next.js preview and browser-injected fictional API responses. The portfolio does not recreate the dashboard UI. The sample account and financial data are fictional. To refresh the images, render the current dashboard source with sample API data and capture `/dashboard`, `/dashboard/transactions`, `/dashboard/wallets`, `/dashboard/categories`, and `/dashboard/reports` at a 1440-pixel viewport width.

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
