// Reads the saved/system color theme on first load, keeps it in sync with
// the <html> element, and exposes a toggle for the Header's theme button.
import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // On first load, read the saved theme from localStorage (or default to dark) 
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

   // Toggle between light and dark themes, saving the preference to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); 
  };

  return { theme, toggleTheme };
};

export default useTheme;
