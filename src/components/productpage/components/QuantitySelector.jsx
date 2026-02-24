/**
 * Quantity Selector Component
 * Allows user to adjust product quantity
 */
import PropTypes from 'prop-types';

export function QuantitySelector({ quantity, onQuantityChange }) {
  return (
    <div className="quantity-section">
      <h3>Quantity</h3>
      <div className="quantity-controls">
        <button 
          className="quantity-button"
          onClick={() => onQuantityChange(-1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button 
          className="quantity-button"
          onClick={() => onQuantityChange(1)}
          disabled={quantity >= 99}
        >
          +
        </button>
      </div>
    </div>
  );
}

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};
