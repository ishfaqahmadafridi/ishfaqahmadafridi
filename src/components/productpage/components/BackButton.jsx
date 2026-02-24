/**
 * Back Button Component
 * Button to navigate back to previous page
 */
import PropTypes from 'prop-types';

export function BackButton({ onClick }) {
  return (
    <button onClick={onClick} className="back-button">
      ← Back
    </button>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
