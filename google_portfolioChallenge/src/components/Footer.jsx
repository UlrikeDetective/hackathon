import React from 'react';

const Footer = () => {
  return (
    <footer className="container" style={{ padding: '4rem 2rem', borderTop: '1px solid #e0e0e0', marginTop: '4rem' }}>
      <h3 style={{ marginBottom: '2rem', color: 'var(--stone-grey)' }}>{'> 04 // Connect'}</h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
        <div>
          <span style={{ color: 'var(--stone-grey)', display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Terminal:</span>
          <a href="mailto:herold.ulrike@gmail.com" style={{ fontSize: '1.1rem' }}>[herold.ulrike@gmail.com]</a>
        </div>
        <div>
          <span style={{ color: 'var(--stone-grey)', display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Network:</span>
          <a href="https://www.linkedin.com/in/ulrike-herold/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem' }}>[LinkedIn]</a>
        </div>
        <div>
          <span style={{ color: 'var(--stone-grey)', display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Source:</span>
          <a href="https://github.com/UlrikeDetective" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem' }}>[GitHub]</a>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: 'var(--stone-grey)', fontSize: '0.8rem', marginTop: '4rem' }}>
        <p><code>poweroff --now</code></p>
        <p style={{ marginTop: '1rem' }}>&copy; {new Date().getFullYear()} Ulrike Herold. System operational.</p>
      </div>
    </footer>
  );
};

export default Footer;
