import PropTypes from 'prop-types';
import CategoryHeader from './CategoryHeader';
import ProductsGrid from './ProductsGrid';

/**
 * CategorySection - Complete section for a category with products
 */
const CategorySection = ({ category, onProductClick }) => {
  return (
    <section className="mb-16">
      <CategoryHeader name={category.name} heroImage={category.heroImage} />
      <ProductsGrid products={category.products} onProductClick={onProductClick} />
    </section>
  );
};

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
