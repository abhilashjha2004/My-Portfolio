import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title gradient-text">About Me</h2>
      <div className="about-content glass-card">
        <div className="about-text">
          <p>
            Hi, I am <strong>Abhilash Kumar Jha</strong>, a passionate Computer Science student specializing in Data Analytics, Full Stack Development, and DevOps.
          </p>
          <p>
            I enjoy transforming raw data into meaningful insights and building scalable applications that create real impact. I am highly motivated, detail-oriented, and always eager to learn new technologies.
          </p>
          <p>
            Currently, I am working as a Data Analytics Intern at Infosys Springboard, where I analyze hotel revenue data and develop interactive dashboards for business decision-making.
          </p>
          <a href="/cv.pdf" className="btn-primary download-btn" download>
            Download CV
          </a>
        </div>
        <div className="about-image-container">
          <div className="about-image-glow"></div>
          <div className="about-image">
            <img src="/boy.png" alt="Boy coding" className="floating-boy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
