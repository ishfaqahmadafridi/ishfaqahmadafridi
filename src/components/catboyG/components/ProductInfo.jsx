import React from 'react';
import PropTypes from 'prop-types';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import StockIndicator from './StockIndicator';
import AddToCartButton from './AddToCartButton';

function ProductInfo({ product, onProductClick, formatPrice }) {
  return (
    <div className="product-info">
      <ProductTitle 
        name={product.name} 
        onClick={() => onProductClick(product)} 
      />
      <ProductPrice
        price={product.price}
        originalPrice={product.originalPrice}
        discount={product.discount}
        formatPrice={formatPrice}
      />
      <StockIndicator />
      <AddToCartButton />
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.string
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
  formatPrice: PropTypes.func.isRequired
};

export default ProductInfo;
