import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Log from './components/Log';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Log />
      </main>
      <Footer />
    </div>
  );
}

export default App;
