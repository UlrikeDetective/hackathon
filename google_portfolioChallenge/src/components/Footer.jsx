import React from 'react';
import CatAnimation from './CatAnimation';

const Footer = () => {
  return (
    <footer className="container" style={{ padding: '4rem 2rem', borderTop: '1px solid #e0e0e0', marginTop: '4rem' }}>
      <h3 style={{ marginBottom: '2rem', color: 'var(--stone-grey)' }}>{'> 04 // Connect'}</h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
        <div>
          <span style={{ color: 'var(--stone-grey)', display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Terminal:</span>
          <a href="mailto:herold.ulrike@gmail.com" style={{ 
            fontSize: '1rem', 
            padding: '0.6rem 1.2rem', 
            border: '1px solid var(--text-color)',
            display: 'inline-block',
            marginTop: '0.2rem'
          }}>
            [ Send me a message ]
          </a>
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

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '2rem', 
        marginTop: '4rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'right', color: 'var(--stone-grey)', fontSize: '0.8rem' }}>
          <p><code>poweroff --now</code></p>
          <p style={{ marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} Ulrike Herold. System operational.</p>
        </div>
        <CatAnimation />
      </div>
    </footer>
  );
};

export default Footer;
