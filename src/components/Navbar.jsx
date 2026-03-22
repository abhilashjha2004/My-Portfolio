import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo gradient-text">AKJ</a>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li className="nav-item"><a href="#about" onClick={toggleMenu}>About</a></li>
          <li className="nav-item"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li className="nav-item"><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li className="nav-item"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li className="nav-item"><a href="#certificates" onClick={toggleMenu}>Certificates</a></li>
          <li className="nav-item"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <div className="social-icons">
            <a href="https://github.com/abhilashjha2004" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abhilashjha20/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="https://leetcode.com/u/abhilashjha2004/" target="_blank" rel="noopener noreferrer" className="social-icon"><SiLeetcode /></a>
          </div>
          <a href="#contact" className="btn-primary connect-btn">Let's Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
