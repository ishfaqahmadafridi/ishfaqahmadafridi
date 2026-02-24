import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function ProductsGrid({ products, onProductClick, formatPrice }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={onProductClick}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  onProductClick: PropTypes.func.isRequired,
  formatPrice: PropTypes.func.isRequired
};

export default ProductsGrid;
