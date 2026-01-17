import React from 'react';

const Log = () => {
  return (
    <section id="logs" className="section-padding">
      <h3 style={{ marginBottom: '2rem', color: 'var(--stone-grey)' }}>{'> 03 // The_Log'}</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>[Current Experiments]</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--accent-terracotta)' }}>[2026-01-10]</strong> Audit Mode. 
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Performing a massive personal data review of 2025 (metadata, logs, and media assets) with the goal of synthesizing it all into a unified personal dashboard.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--accent-terracotta)' }}>[In_Progress]</strong> Compiling the 2025 Municipal Budget Report. 
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>High-stakes documentation and data visualization for the Leipzig local councils.</p>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--accent-terracotta)' }}>[Maintenance]</strong> GitHub workflow optimization. 
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Sanitized local environments, deprecated stagnant projects, and unified my virtual environment strategy.</p>
            </li>
            <li>
              <strong style={{ color: 'var(--accent-terracotta)' }}>[Side_Quest]</strong> Bypassed BBC Sounds geo-block. 
              <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Wrote a scraping script to extract playlists from The Chillest Hour and automate the transition to Spotify.</p>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>[System_Updates]</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent-olive)' }}>[2025_Completed]</span>: Certified in Full Stack Web Development and Data Security (Coursera).
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent-olive)' }}>[Current_Stack]</span>: Building active projects using Django, Python, R, and Postgres.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent-olive)' }}>[Research]</span>: Monitoring daily shifts in the AI and data engineering landscape.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Log;
