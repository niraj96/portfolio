import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Nira Singh, a passionate developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
            <p>
              My journey in technology has been driven by curiosity and a desire to build things that make a difference. 
              I'm constantly learning and exploring new technologies to stay current with industry trends.
            </p>
          </div>
          <div className="about-image">
            <img src="https://picsum.photos/300/300" alt="Nira Singh" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 