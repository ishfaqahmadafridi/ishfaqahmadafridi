import PropTypes from 'prop-types';
import CategorySection from './CategorySection';

/**
 * FragranceCatalog - Displays all fragrance categories
 */
const FragranceCatalog = ({ categories, onProductClick }) => {
  return (
    <>
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          onProductClick={onProductClick}
        />
      ))}
    </>
  );
};

FragranceCatalog.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      heroImage: PropTypes.string.isRequired,
      products: PropTypes.array.isRequired,
    })
  ).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default FragranceCatalog;
