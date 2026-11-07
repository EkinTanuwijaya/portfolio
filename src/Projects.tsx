export default function Projects() {
  return <section className="projects-page" aria-labelledby="projects-title">
    <div className="page-intro"><p className="eyebrow">SELECTED WORK</p><h1 id="projects-title">Personal projects</h1><p>Things I build to turn everyday problems into useful tools.</p></div>
    <div className="projects-grid">
      <article className="project-card" aria-labelledby="finance-title">
        <a className="gallery-preview" href="/projects/financial-tracker/" aria-label="Explore Financial Tracker">
          <img src="/projects/financial-tracker-dashboard.png" width="1440" height="1120" alt="Financial Tracker dashboard mockup showing balances, spending charts, and wallets." />
        </a>
        <div className="project-body">
          <p className="eyebrow">PERSONAL FINANCE / WEB APP</p>
          <h2 id="finance-title" className="gallery-title"><a href="/projects/financial-tracker/">Financial Tracker</a></h2>
          <p className="project-description">Track wallets, income, and expenses in one dashboard, with a Telegram bot for capturing transactions on the go.</p>
          <ul className="skill-list project-stack" aria-label="Main technologies"><li>Next.js</li><li>NestJS</li><li>PostgreSQL</li></ul>
          <a className="inline-link project-detail-link" href="/projects/financial-tracker/">Explore project <span aria-hidden="true">&rarr;</span></a>
        </div>
      </article>
    </div>
  </section>;
}
