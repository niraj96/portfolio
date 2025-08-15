import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and modern CSS.",
      image: "https://picsum.photos/400/250",
      link: "https://github.com/niraj96/portfolio"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication and payment integration.",
      image: "https://picsum.photos/400/250",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://picsum.photos/400/250",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 