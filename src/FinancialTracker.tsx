import FinanceFeatureMockups from './FinanceFeatureMockups';

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
            <div className="project-heading"><div><p className="eyebrow">PERSONAL PROJECT · LIVE ON VPS</p><h2 id="finance-title">Your money, at a glance</h2></div><div className="project-actions"><a className="button primary" href="https://financetrackerfree.duckdns.org" target="_blank" rel="noopener noreferrer">Open live app <span aria-hidden="true">↗</span></a><a className="button secondary" href="https://github.com/EkinTanuwijaya/financial-tracker" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a></div></div>
            <p className="project-description">A personal finance app that brings wallets, income, expenses, and reports into one place. Record transactions in the dashboard or through Telegram, extract receipt details with PaddleOCR and AI, and review spending with charts and PDF reports.</p>
            <ul className="skill-list project-stack" aria-label="Financial Tracker technologies">{['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Telegram Bot', 'PaddleOCR', 'Docker', 'Nginx', 'GitHub Actions'].map(tool => <li key={tool}>{tool}</li>)}</ul>
            <FinanceFeatureMockups />
            <div className="project-guide">
              <h3>What I built</h3>
              <dl className="project-facts">
                <div><dt>Dashboard and API</dt><dd>A Next.js dashboard backed by a modular NestJS REST API, PostgreSQL, and Prisma for wallets, categories, transactions, and reports.</dd></div>
                <div><dt>Receipt capture and Telegram</dt><dd>PaddleOCR and configurable AI providers extract transaction details from receipts. Users review Telegram transaction confirmations before saving.</dd></div>
                <div><dt>Authentication</dt><dd>Email/password and Google sign-in, HttpOnly session cookies backed by Redis, and one-time codes for Telegram account pairing.</dd></div>
                <div><dt>VPS deployment</dt><dd>Docker Compose runs the app behind Nginx over HTTPS. GitHub Actions tests the project, builds and publishes images to GHCR, and deploys over SSH with database migrations and health checks.</dd></div>
              </dl>
            </div>
            <div className="project-guide">
              <h3>How to use it</h3>
              <ol className="project-steps">
                <li><strong>Set up your wallets</strong><p>Open the live app and create an account, then add your bank, cash, or digital wallets with their starting balances.</p></li>
                <li><strong>Record everyday transactions</strong><p>Choose Add transaction, select a wallet and category, and enter the amount, description, and date.</p></li>
                <li><strong>Capture on the go</strong><p>Send <code>/link</code> to the bot in a private Telegram chat, then paste the one-time code into the dashboard’s Telegram settings within ten minutes. Send a transaction message or receipt photo and review the bot’s confirmation.</p></li>
                <li><strong>Review the bigger picture</strong><p>Compare income and expenses, explore spending categories, and export PDF reports from the dashboard or send <code>/report month</code> in Telegram.</p></li>
              </ol>
            </div>
          </div>
        </article>
      </section>
  );
}
