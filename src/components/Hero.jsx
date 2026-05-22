import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('#typed-role', {
      strings: portfolioData.hero.typedRoles,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="mesh-gradient"></div>
      <div className="container">
        <div className="hero-main">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-intro"
          >
            <span className="hero-status">
              <span className="status-dot"></span>
              {portfolioData.hero.badge}
            </span>

            <h1 className="hero-name">{portfolioData.hero.name}</h1>

            <div className="hero-role-wrapper">
              <span id="typed-role" className="hero-role-text"></span>
            </div>

            <p className="hero-bio">{portfolioData.hero.subtext}</p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary-modern">
                View Projects <FaArrowRight />
              </a>
              <a href="https://wa.me/96179116139" className="btn-secondary-modern" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> Contact
              </a>
            </div>
          </motion.div>

          {/* Right: code card */}
          <motion.div
            className="hero-accent3d-modern"
            aria-hidden="true"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="hero-code-card">
              <div className="hcc-header">
                <span className="hcc-dot" style={{ background: '#ff5f56' }}></span>
                <span className="hcc-dot" style={{ background: '#ffbd2e' }}></span>
                <span className="hcc-dot" style={{ background: '#27c93f' }}></span>
                <span className="hcc-title">profile.json</span>
              </div>
              <div className="hcc-body">
                <div className="hcc-line"><span className="hcc-brace">{'{'}</span></div>
                <div className="hcc-line hcc-indent"><span className="hcc-key">"name"</span><span className="hcc-colon">: </span><span className="hcc-str">"Mahmoud Audi"</span><span className="hcc-comma">,</span></div>
                <div className="hcc-line hcc-indent"><span className="hcc-key">"role"</span><span className="hcc-colon">: </span><span className="hcc-str">"Software Developer"</span><span className="hcc-comma">,</span></div>
                <div className="hcc-line hcc-indent"><span className="hcc-key">"focus"</span><span className="hcc-colon">: </span><span className="hcc-str">"ML + Cybersecurity"</span><span className="hcc-comma">,</span></div>
                <div className="hcc-line hcc-indent"><span className="hcc-key">"openToWork"</span><span className="hcc-colon">: </span><span className="hcc-bool">true</span></div>
                <div className="hcc-line"><span className="hcc-brace">{'}'}</span></div>
              </div>
              <div className="hcc-stats">
                <div className="hcc-stat-item">
                  <span className="hcc-stat-num">1st</span>
                  <span className="hcc-stat-label">Robotics</span>
                </div>
                <div className="hcc-stat-div"></div>
                <div className="hcc-stat-item">
                  <span className="hcc-stat-num">4+</span>
                  <span className="hcc-stat-label">Projects</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
