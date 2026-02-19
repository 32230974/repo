import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: <FaCode />, title: 'Frontend', desc: 'Building responsive and interactive UIs with React, HTML5, CSS3, and JavaScript.' },
    { icon: <FaServer />, title: 'Backend', desc: 'Creating robust server-side applications with Node.js, Express, and REST APIs.' },
    { icon: <FaDatabase />, title: 'Database', desc: 'Designing and managing databases with MongoDB, MySQL, and Firebase.' },
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">Mohammad Ayoub</span>, a passionate 
              Full Stack Developer who loves building things for the web. I enjoy creating 
              applications that live on the internet, whether that be websites, applications, 
              or anything in between.
            </p>
            <p>
              I have experience working with modern technologies across the full stack. 
              My goal is to always build products that provide pixel-perfect, performant 
              experiences while maintaining clean and scalable code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, and continuously improving my skills.
            </p>
          </div>
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
