/**
 * Landing Page Component
 * Initial welcome page with delayed enter button
 */
import React from 'react';
import { WelcomeText, EnterButton } from './components';
import { useLandingPageState } from './hooks';
import '../../styles/LandingPae.css';

const LandingPage = () => {
  const { showButton, handleEnter } = useLandingPageState();

  return (
    <div className="landing-container">
      <WelcomeText />
      <EnterButton onClick={handleEnter} show={showButton} />
    </div>
  );
};

export default LandingPage;