import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h4 className="welcome-text gradient-text">Welcome to my Portfolio</h4>
        <h1 className="hero-title">
          Hi! I'm <span className="highlight">Abhilash Kumar Jha</span>
        </h1>
        <h2 className="hero-role">
          <span className="rocket">🚀</span>{' '}
          <TypeAnimation
            sequence={[
              'Data Analyst',
              2000,
              'Data Scientist',
              2000,
              'Full Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </h2>
        <p className="hero-description">
          I build intelligent data-driven systems and modern web applications that solve real-world problems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="glowing-shape">
          <div className="shape-inner"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
