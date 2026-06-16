// About section: profile photo alongside a short bio built from portfolioData.
import React from 'react';
import portfolioData from '../data/portfolioData';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const { about } = portfolioData;

  return (
    <section className="about-modern" id="about">
      <div className="container">
        <div className="about-grid-modern">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image-section"
          >
            <div className="about-image-wrapper">
               <img
                 src="/images/profile.jpg"
                 alt="Profile"
                 className="about-image"
                 onError={(e) => {
                   e.target.onerror = null;
                   e.target.src = "https://placehold.co/600x800/111/fff?text=About+Me";
                 }}
               />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text-section"
          >
            <h3 className="about-badge-modern">{about.title}</h3>
            <h2 className="about-heading-modern">
              Building reliable software with curiosity for
              <span className="text-highlight"> security and applied ML.</span>
            </h2>
            <div className="about-description-modern">
              {about.highlights.map((line, index) => (
                <p key={index} className="about-p">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
