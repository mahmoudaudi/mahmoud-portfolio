import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData;
  const githubUrl = `https://github.com/${contact.github}`;
  const linkedinUrl = `https://www.linkedin.com/in/${contact.linkedin}`;

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-headline">{contact.headline}</h2>
          <p className="contact-lead">{contact.subtext}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-column-title">Email</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h3 className="contact-column-title">Profiles</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    {githubUrl.replace('https://', '')}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaLinkedinIn />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    {linkedinUrl.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
