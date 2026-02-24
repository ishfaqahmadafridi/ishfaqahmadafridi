import React from 'react';
import PropTypes from 'prop-types';
import CategoryHeader from './CategoryHeader';
import ProductsGrid from './ProductsGrid';

function CategorySection({ category, onProductClick, formatPrice }) {
  return (
    <section className="category-section">
      <CategoryHeader 
        heroImage={category.heroImage} 
        categoryName={category.name} 
      />
      <ProductsGrid
        products={category.products}
        onProductClick={onProductClick}
        formatPrice={formatPrice}
      />
    </section>
  );
}

CategorySection.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    heroImage: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
  formatPrice: PropTypes.func.isRequired
};

export default CategorySection;
