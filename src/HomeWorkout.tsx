export default function HomeWorkout() {
  return (
    <section className="projects-page" aria-labelledby="project-title">
      <a className="inline-link back-link" href="/projects/">All projects</a>
      <div className="page-intro"><p className="eyebrow">PERSONAL PROJECT</p><h1 id="project-title">Home Workout Menu Builder</h1><p>A routine that fits your equipment, your goals, and your time.</p></div>
      <article className="project-card" aria-labelledby="workout-title">
        <figure className="project-preview">
          <a href="/projects/home-workout.png" target="_blank" rel="noopener noreferrer" aria-label="Open Home Workout screenshot at full size"><img src="/projects/home-workout.png" width="1440" height="1800" alt="Home Workout Menu Builder with equipment toggles, routine generation, saved menus, exercise guides, and set tracking." /></a>
          <figcaption><span>Actual app UI · Generated sample routine</span><a href="/projects/home-workout.png" target="_blank" rel="noopener noreferrer">View full size</a></figcaption>
        </figure>
        <div className="project-body">
          <div className="project-heading"><div><p className="eyebrow">PERSONAL PROJECT</p><h2 id="workout-title">From available equipment to an active workout</h2></div><div className="project-actions"><a className="button primary" href="https://home-workout-simple.vercel.app/" target="_blank" rel="noopener noreferrer">Open live app</a><a className="button secondary" href="https://github.com/EkinTanuwijaya/workout" target="_blank" rel="noopener noreferrer">View repository</a></div></div>
          <p className="project-description">A browser-based workout planner built around dumbbells, with optional weight bench and barbell support. Generate a routine, customize each exercise, follow animated movement guides, and track your sets with automatic rest countdowns.</p>
          <ul className="skill-list project-stack" aria-label="Home Workout technologies">{['React', 'TypeScript', 'Vite', 'CSS', 'SVG animation', 'Lucide icons', 'localStorage'].map(tool => <li key={tool}>{tool}</li>)}</ul>
          <div className="project-guide">
            <h3>What I built</h3>
            <dl className="project-facts">
              <div><dt>Equipment-aware generation</dt><dd>Filter compatible exercises by bench and barbell availability. Choose full body, upper, lower, push, pull, legs, or a custom muscle focus, then set a training goal and session length.</dd></div>
              <div><dt>Editable routines</dt><dd>Add, swap, remove, and reorder exercises. Adjust sets, reps, weights in kilograms or pounds, and rest periods, then copy the routine as text.</dd></div>
              <div><dt>Movement guides</dt><dd>Articulated SVG exercise animations with coaching cues, playback speed controls, and a scrubber to inspect each movement.</dd></div>
              <div><dt>Workout tracking and storage</dt><dd>Mark completed sets and use the built-in rest timer. Save routines, equipment preferences, and weight units in localStorage on the current browser, without an account or backend.</dd></div>
            </dl>
          </div>
          <div className="project-guide">
            <h3>How to use it</h3>
            <ol className="project-steps">
              <li><strong>Choose your equipment</strong><p>Keep dumbbells as the foundation and enable a bench or barbell when available.</p></li>
              <li><strong>Generate your menu</strong><p>Pick your split, strength, muscle, or conditioning goal, and a quick, standard, or extended session.</p></li>
              <li><strong>Make it yours</strong><p>Swap exercises, adjust sets and weights, and open a movement guide to review the animation and coaching cue.</p></li>
              <li><strong>Train and save</strong><p>Check off sets to start the rest timer. Save the menu to reuse it in the same browser, or copy it as text.</p></li>
            </ol>
          </div>
        </div>
      </article>
    </section>
  );
}
