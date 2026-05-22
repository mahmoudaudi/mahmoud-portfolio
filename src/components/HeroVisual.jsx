import React from 'react';
import { FaReact, FaDatabase, FaShieldAlt, FaPython, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiGo } from 'react-icons/si';

const icons = [
  { Icon: FaReact,     label: 'React',    color: '#61dafb', delay: '0s'    },
  { Icon: FaJs,        label: 'JS',       color: '#f7df1e', delay: '0.4s'  },
  { Icon: FaNodeJs,    label: 'Node',     color: '#68a063', delay: '0.8s'  },
  { Icon: FaDatabase,  label: 'MySQL',    color: '#00758f', delay: '1.2s'  },
  { Icon: FaShieldAlt, label: 'Security', color: '#0ea5e9', delay: '1.6s'  },
  { Icon: FaPython,    label: 'Python',   color: '#3776ab', delay: '2s'    },
  { Icon: SiGo,        label: 'Go',       color: '#00add8', delay: '2.4s'  },
];

const HeroVisual = () => (
  <div className="hv2-wrap">
    {/* centre glow orb */}
    <div className="hv2-orb">
      <span className="hv2-orb-text">&lt;/&gt;</span>
    </div>

    {/* icon cards placed via CSS nth-child rotation trick */}
    <div className="hv2-orbit">
      {icons.map(({ Icon, label, color, delay }) => (
        <div key={label} className="hv2-card" style={{ '--delay': delay }}>
          <Icon style={{ color }} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HeroVisual;
