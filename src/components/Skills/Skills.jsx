import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Redux', level: 78 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 83 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 65 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 82 },
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 78 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className={`skills-container ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <span className="title-number">02.</span> Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category" style={{ animationDelay: `${catIndex * 0.2}s` }}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
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
