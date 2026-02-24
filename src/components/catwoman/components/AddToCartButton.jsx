/**
 * AddToCartButton - Button to add product to cart
 */
import PropTypes from 'prop-types';

function AddToCartButton({ onClick, disabled = false }) {
  return (
    <button 
      className="add-to-cart" 
      onClick={onClick}
      disabled={disabled}
    >
      Add To Cart
    </button>
  );
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default AddToCartButton;
