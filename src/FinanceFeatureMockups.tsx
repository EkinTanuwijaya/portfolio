export default function FinanceFeatureMockups() {
  return <section className="project-guide" aria-labelledby="feature-previews-title">
    <p className="eyebrow">A CLOSER LOOK</p>
    <h3 id="feature-previews-title">Beyond the overview</h3>
    <p className="feature-preview-intro">A few of the everyday workflows behind the dashboard. Illustrative mockups with fictional sample data.</p>
    <div className="finance-feature-grid">
      <figure className="finance-feature">
        <div className="finance-mini" aria-label="Transaction history mockup">
          <div className="finance-mini-heading"><span>TRANSACTIONS</span><span className="finance-chip">October 2026</span></div>
          <h4>Every transaction, in view.</h4>
          <div className="finance-filters"><span>All wallets</span><span>All categories</span><span>Income &amp; expenses</span></div>
          <div className="finance-table-wrap"><table className="finance-table">
            <caption>Sample transactions · IDR</caption>
            <thead><tr><th scope="col">Transaction</th><th scope="col">Wallet</th><th scope="col">Amount</th></tr></thead>
            <tbody>
              <tr><td>Monthly salary<small>25 Oct · Income</small></td><td>Main account</td><td className="finance-income">+12.000.000</td></tr>
              <tr><td>Weekly groceries<small>24 Oct · Food &amp; dining</small></td><td>Main account</td><td>−350.000</td></tr>
              <tr><td>Train to work<small>24 Oct · Transport</small></td><td>E-wallet</td><td>−25.000</td></tr>
            </tbody>
          </table></div>
          <p className="finance-mini-foot">3 sample transactions · Amounts in IDR</p>
        </div>
        <figcaption><strong>01 / Transaction history</strong><p>Filter income and expenses by wallet, category, and date to find the details you need.</p></figcaption>
      </figure>
      <figure className="finance-feature">
        <div className="finance-mini" aria-label="Wallet balances mockup">
          <div className="finance-mini-heading"><span>YOUR WALLETS</span><span className="finance-chip">3 accounts</span></div>
          <h4>A home for every balance.</h4>
          <div className="finance-wallet-total"><small>Combined balance</small><strong>Rp 18.750.000</strong></div>
          <dl className="finance-wallets">
            <div><dt><span className="finance-wallet-icon">B</span>Main account<small>Bank account</small></dt><dd>Rp 15.000.000</dd></div>
            <div><dt><span className="finance-wallet-icon">E</span>E-wallet<small>Digital wallet</small></dt><dd>Rp 2.500.000</dd></div>
            <div><dt><span className="finance-wallet-icon">C</span>Cash<small>Cash wallet</small></dt><dd>Rp 1.250.000</dd></div>
          </dl>
        </div>
        <figcaption><strong>02 / Multiple wallets</strong><p>Keep bank, cash, and digital wallet balances together while tracking each account separately.</p></figcaption>
      </figure>
      <figure className="finance-feature">
        <div className="finance-mini" aria-label="Monthly spending report mockup">
          <div className="finance-mini-heading"><span>REPORTS &amp; INSIGHTS</span><span className="finance-chip">Monthly PDF</span></div>
          <h4>See where the month went.</h4>
          <div className="finance-report-totals"><div><small>Income</small><strong>Rp 12.000.000</strong></div><div><small>Expenses</small><strong>Rp 5.100.000</strong></div></div>
          <div className="finance-category"><span>Food &amp; dining</span><strong>40%</strong><meter min="0" max="100" value="40" aria-label="Food and dining: 40 percent of spending" /></div>
          <div className="finance-category"><span>Shopping</span><strong>25%</strong><meter min="0" max="100" value="25" aria-label="Shopping: 25 percent of spending" /></div>
          <div className="finance-category"><span>Transport</span><strong>20%</strong><meter min="0" max="100" value="20" aria-label="Transport: 20 percent of spending" /></div>
          <div className="finance-category"><span>Bills</span><strong>15%</strong><meter min="0" max="100" value="15" aria-label="Bills: 15 percent of spending" /></div>
          <p className="finance-mini-foot">Net savings Rp 6.900.000 · 57.5% of income</p>
        </div>
        <figcaption><strong>03 / Spending reports</strong><p>Compare income and expenses across reporting periods, inspect categories, and export a PDF.</p></figcaption>
      </figure>
      <figure className="finance-feature">
        <div className="finance-mini finance-receipt" aria-label="Telegram receipt extraction and confirmation mockup">
          <div className="finance-mini-heading"><span>TELEGRAM RECEIPT CAPTURE</span><span className="finance-chip">Review first</span></div>
          <h4>From receipt to record.</h4>
          <div className="finance-chat"><span className="finance-chat-label">You · Receipt photo</span><div className="finance-receipt-paper"><strong>WEEKLY GROCERIES</strong><span>24 October 2026</span><span>Receipt total <b>Rp 350.000</b></span></div></div>
          <div className="finance-chat finance-bot"><span className="finance-chat-label">Finance bot · Extracted details</span><p><strong>Rp 350.000</strong> · Expense</p><p>Food &amp; dining · Main account</p><p className="finance-review-note">Awaiting your confirmation before saving.</p></div>
        </div>
        <figcaption><strong>04 / AI-assisted receipt capture</strong><p>Send a receipt through Telegram. OCR and AI extract details for you to review before confirming the transaction.</p></figcaption>
      </figure>
    </div>
  </section>;
}
