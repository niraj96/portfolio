import React from 'react';
import './About.css';

function About() {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java',
    'HTML/CSS', 'Git', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Full Stack Developer & Tech Enthusiast</h3>
            <p>
              Hello! I'm Nira Singh, a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and scalable applications that solve real-world problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I specialize in building 
              responsive web applications using React, Node.js, and modern cloud technologies. My journey in 
              technology has been driven by curiosity and a desire to build innovative solutions.
            </p>
            <p>
              I'm constantly learning and exploring new technologies to stay current with industry trends. 
              When I'm not coding, you can find me contributing to open-source projects, participating in 
              hackathons, or sharing knowledge with the developer community.
            </p>
            
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="https://picsum.photos/400/400" alt="Nira Singh" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 