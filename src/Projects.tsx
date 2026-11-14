export default function Projects({ featured = false }: { featured?: boolean }) {
  return <section className={featured ? 'section featured-projects' : 'projects-page'} aria-labelledby="projects-title">
    <div className="page-intro"><p className="eyebrow">{featured ? '01 / SELECTED WORK' : 'SELECTED WORK'}</p>{featured ? <h2 id="projects-title">An idea. An entire stack.</h2> : <h1 id="projects-title">Personal projects</h1>}<p>Things I build to turn everyday problems into useful tools.</p></div>
    <div className="projects-grid">
      <article className="project-card" aria-labelledby="finance-title">
        <a className="gallery-preview" href="/projects/financial-tracker/" aria-label="Explore Financial Tracker">
          <img src="/projects/financial-tracker-dashboard.png" width="1440" height="1629" loading="lazy" alt="Actual Financial Tracker dashboard showing sample balances, spending charts, and wallets." />
          <span className="preview-caption">Actual app UI · Fictional sample data</span>
        </a>
        <div className="project-body">
          <p className="eyebrow">FULLSTACK APPLICATION</p>
          <h2 id="finance-title" className="gallery-title"><a href="/projects/financial-tracker/">Financial Tracker</a></h2>
          <p className="project-description">Track wallets, income, and expenses through a web dashboard and Telegram bot, with AI receipt processing and PDF reports.</p>
          <dl className="project-facts"><div><dt>The problem</dt><dd>Everyday transactions scattered across wallets.</dd></div><div><dt>The approach</dt><dd>A unified dashboard with Telegram entry and receipt capture.</dd></div><div><dt>Deployment</dt><dd>Live on a VPS with Docker, Nginx, and GitHub Actions CI/CD.</dd></div></dl>
          <ul className="skill-list project-stack" aria-label="Main technologies"><li>Next.js</li><li>NestJS</li><li>PostgreSQL</li><li>Docker</li></ul>
          <a className="button primary project-detail-link" href="https://financetrackerfree.duckdns.org" target="_blank" rel="noopener noreferrer">Open live app <span aria-hidden="true">↗</span></a>
          <a className="inline-link project-detail-link" href="/projects/financial-tracker/">Explore the project <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    </div>
  </section>;
}
