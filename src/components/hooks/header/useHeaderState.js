/**
 * Header State Hook
 * Manages theme and mobile menu state
 */
import { useState, useEffect } from 'react';

export const useHeaderState = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("afridis-theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("afridis-theme", newTheme);
    document.body.className = newTheme;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    theme,
    isMenuOpen,
    toggleTheme,
    toggleMenu,
  };
};
