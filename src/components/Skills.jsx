// Skills section: a bento grid of skill/focus groups, animated in once visible.
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineCode, HiOutlineBeaker, HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineGlobeAlt } from 'react-icons/hi';
import portfolioData from '../data/portfolioData';
import '../styles/Skills.css';

const getIcon = (title) => {
  switch (title.toLowerCase()) {
    case 'strong': return <HiOutlineCode />;
    case 'applied ml': return <HiOutlineBeaker />;
    case 'iot / security exposure': return <HiOutlineShieldCheck />;
    case 'currently learning': return <HiOutlineLightningBolt />;
    case 'familiar / introductory': return <HiOutlineGlobeAlt />;
    default: return <HiOutlineCode />;
  }
};

const Skills = () => {
  // Ref + useInView trigger the card entrance animation only once, when the section scrolls into view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="skills-modern" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header-modern">
          <h2 className="section-title-modern">Skills & Focus</h2>
          <p className="section-subtitle-modern">
            Languages, tooling, and areas where I have built real projects or coursework depth.
          </p>
        </div>

        <div className="bento-grid-modern">
          {portfolioData.skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card-modern item-${index}`}
            >
              <div className="card-header-modern">
                <div className="card-icon-modern">{getIcon(group.title)}</div>
                <h3 className="card-title-modern">{group.title}</h3>
              </div>
              <p className="card-desc-modern">{group.description}</p>
              <div className="card-tags-modern">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`tag-modern ${item.length > 24 ? 'tag-modern-long' : ''}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
