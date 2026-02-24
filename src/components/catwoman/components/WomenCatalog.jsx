/**
 * WomenCatalog - Maps through all women categories
 */
import PropTypes from 'prop-types';
import CategorySection from './CategorySection';

function WomenCatalog({ categories, onProductClick }) {
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

WomenCatalog.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default WomenCatalog;
