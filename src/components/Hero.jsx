// Landing section: name, animated role text, intro copy, and CTA buttons.
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // Cycle through the role strings in the "#typed-role" span on load
    const typed = new Typed('#typed-role', {
      strings: portfolioData.hero.typedRoles,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  // Tracks the cursor over the code card and turns that into a subtle 3D tilt
  const tiltRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 18 });

  const handleTiltMove = (event) => {
    const rect = tiltRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(relativeX * 14);
    rotateX.set(relativeY * -14);
  };

  const handleTiltLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

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
              <a href="#contact" className="btn-secondary-modern">
                <FaEnvelope /> Contact
              </a>
            </div>
          </motion.div>

          {/* Right: code card */}
          <motion.div
            ref={tiltRef}
            className="hero-accent3d-modern"
            aria-hidden="true"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
            style={{ perspective: 800 }}
          >
            <motion.div
              className="hero-code-card"
              style={{ rotateX: springRotateX, rotateY: springRotateY }}
            >
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
            </motion.div>
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
