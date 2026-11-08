import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Projects from './Projects';
import FinancialTracker from './FinancialTracker';
import Contact from './Contact';

const toolGroups = [
  { title: 'Frontend & languages', icon: '</>', description: 'Dashboard interfaces and programming languages', tools: ['React', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML', 'CSS'] },
  { title: 'Backend & integration', icon: '↔', description: 'Services, APIs, and asynchronous processing', tools: ['Backend services', 'REST API integration', 'Model Context Protocol (MCP)', 'RabbitMQ'] },
  { title: 'Data & workflows', icon: '≋', description: 'Databases, analytics, and pipeline orchestration', tools: ['PostgreSQL', 'AWS Athena', 'Apache Airflow', 'Data pipelines'] },
  { title: 'AI & automation', icon: '▦', description: 'AI-powered workflows and delivery automation', tools: ['Large language models (LLMs)', 'Langflow', 'GitHub Actions', 'CI/CD automation'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');
  const isProjectsPage = path === '/projects' || path === '/projects/financial-tracker';
  const isContactPage = path === '/contact';
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Ekin, home">ekin<span>_</span></a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close menu' : 'Menu'}</button>
      <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        {[
          { label: 'About', href: '/', active: !isProjectsPage && !isContactPage },
          { label: 'Projects', href: '/projects/', active: isProjectsPage },
          { label: 'Contact', href: '/contact/', active: isContactPage },
        ].map(({ label, href, active }) => <a key={label} href={href} aria-current={active ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
    </header>
    <main id="main">
      {path === '/projects/financial-tracker' ? <FinancialTracker /> : isProjectsPage ? <Projects /> : isContactPage ? <Contact /> : <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">EKIN TANUWIJAYA <span aria-hidden="true">/</span> FULLSTACK DEVELOPER</p>
          <h1 id="hero-title">From interface<br />to <span>infrastructure.</span></h1>
          <p className="hero-description">I build enterprise analytics platforms and backend services at <strong>Samsung R&D Institute Indonesia.</strong></p>
          <p className="hero-support">React interfaces. Backend systems. AI-powered workflows. I connect the pieces that turn complex requirements into useful software.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="button secondary" href="/CV_Ekin_Tanuwijaya_2026.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-location">Based in Jakarta, Indonesia</p>
        </div>
        <aside className="developer-card" aria-label="Engineering focus">
          <div className="editor-title"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>developer.ts</span><span className="editor-language">TS</span></div>
          <div className="editor-code"><span className="code-comment">// A little about how I work</span><br /><span className="code-keyword">const</span> developer = {'{'}<br />
            <span className="code-indent">name: <span className="code-string">'Ekin Tanuwijaya'</span>,</span><br />
            <span className="code-indent">focus: [</span><br />
            <span className="code-indent deep"><span className="code-string">'Interfaces & APIs'</span>,</span><br />
            <span className="code-indent deep"><span className="code-string">'AI & automation'</span>,</span><br />
            <span className="code-indent deep"><span className="code-string">'Data pipelines'</span></span><br />
            <span className="code-indent">],</span><br />
            <span className="code-indent">approach: <span className="code-string">'Build. Learn. Refine.'</span></span><br />
            {'}'};
          </div>
          <div className="editor-footer"><span>Frontend ↔ Backend</span><a href="https://www.linkedin.com/in/ekintanuwijaya/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
        </aside>
      </section>
      <div className="career-snapshot" aria-label="Career highlights">
        <div><span className="snapshot-label">CURRENTLY BUILDING AT</span><strong>Samsung R&D Indonesia</strong></div>
        <div><span className="snapshot-label">ENGINEERING ACROSS</span><strong>Frontend · Backend · AI</strong></div>
        <div><span className="snapshot-label">COMPUTER SCIENCE GRADUATE</span><strong>3.94 <span>/ 4.0 GPA</span></strong></div>
      </div>
      <nav className="section-links" aria-label="About sections"><span>EXPLORE</span><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a></nav>
      <div id="work"><Projects featured /></div>
      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="section-heading"><p className="eyebrow">02 / EXPERIENCE</p><h2 id="experience-title">Built in the<br />real world.</h2><p>From frontend intern to fullstack developer at Samsung R&D Institute Indonesia.</p><a className="inline-link" href="/CV_Ekin_Tanuwijaya_2026.pdf" download>Get the full résumé ↓</a></div>
        <div className="company-card">
          <div className="company-heading"><span className="company-symbol" aria-hidden="true">S</span><div><h3>Samsung R&D Institute Indonesia</h3><p>Jakarta, Indonesia</p></div></div>
          <article className="role" aria-labelledby="current-role">
            <div className="role-heading"><h4 id="current-role">Fullstack Developer</h4><p>April 2024 – Present</p></div>
            <p className="role-summary">Developing enterprise analytics platforms, backend services, and automation to help internal stakeholders access, analyze, and manage business-critical data.</p>
            <p className="contributions-label">Key contributions</p>
            <ul className="contributions">
              <li><strong>Enterprise analytics dashboards</strong><p>Developed and enhanced React and TypeScript dashboards, including bulk data updates, CSV exports with RabbitMQ-based asynchronous processing, and AI-powered search.</p></li>
              <li><strong>Automated email reporting</strong><p>Integrated the internal mailing system to support scheduled report delivery and on-demand email notifications.</p></li>
              <li><strong>MCP backend services</strong><p>Implemented the Model Context Protocol to connect AI-powered applications with backend tools through a standardized integration.</p></li>
              <li><strong>AI-powered pull request reviews</strong><p>Built a review workflow with GitHub Actions, large language models, and Langflow to automate code reviews and support code quality improvements.</p></li>
              <li><strong>Data pipeline orchestration</strong><p>Developed and orchestrated Apache Airflow pipelines to automate data processing and support analytics requirements.</p></li>
              <li><strong>Frontend and backend collaboration</strong><p>Worked across engineering teams to deliver scalable, maintainable features aligned with internal business requirements.</p></li>
            </ul>
          </article>
          <article className="role internship" aria-labelledby="intern-role">
            <div className="role-heading"><h4 id="intern-role">Frontend Developer Intern</h4><p>March 2023 – February 2024</p></div>
            <ul className="plain-list"><li>Developed dashboard interfaces using React and TypeScript.</li><li>Built PostgreSQL and AWS Athena queries for dashboard data and analysis.</li><li>Gathered and cleaned mobile phone specifications for dataset creation.</li></ul>
          </article>
        </div>
      </section>
      <section id="education" className="section" aria-labelledby="education-title">
        <div className="section-heading"><p className="eyebrow">03 / EDUCATION</p><h2 id="education-title">A strong foundation.</h2></div>
        <div className="education-card"><div><h3>Bachelor of Computer Science</h3><p className="organization">Bina Nusantara University, Jakarta</p><p>2020 – 2024</p></div><div className="gpa"><span>GPA</span><strong>3.94 <span>/ 4.0</span></strong></div><p className="education-detail">Studied algorithms, data structures, database systems, software development, web programming, and operating systems.</p></div>
      </section>
      <section id="skills" className="section" aria-labelledby="skills-title">
        <div className="section-heading"><p className="eyebrow">04 / TOOLKIT</p><h2 id="skills-title">The tools behind the work.</h2><p>From the first interaction to the data behind it.</p></div>
        <div className="skills-grid">
          {toolGroups.map(group => <article className="tool-card" key={group.title}>
            <div className="tool-card-heading"><span className="tool-icon" aria-hidden="true">{group.icon}</span><h3>{group.title}</h3></div>
            <p>{group.description}</p>
            <ul className="skill-list" aria-label={group.title}>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </article>)}
        </div>
        <div className="spoken-languages"><h3>Languages I speak</h3><p>Indonesian (native) <span aria-hidden="true">·</span> English</p></div>
      </section>
      <Contact compact />
      </>}
    </main>
    <footer><span>© {new Date().getFullYear()} Ekin Tanuwijaya</span><a href="#main">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
