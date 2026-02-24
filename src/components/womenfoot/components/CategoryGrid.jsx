/**
 * Category Grid Component
 * Displays grid of category cards
 */
import PropTypes from 'prop-types';
import { CategoryCard } from './CategoryCard';

export function CategoryGrid({ categories }) {
  return (
    <div className="category-grid">
      {categories.map((cat, idx) => (
        <CategoryCard key={idx} category={cat} />
      ))}
    </div>
  );
}

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
