import React, { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Computer Shop',
      description:
        'A fully functional e-commerce platform for computer hardware and accessories. Features product browsing, cart functionality, and a seamless shopping experience with modern UI design.',
      tech: ['React', 'Node.js', 'CSS', 'Vercel'],
      liveLink: 'https://computer-shop-ruddy.vercel.app/',
      category: 'fullstack',
      featured: true,
    },
    {
      title: 'Task Manager App',
      description:
        'A productivity application for managing daily tasks with features like drag & drop, priority levels, and progress tracking. Built with React and local storage persistence.',
      tech: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
      category: 'frontend',
      featured: false,
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather application displaying current conditions and forecasts. Integrates with weather APIs for accurate data and features a beautiful, responsive design.',
      tech: ['React', 'REST API', 'CSS3', 'Axios'],
      category: 'frontend',
      featured: false,
    },
  ];

  const categories = ['all', 'fullstack', 'frontend'];
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <span className="title-number">03.</span> Projects
        </h2>

        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {project.featured && <span className="featured-badge">Featured</span>}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
