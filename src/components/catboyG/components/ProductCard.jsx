import React from 'react';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

function ProductCard({ product, onProductClick, formatPrice }) {
  return (
    <div className="product-card">
      <ProductImage
        src={product.image}
        alt={product.name}
        onClick={() => onProductClick(product)}
      />
      <ProductInfo
        product={product}
        onProductClick={onProductClick}
        formatPrice={formatPrice}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.string,
    image: PropTypes.string.isRequired
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
  formatPrice: PropTypes.func.isRequired
};

export default ProductCard;
