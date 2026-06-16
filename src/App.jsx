// Top-level layout: wires the page sections together in order and provides
// the shared theme to Header. No state/effects live here — each concern
// (theme, loading screen, scroll progress) is owned by its own hook/component.
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ErrorBoundary>
      <div className="app" data-theme={theme}>
        <LoadingScreen />
        <ScrollProgress />

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
