import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Scroll Progress Logic
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scrollProgress');
      const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollProgress) {
        scrollProgress.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Hide loading screen after content is loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ErrorBoundary fallback={<div style={{background:'#0b0f17',color:'#e2e8f0',padding:'4rem 2rem',textAlign:'center',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem'}}>Something went wrong. Please refresh the page.</div>}>
    <div className="app" data-theme={theme}>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}

      <div className="scroll-progress" id="scrollProgress"></div>

      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </ErrorBoundary>
  );
}

export default App;
