import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#main" aria-label="Ekin, home">ekin<span>.</span></a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close menu' : 'Menu'}</button>
      <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        {['Experience', 'Education', 'Skills', 'Contact'].map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">JAKARTA, INDONESIA</p>
          <h1 id="hero-title">Ekin Tanuwijaya<span>Fullstack Engineer</span></h1>
          <p className="hero-description">I build analytics dashboards with <strong>React and TypeScript</strong> at <strong>Samsung R&D Indonesia.</strong></p>
          <p className="hero-support">My work spans dashboard interfaces, UI redesigns, and features that help people explore and manage data.</p>
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
            <div><dt>Current role</dt><dd>Fullstack Engineer</dd></div>
            <div><dt>Company</dt><dd>Samsung R&D Indonesia</dd></div>
            <div><dt>Core tools</dt><dd>React · TypeScript</dd></div>
            <div><dt>Education</dt><dd>Computer Science, BINUS</dd></div>
          </dl>
        </aside>
      </section>
      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="section-heading"><p className="eyebrow">01 / EXPERIENCE</p><h2 id="experience-title">My work at Samsung</h2><p>Two roles, from internship to fullstack engineering.</p></div>
        <div className="company-card">
          <div className="company-heading"><span className="company-symbol" aria-hidden="true">S</span><div><h3>Samsung R&D Institute Indonesia</h3><p>Jakarta, Indonesia</p></div></div>
          <article className="role" aria-labelledby="current-role">
            <div className="role-heading"><h4 id="current-role">Fullstack Engineer</h4><p>April 2024 – Present</p></div>
            <p className="role-summary">Developing and maintaining analytics dashboards with React and TypeScript.</p>
            <p className="contributions-label">Key contributions</p>
            <ul className="contributions">
              <li><strong>Dashboard UI v2 redesign</strong><p>Led the redesign to improve usability, visual consistency, and the overall user experience.</p></li>
              <li><strong>Analytics dashboard development</strong><p>Built new pages to support business insights. Maintained performance and resolved API failures, missing data, and user-reported bugs.</p></li>
              <li><strong>Bulk updates and CSV exports</strong><p>Implemented bulk updates and CSV export functionality with a RabbitMQ-based queueing system.</p></li>
              <li><strong>AI-powered search</strong><p>Implemented an AI-powered search feature within the dashboard.</p></li>
            </ul>
          </article>
          <article className="role internship" aria-labelledby="intern-role">
            <div className="role-heading"><h4 id="intern-role">Frontend Developer Intern</h4><p>March 2023 – February 2024</p></div>
            <ul className="plain-list"><li>Developed dashboard interfaces using React and TypeScript.</li><li>Built PostgreSQL and AWS Athena queries for dashboard data and analysis.</li><li>Gathered and cleaned mobile phone specifications for dataset creation.</li></ul>
          </article>
        </div>
        <article className="additional-experience"><div><p className="eyebrow">ADDITIONAL EXPERIENCE</p><h3>Creative and Design</h3><p className="organization">HIMTI Bina Nusantara · January 2021 – February 2023</p></div><p>Designed Instagram story countdowns, virtual backgrounds, and NFT profiles, and contributed to event documentation.</p></article>
      </section>
      <section id="education" className="section" aria-labelledby="education-title">
        <div className="section-heading"><p className="eyebrow">02 / EDUCATION</p><h2 id="education-title">Computer Science at BINUS</h2></div>
        <div className="education-card"><div><h3>Bachelor of Computer Science</h3><p className="organization">Bina Nusantara University, Jakarta</p><p>2020 – 2024</p></div><div className="gpa"><span>GPA</span><strong>3.94 <span>/ 4.0</span></strong></div><p className="education-detail">Studied algorithms, data structures, database systems, software development, web programming, and operating systems.</p></div>
      </section>
      <section id="skills" className="section" aria-labelledby="skills-title">
        <div className="section-heading"><p className="eyebrow">03 / SKILLS</p><h2 id="skills-title">Tools and technologies</h2></div>
        <div className="skills-grid"><div><h3>Frontend</h3><ul className="skill-list">{['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].map(skill => <li key={skill}>{skill}</li>)}</ul></div><div><h3>Data and programming</h3><ul className="skill-list">{['PostgreSQL', 'AWS Athena', 'Java'].map(skill => <li key={skill}>{skill}</li>)}</ul></div><div><h3>Languages</h3><p>Indonesian (native)<br/>English</p></div></div>
      </section>
      <section id="contact" className="contact" aria-labelledby="contact-title"><p className="eyebrow">04 / CONTACT</p><h2 id="contact-title">Let's get in touch.</h2><p>For opportunities or a conversation about my work, send me an email.</p><a className="contact-email" href="mailto:ekin.tanuwijaya@gmail.com">ekin.tanuwijaya@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://www.linkedin.com/in/ekintanuwijaya/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/CV_Ekin_Tanuwijaya_2026.pdf" download>Download résumé ↓</a></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Ekin Tanuwijaya</span><a href="#main">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
