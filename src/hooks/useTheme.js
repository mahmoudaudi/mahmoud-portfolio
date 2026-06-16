// Reads the saved/system color theme on first load, keeps it in sync with
// the <html> element, and exposes a toggle for the Header's theme button.
import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Prefer a previously saved choice, otherwise fall back to the OS setting
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
