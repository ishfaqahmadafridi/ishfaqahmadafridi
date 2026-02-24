import React from 'react';
import PropTypes from 'prop-types';

function ProductPrice({ price, originalPrice, discount, formatPrice }) {
  return (
    <div className="price-container">
      <span className="current-price">{formatPrice(price)}</span>
      {originalPrice && (
        <>
          <span className="original-price">{formatPrice(originalPrice)}</span>
          <span className="discount">{discount}</span>
        </>
      )}
    </div>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.string,
  formatPrice: PropTypes.func.isRequired
};

export default ProductPrice;
