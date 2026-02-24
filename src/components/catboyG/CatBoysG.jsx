import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ProductGrid.css';
import CategorySection from './components/CategorySection';
import { categories } from '../../assets/catBoysGData';
import { formatPrice } from '../utils/catBoyG';

function CatBoysG({ setPage, setSelectedProduct }) {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  return (
    <div className="product-grid">
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          onProductClick={handleProductClick}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
}

CatBoysG.propTypes = {
  setPage: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired
};

export default CatBoysG;