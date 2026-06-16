// Contact section: direct contact methods (email, WhatsApp) and social profiles.
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import '../styles/Contact.css';

const Contact = () => {
  const { contact } = portfolioData;
  const githubUrl = `https://github.com/${contact.github}`;
  const linkedinUrl = `https://www.linkedin.com/in/${contact.linkedin}`;
  const instagramUrl = `https://instagram.com/${contact.instagram}`;

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-headline">{contact.headline}</h2>
          <p className="contact-lead">{contact.subtext}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-column-title">Direct</h3>
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

              <div className="contact-method">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <a href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">{contact.phone}</a>
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

              <div className="contact-method">
                <div className="contact-icon">
                  <FaInstagram />
                </div>
                <div className="contact-details">
                  <h4>Instagram</h4>
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    @{contact.instagram}
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
