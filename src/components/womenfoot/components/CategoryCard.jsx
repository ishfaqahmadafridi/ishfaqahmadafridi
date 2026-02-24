/**
 * Category Card Component
 * Displays a single category with image and name
 */
import PropTypes from 'prop-types';
import { CategoryImage } from './CategoryImage';
import { CategoryName } from './CategoryName';

export function CategoryCard({ category }) {
  return (
    <a href={category.link} className="category-item">
      <CategoryImage src={category.image} alt={category.name} />
      <CategoryName name={category.name} />
    </a>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
