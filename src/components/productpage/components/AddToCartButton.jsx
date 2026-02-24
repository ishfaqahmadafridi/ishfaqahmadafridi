/**
 * Add To Cart Button Component
 * Button to add product to cart
 */
import PropTypes from 'prop-types';

export function AddToCartButton({ onClick }) {
  return (
    <button className="add-to-cart" onClick={onClick}>
      Add to Cart
    </button>
  );
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
