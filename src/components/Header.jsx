import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const NAV_ITEMS = ['home', 'about', 'skills', 'projects', 'contact'];

const Header = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      let current = 'home';
      NAV_ITEMS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <img 
              src="/images/profile.jpg" 
              alt="MA" 
              className="logo-image" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/100x100/1e293b/a855f7?text=MA";
              }}
            />
          </div>
          <span>{portfolioData.hero.name}</span>
        </a>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            {NAV_ITEMS.map((item, index) => (
              <li key={item} style={{ animationDelay: `${index * 0.1}s` }}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? 'nav-link--active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-controls">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            disabled={!isMounted}
          >
            {isMounted ? (
              theme === 'dark' ? (
                <FaSun className="sun-icon" />
              ) : (
                <FaMoon className="moon-icon" />
              )
            ) : (
              <div className="theme-icon-placeholder" />
            )}
          </button>
          
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`nav-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      </div>
    </header>
  );
};

export default Header;
