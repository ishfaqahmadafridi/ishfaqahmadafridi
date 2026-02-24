/**
 * Category Card Component
 * Displays a single category with image and name
 */
import PropTypes from 'prop-types';
import { CategoryImage } from './CategoryImage';
import { CategoryName } from './CategoryName';

export function CategoryCard({ category, onClick }) {
  return (
    <div className="category-item" onClick={onClick}>
      <CategoryImage src={category.image} alt={category.name} />
      <CategoryName name={category.name} />
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
