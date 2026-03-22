import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "Java", "JavaScript", "SQL"]
    },
    {
      category: "Data Analytics",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Power BI"]
    },
    {
      category: "Web Development",
      items: ["React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git & GitHub", "Linux", "REST APIs", "JWT Authentication"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title gradient-text">Skill Tree</h2>
      <div className="skills-container">

        <div className="tree-root glass-card">
          <h3>Tech</h3>
        </div>

        <div className="tree-branches">
          {skillsData.map((skill, index) => (
            <div key={index} className="tree-branch">
              <div className="branch-category glass-card">
                <h4>{skill.category}</h4>
              </div>
              <div className="branch-leaves">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="leaf-node glass-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
