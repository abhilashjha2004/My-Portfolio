import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title gradient-text">Experience</h2>
      <div className="experience-container">
        <div className="experience-card glass-card">
          <div className="experience-header">
            <h3>Data Analytics Intern</h3>
            <span className="experience-company">Infosys Springboard</span>
            <span className="experience-date">Feb 2026 – Present</span>
          </div>
          <ul className="experience-list">
            <li>Working on HotelRevAI – AI-driven revenue analysis for hotels</li>
            <li>Analyzing KPIs like ADR, RevPAR, and Occupancy Rate</li>
            <li>Performing data cleaning and EDA using Python and Excel</li>
            <li>Building interactive dashboards in Power BI</li>
            <li>Applying forecasting techniques for insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
