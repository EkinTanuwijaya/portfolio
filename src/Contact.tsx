export default function Contact({ compact = false }: { compact?: boolean }) {
  return (
      <section id="contact" className={compact ? 'contact contact-banner' : 'contact contact-page'} aria-labelledby="contact-title"><p className="eyebrow">HAVE SOMETHING IN MIND?</p>{compact ? <h2 id="contact-title">Let's build what's next.</h2> : <h1 id="contact-title">Let's get in touch.</h1>}<p>For opportunities or a conversation about my work, send me an email.</p><a className="contact-email" href="mailto:ekin.tanuwijaya@gmail.com">ekin.tanuwijaya@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://www.linkedin.com/in/ekintanuwijaya/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/CV_Ekin_Tanuwijaya_2026.pdf" download>Download résumé ↓</a></div></section>
  );
}
