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
      <a className="wordmark" href="/" aria-label="Ekin, home">ekin<span>.</span></a>
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
          <p className="eyebrow">JAKARTA, INDONESIA</p>
          <h1 id="hero-title">Ekin Tanuwijaya<span>Fullstack Developer</span></h1>
          <p className="hero-description">I build enterprise analytics platforms and backend services at <strong>Samsung R&D Institute Indonesia.</strong></p>
          <p className="hero-support">My work spans React and TypeScript interfaces, AI-powered tools, data pipelines, and workflow automation. I collaborate across engineering teams to build maintainable software and improve application reliability.</p>
          <div className="hero-actions">
            <a className="button primary" href="/CV_Ekin_Tanuwijaya_2026.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
            <a className="button secondary" href="#experience">View experience <span aria-hidden="true">↓</span></a>
          </div>
          <a className="inline-link" href="https://www.linkedin.com/in/ekintanuwijaya/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <aside className="profile-card" aria-label="Professional overview">
          <div className="profile-monogram" aria-hidden="true">ET<span>.</span></div>
          <p className="card-label">AT A GLANCE</p>
          <dl>
            <div><dt>Current role</dt><dd>Fullstack Developer</dd></div>
            <div><dt>Company</dt><dd>Samsung R&D Institute Indonesia</dd></div>
            <div><dt>Core tools</dt><dd>React · TypeScript · PostgreSQL</dd></div>
            <div><dt>Education</dt><dd>Computer Science, Bina Nusantara University</dd></div>
          </dl>
        </aside>
      </section>
      <nav className="section-links" aria-label="About sections"><span>ON THIS PAGE</span><a href="#experience">Experience</a><a href="#education">Education</a><a href="#skills">Skills</a></nav>
      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="section-heading"><p className="eyebrow">01 / EXPERIENCE</p><h2 id="experience-title">My work at Samsung</h2><p>Two roles, from internship to fullstack engineering.</p></div>
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
        <div className="section-heading"><p className="eyebrow">02 / EDUCATION</p><h2 id="education-title">Computer Science at Bina Nusantara University</h2></div>
        <div className="education-card"><div><h3>Bachelor of Computer Science</h3><p className="organization">Bina Nusantara University, Jakarta</p><p>2020 – 2024</p></div><div className="gpa"><span>GPA</span><strong>3.94 <span>/ 4.0</span></strong></div><p className="education-detail">Studied algorithms, data structures, database systems, software development, web programming, and operating systems.</p></div>
      </section>
      <section id="skills" className="section" aria-labelledby="skills-title">
        <div className="section-heading"><p className="eyebrow">03 / SKILLS</p><h2 id="skills-title">Tools and technologies</h2></div>
        <div className="skills-grid">
          {toolGroups.map(group => <article className="tool-card" key={group.title}>
            <div className="tool-card-heading"><span className="tool-icon" aria-hidden="true">{group.icon}</span><h3>{group.title}</h3></div>
            <p>{group.description}</p>
            <ul className="skill-list" aria-label={group.title}>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </article>)}
        </div>
        <div className="spoken-languages"><h3>Languages I speak</h3><p>Indonesian (native) <span aria-hidden="true">·</span> English</p></div>
      </section>

      </>}
    </main>
    <footer><span>© {new Date().getFullYear()} Ekin Tanuwijaya</span><a href="#main">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
