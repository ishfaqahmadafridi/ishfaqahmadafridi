/**
 * Size Selector Component
 * Allows user to select product size
 */
import PropTypes from 'prop-types';
import { getAvailableSizes } from '../../operations/productpage';

export function SizeSelector({ selectedSize, onSizeSelect }) {
  const sizes = getAvailableSizes();

  return (
    <div className="size-section">
      <h3>Select Size</h3>
      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

SizeSelector.propTypes = {
  selectedSize: PropTypes.string.isRequired,
  onSizeSelect: PropTypes.func.isRequired,
};
