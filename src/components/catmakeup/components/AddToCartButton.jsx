import PropTypes from 'prop-types';

/**
 * AddToCartButton - Button to add product to cart
 */
const AddToCartButton = ({ onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {disabled ? 'Out of Stock' : 'Add to Cart'}
    </button>
  );
};

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default AddToCartButton;
