import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:nirajkumarsingh.may@gmail.com" className="contact-link">
                nirajkumarsingh.may@gmail.com
              </a>
              <a href="https://github.com/niraj96" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 