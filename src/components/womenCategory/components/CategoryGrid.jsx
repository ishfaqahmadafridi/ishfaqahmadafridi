/**
 * Category Grid Component
 * Displays grid of category cards
 */
import PropTypes from 'prop-types';
import { CategoryCard } from './CategoryCard';

export function CategoryGrid({ categories, onCategoryClick }) {
  return (
    <div className="category-grid">
      {categories.map((cat, idx) => (
        <CategoryCard
          key={idx}
          category={cat}
          onClick={() => onCategoryClick(cat.key)}
        />
      ))}
    </div>
  );
}

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};
