import React, { useState, useEffect } from 'react';

const ScrollToBottom = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when user is near the top (first 200px)
      setShowButton(scrollPosition < 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-8 left-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-40 animate-bounce"
      aria-label="Scroll to bottom"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
};

export default ScrollToBottom;