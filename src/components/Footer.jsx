import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { hero, contact, footer } = portfolioData;
  const githubUrl = `https://github.com/${contact.github}`;
  const linkedinUrl = `https://www.linkedin.com/in/${contact.linkedin}`;
  const instagramUrl = `https://instagram.com/${contact.instagram}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>{hero.name}</h3>
            <p>{footer.tagline}</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#projects">Web Development</a></li>
              <li><a href="#projects">Software Prototyping</a></li>
              <li><a href="#projects">Applied Data Work</a></li>
              <li><a href="#skills">Security Experimentation</a></li>
              <li><a href="#contact">Mentoring</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <p>Let's keep moving forward and learn together.</p>
            <div className="footer-social">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={`mailto:${contact.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {hero.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
