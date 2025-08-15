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
              Whether you have a question, want to collaborate, or just want to say hi, 
              feel free to reach out! I'm passionate about creating innovative solutions 
              and would love to hear about your ideas.
            </p>
            
            <div className="contact-links">
              <a href="mailto:nirajkumarsingh.may@gmail.com" className="contact-link">
                <span>📧</span> nirajkumarsingh.may@gmail.com
              </a>
              <a href="https://github.com/niraj96" target="_blank" rel="noopener noreferrer" className="contact-link secondary">
                <span>🐙</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/niraj-singh-466209145/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💼</span> LinkedIn
              </a>
            </div>
            
            <div className="social-icons">
              <a href="https://github.com/niraj96" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                🐙
              </a>
              <a href="https://www.linkedin.com/in/niraj-singh-466209145/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                💼
              </a>
              <a href="mailto:nirajkumarsingh.may@gmail.com" className="social-icon" title="Email">
                📧
              </a>
            </div>
          </div>
          
          <form className="contact-form">
            <h3>Send me a message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me more about your project or inquiry..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 