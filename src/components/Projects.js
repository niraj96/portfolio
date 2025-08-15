import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and modern CSS. Features include smooth animations, responsive design, and optimized performance.",
      image: "https://picsum.photos/400/250",
      link: "https://github.com/niraj96/portfolio",
      demo: "https://niraj96.github.io/portfolio",
      technologies: ["React", "CSS3", "JavaScript", "GitHub Pages"],
      status: "Live"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard. Built with modern web technologies.",
      image: "https://picsum.photos/400/250",
      link: "#",
      demo: "#",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking features.",
      image: "https://picsum.photos/400/250",
      link: "#",
      demo: "#",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      status: "Planning"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://picsum.photos/400/250",
      link: "#",
      demo: "#",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-status">{project.status}</div>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>🌐</span> Live Demo
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <span>📁</span> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 