import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPae.css'; // Ensure you have the correct path to your CSS file

const LandingPage = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

const handleEnter = () => {
  try {
    navigate('/home');
  } catch (error) {
    console.error("Navigation failed:", error);
    // Fallback or error display
  }
};
  return (
    <div className="landing-container">
      <div className="welcome-text">
        <h1 className="animated-text">WELCOME TO AFRIDI'S COLLECTION</h1>
      </div>
      {showButton && (
        <button className="enter-button" onClick={handleEnter}>
          ENTER
        </button>
      )}
    </div>
  );
};

export default LandingPage;