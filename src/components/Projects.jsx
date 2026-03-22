import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "RoadCrashGuard",
      description: "Road Accident Analysis & Safety Recommendation System. Identified accident-prone zones using geospatial data and provided safety recommendations.",
      tech: ["Python", "Pandas", "NumPy", "Folium", "Geopy", "Streamlit", "Plotly"],
      duration: "1 months",
      github: "https://github.com/abhilashjha2004/RoadCrashGuard-Location-Based-Road-Accident-Analysis-Safety-Recommendation-System",
      view: "https://roadcrashguard.streamlit.app/"
    },
    {
      title: "InsightyG",
      description: "Automated Data Analyzer & Visualizer. A no-code analytics platform that automates EDA and data profiling.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Plotly"],
      duration: "1 months",
      github: "https://github.com/abhilashjha2004/InsightyG---Automated-Data-Analytics-Visualization-System",
      view: "https://insightyg.streamlit.app/"
    },
    {
      title: "EzyEduTube",
      description: "Education-Only Learning Platform. Built a structured learning platform with an implemented content filtering system.",
      tech: ["MERN Stack", "JWT"],
      duration: "1 month",
      github: "https://github.com/abhilashjha2004/Education-Only-Online-Learning-Platform-Edu-Hub-",
      view: "https://ezyedutube.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title gradient-text">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <h3>{project.title}</h3>
            <p className="project-duration">{project.duration}</p>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.view} target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaEye /> View</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary"><FaGithub /> GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
