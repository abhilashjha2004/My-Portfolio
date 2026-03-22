import React from 'react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
    </>
  );
};

export default App;
