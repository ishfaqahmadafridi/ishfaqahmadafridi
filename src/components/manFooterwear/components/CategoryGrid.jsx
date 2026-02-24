/**
 * CategoryGrid - Grid layout for categories
 */
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';

function CategoryGrid({ categories }) {
  return (
    <div className="category-grid">
      {categories.map((cat, idx) => (
        <CategoryCard key={cat.id || idx} category={cat} />
      ))}
    </div>
  );
}

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryGrid;
