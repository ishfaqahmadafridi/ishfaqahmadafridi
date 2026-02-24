/**
 * Error Message Component
 * Displays error message when no product is found
 */
import PropTypes from 'prop-types';
import { BackButton } from './BackButton';

export function ErrorMessage({ onBack }) {
  return (
    <div className="product-page">
      <BackButton onClick={onBack} />
      <div className="error-message">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  onBack: PropTypes.func.isRequired,
};
