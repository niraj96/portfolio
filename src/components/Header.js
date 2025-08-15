import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo animate-fade-in-left">Niraj Kumar Singh</h1>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className="animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            </li>
            <li className="animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            </li>
            <li className="animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            </li>
            <li className="animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
              <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
            </li>
            <li className="animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
        
        <div 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header; 