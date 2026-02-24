/**
 * Landing Page State Hook
 * Manages button visibility timer and navigation
 */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLandingPageState = (delay = 3000) => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleEnter = () => {
    try {
      navigate('/home');
    } catch (error) {
      console.error("Navigation failed:", error);
      // Fallback or error display
    }
  };

  return {
    showButton,
    handleEnter,
  };
};
