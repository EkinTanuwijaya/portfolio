import { useRef, useState } from 'react';

const previews = [
  { page: 'dashboard', height: 1629, title: 'Overview', description: 'Balances, cash flow, spending categories, and recent activity in one dashboard.', alt: 'Actual Financial Tracker overview showing balances, cash flow, spending charts, recent transactions, and wallets.' },
  { page: 'transactions', height: 1176, title: 'Transaction history', description: 'Filter transactions by wallet, category, and date.', alt: 'Actual Financial Tracker transactions page showing its filters, summary cards, and transaction table.' },
  { page: 'wallets', height: 1120, title: 'Wallets', description: 'View account balances and manage bank, cash, and digital wallets.', alt: 'Actual Financial Tracker wallets page showing account balances and wallet management.' },
  { page: 'categories', height: 1120, title: 'Categories', description: 'Manage income and expense categories and inspect spending by category.', alt: 'Actual Financial Tracker categories page showing income and expense categories.' },
  { page: 'reports', height: 1611, title: 'Reports', description: 'Compare reporting periods, review spending, and export a PDF.', alt: 'Actual Financial Tracker reports page showing reporting periods, spending insights, and PDF export.' },
];

export default function FinanceFeatureMockups() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const preview = previews[active];
  const changeSlide = (offset: number) => setActive(index => (index + offset + previews.length) % previews.length);

  return <section className="finance-carousel" aria-roledescription="carousel" aria-labelledby="feature-previews-title" onKeyDown={event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      changeSlide(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }}>
    <p className="eyebrow">INSIDE THE APP</p>
    <h3 id="feature-previews-title">Dashboard features</h3>
    <p className="feature-preview-intro">Actual app UI · Fictional sample data. Browse the screens or swipe on mobile.</p>
    <div className="finance-carousel-stage" onTouchStart={event => {
      touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }} onTouchCancel={() => { touchStart.current = null; }} onTouchEnd={event => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start || !event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX - start.x;
      const dy = event.changedTouches[0].clientY - start.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) changeSlide(dx < 0 ? 1 : -1);
    }}>
      <img src={`/projects/financial-tracker-${preview.page}.png`} width="1440" height={preview.height} alt={preview.alt} />
    </div>
    <div className="finance-carousel-controls">
      <button type="button" className="finance-carousel-arrow" onClick={() => changeSlide(-1)} aria-label="Previous screenshot">←</button>
      <div className="finance-carousel-dots" aria-label="Choose a screenshot">
        {previews.map(({ page, title }, index) => <button type="button" key={page} aria-label={`Show ${title.toLowerCase()}`} aria-pressed={index === active} onClick={() => setActive(index)}><span /></button>)}
      </div>
      <button type="button" className="finance-carousel-arrow" onClick={() => changeSlide(1)} aria-label="Next screenshot">→</button>
    </div>
    <div className="finance-carousel-caption" aria-live="polite" aria-atomic="true">
      <p><span>{active + 1} / {previews.length}</span><strong>{preview.title}</strong></p>
      <p>{preview.description}</p>
    </div>
    <a className="inline-link finance-carousel-fullsize" href={`/projects/financial-tracker-${preview.page}.png`} target="_blank" rel="noopener noreferrer">View full screenshot <span aria-hidden="true">↗</span></a>
  </section>;
}
