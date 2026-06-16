// Full-screen spinner shown briefly while the page's first content settles in.
import React, { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the spinner shortly after mount so the page doesn't flash empty
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingScreen;
