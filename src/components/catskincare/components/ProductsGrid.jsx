/**
 * ProductsGrid - Grid layout for products
 */
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function ProductsGrid({ products, onProductClick }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductsGrid;
