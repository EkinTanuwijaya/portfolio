export default function FinancialTracker() {
  return (
      <section className="projects-page" aria-labelledby="project-title">
        <a className="inline-link back-link" href="/projects/">&larr; All projects</a>
        <div className="page-intro"><p className="eyebrow">PERSONAL PROJECT</p><h1 id="project-title">Financial Tracker</h1><p>A little more financial clarity, from a dashboard or a Telegram chat.</p></div>
        <article className="project-card" aria-labelledby="finance-title">
          <figure className="project-preview">
            <a href="/projects/financial-tracker-dashboard.png" target="_blank" rel="noopener noreferrer" aria-label="Open Financial Tracker dashboard screenshot at full size">
              <img src="/projects/financial-tracker-dashboard.png" width="1440" height="1120" loading="lazy" alt="Financial Tracker dashboard mockup with rupiah balances, income and expenses, spending categories, recent transactions, and three wallets." />
            </a>
            <figcaption>Dashboard mockup · Fictional sample data <a href="/projects/financial-tracker-dashboard.png" target="_blank" rel="noopener noreferrer">View full screenshot ↗</a></figcaption>
          </figure>
          <div className="project-body">
            <div className="project-heading"><div><p className="eyebrow">PERSONAL PROJECT</p><h2 id="finance-title">Your money, at a glance</h2></div><a className="button secondary" href="https://github.com/EkinTanuwijaya/financial-tracker" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a></div>
            <p className="project-description">A personal finance app that brings wallets, income, expenses, and reports into one place. A Telegram bot supports transaction entry and receipt capture, while the dashboard makes spending patterns easier to understand.</p>
            <ul className="skill-list project-stack" aria-label="Financial Tracker technologies">{['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Telegram Bot'].map(tool => <li key={tool}>{tool}</li>)}</ul>
            <div className="project-guide">
              <h3>How to use it</h3>
              <ol className="project-steps">
                <li><strong>Set up your wallets</strong><p>Create an account in the app, then add your bank, cash, or digital wallets with their starting balances.</p></li>
                <li><strong>Record everyday transactions</strong><p>Choose Add transaction, select a wallet and category, and enter the amount, description, and date.</p></li>
                <li><strong>Capture on the go</strong><p>Link Telegram from the sidebar using the ID returned by <code>/wallets</code>. Send a transaction message or receipt photo and review the bot’s confirmation.</p></li>
                <li><strong>Review the bigger picture</strong><p>Choose a month or All time to compare income and expenses, explore spending categories, and export reports as a PDF.</p></li>
              </ol>
            </div>
          </div>
        </article>
      </section>
  );
}
