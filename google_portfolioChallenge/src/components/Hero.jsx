import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "> Hello, I'm Ulrike.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem', color: 'var(--text-color)' }}>
        {text}<span className="cursor"></span>
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Systems Engineer in training. Data Architect in the making.
      </h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--accent-olive)', fontStyle: 'italic' }}>
        "Efficiency is quiet. Logic is loud."
      </p>
    </section>
  );
};

export default Hero;
