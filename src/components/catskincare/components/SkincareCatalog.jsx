/**
 * SkincareCatalog - Maps through all skincare categories
 */
import PropTypes from 'prop-types';
import CategorySection from './CategorySection';

function SkincareCatalog({ categories, onProductClick }) {
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
}

SkincareCatalog.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default SkincareCatalog;
