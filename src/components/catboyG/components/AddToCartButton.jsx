import React from 'react';
import PropTypes from 'prop-types';

function AddToCartButton({ onClick }) {
  return (
    <button className="add-to-cart" onClick={onClick}>
      Add To Cart
    </button>
  );
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func
};

export default AddToCartButton;
