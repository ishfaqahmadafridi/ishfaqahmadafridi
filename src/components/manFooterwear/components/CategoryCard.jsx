/**
 * CategoryCard - Complete category card with image and name
 */
import PropTypes from 'prop-types';
import CategoryImage from './CategoryImage';
import CategoryName from './CategoryName';

function CategoryCard({ category }) {
  return (
    <a href={category.link} className="category-item">
      <CategoryImage src={category.image} alt={category.name} />
      <CategoryName name={category.name} />
    </a>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
