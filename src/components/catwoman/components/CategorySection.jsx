/**
 * CategorySection - Complete category section with header and products
 */
import PropTypes from 'prop-types';
import CategoryHeader from './CategoryHeader';
import ProductsGrid from './ProductsGrid';

function CategorySection({ category, onProductClick }) {
  return (
    <section className="category-section">
      <CategoryHeader 
        heroImage={category.heroImage}
        categoryName={category.name}
      />
      <ProductsGrid 
        products={category.products}
        onProductClick={onProductClick}
      />
    </section>
  );
}

CategorySection.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    heroImage: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default CategorySection;
