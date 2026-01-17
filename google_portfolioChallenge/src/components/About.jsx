import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <h3 style={{ marginBottom: '2rem', color: 'var(--stone-grey)' }}>{'> 00 // System_Overview'}</h3>
      
      <div style={{ 
        borderLeft: '2px solid var(--accent-terracotta)', 
        paddingLeft: '2rem',
        marginLeft: '1rem',
        position: 'relative'
      }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{'// Initializing about_me.sh...'}</p>
        
        <div style={{ maxWidth: '800px' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I am a developer who values technical truth over optics. I don’t believe in "faking it"—I believe in the grit required to make a project actually work. My approach is defined by a refusal to accept the first "no" and a dry sense of humor that keeps me grounded when a system is failing.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            While others chase "shiny" frameworks, I find my flow state in the architecture of complex systems and the meditative process of data cleaning. To me, a messy dataset isn’t a chore; it’s a puzzle. I combine the curiosity of a researcher with the precision of a Project Manager to ensure that every line of code serves a purpose and every milestone is hit.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            I don't just solve problems; I optimize the process of solving them.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent-olive)', marginBottom: '1rem' }}>System Preferences:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>* <strong>Logic over Fluff:</strong> Direct communication.</li>
                <li style={{ marginBottom: '0.5rem' }}>* <strong>Efficiency:</strong> Practicality &gt; Complexity.</li>
                <li style={{ marginBottom: '0.5rem' }}>* <strong>The "Win":</strong> Order from chaos.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-olive)', marginBottom: '1rem' }}>Operational Status:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>* <strong>Philosophy:</strong> Less code, more impact.</li>
                <li style={{ marginBottom: '0.5rem' }}>* <strong>Focus:</strong> Python, Security, CLI optimization.</li>
                <li style={{ marginBottom: '0.5rem' }}>* <strong>Driven by:</strong> "Type-2 Fun" of debugging.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
