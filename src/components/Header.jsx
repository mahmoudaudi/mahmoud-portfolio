// Fixed top navigation: logo, section links, theme toggle, and a mobile menu
// that closes itself on outside clicks or when a link is chosen.
import React, { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"; //react-icons library for theme and mobile menu icons
import portfolioData from "../data/portfolioData";
import "../styles/Header.css";

const NAV_ITEMS = ["home", "about", "skills", "projects", "contact"];

const Header = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track whether the mobile menu is open (for small screens) to toggle visibility and body scroll
  const [isScrolled, setIsScrolled] = useState(false); // Track whether the page has been scrolled down to apply header styles
  const [isMounted, setIsMounted] = useState(false); //this to insure that the theme toggle button is only rendered after the component has mounted, preventing hydration mismatches
  const [activeSection, setActiveSection] = useState("home"); // Track which section is currently active for highlighting the nav link
  const navRef = useRef(null); // Reference to the <nav> element so we can detect clicks outside of it

  useEffect(() => {
    setIsMounted(true);

    // Track scroll position to style the header and highlight the active section link
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      let current = "home";
      NAV_ITEMS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    // Close the mobile menu when the user clicks anywhere outside of it
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <img
              src="/images/profile.jpg"
              alt="MA"
              className="logo-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/100x100/1e293b/a855f7?text=MA";
              }}
            />
          </div>
          <span>{portfolioData.hero.name}</span>
        </a>

        <nav ref={navRef} className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-menu">
            {NAV_ITEMS.map((item, index) => (
              <li key={item} style={{ animationDelay: `${index * 0.1}s` }}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? "nav-link--active" : ""}`}
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
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            disabled={!isMounted}
          >
            {isMounted ? (
              theme === "dark" ? (
                <FaSun className="sun-icon" />
              ) : (
                <FaMoon className="moon-icon" />
              )
            ) : (
              <div className="theme-icon-placeholder" />
            )}
          </button>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`nav-backdrop ${isMobileMenuOpen ? "active" : ""}`}
          onClick={closeMobileMenu}
        ></div>
      </div>
    </header>
  );
};

export default Header;
