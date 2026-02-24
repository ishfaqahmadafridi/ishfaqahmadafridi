/**
 * Enter Button Component
 * Displays enter button with click handler
 */
import React from 'react';
import PropTypes from 'prop-types';

export function EnterButton({ onClick, show }) {
  if (!show) return null;
  
  return (
    <button className="enter-button" onClick={onClick}>
      ENTER
    </button>
  );
}

EnterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
