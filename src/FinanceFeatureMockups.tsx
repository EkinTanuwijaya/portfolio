const previews = [
  { page: 'transactions', height: 1176, title: 'Transaction history', description: 'Filter transactions by wallet, category, and date.', alt: 'Actual Financial Tracker transactions page showing its filters, summary cards, and transaction table.' },
  { page: 'wallets', height: 1120, title: 'Wallets', description: 'View account balances and manage bank, cash, and digital wallets.', alt: 'Actual Financial Tracker wallets page showing account balances and wallet management.' },
  { page: 'categories', height: 1120, title: 'Categories', description: 'Manage income and expense categories and inspect spending by category.', alt: 'Actual Financial Tracker categories page showing income and expense categories.' },
  { page: 'reports', height: 1611, title: 'Reports', description: 'Compare reporting periods, review spending, and export a PDF.', alt: 'Actual Financial Tracker reports page showing reporting periods, spending insights, and PDF export.' },
];

export default function FinanceFeatureMockups() {
  return <section className="project-guide" aria-labelledby="feature-previews-title">
    <p className="eyebrow">INSIDE THE APP</p>
    <h3 id="feature-previews-title">Dashboard features</h3>
    <p className="feature-preview-intro">Screenshots rendered from the Financial Tracker source code with fictional sample data. Open any image to view it at full size.</p>
    <div className="finance-feature-grid">
      {previews.map(({ page, height, title, description, alt }) => <figure className="finance-feature" key={page}>
        <a className="finance-feature-image" href={`/projects/financial-tracker-${page}.png`} target="_blank" rel="noopener noreferrer" aria-label={`View ${title.toLowerCase()} screenshot at full size`}>
          <img src={`/projects/financial-tracker-${page}.png`} width="1440" height={height} loading="lazy" alt={alt} />
        </a>
        <figcaption><strong>{title}</strong><p>{description}</p></figcaption>
      </figure>)}
    </div>
  </section>;
}
