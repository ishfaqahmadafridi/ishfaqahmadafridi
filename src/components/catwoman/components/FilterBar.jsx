
import { useCatwomenActions, useCatwomenState } from '../../hooks/actwomen';
import '../../../styles/FilterBar.css';

function FilterBar() {
  const { categories, selectedCategory, searchTerm } = useCatwomenState();
  const { handleCategorySelect, handleSearch, handleClearFilters } = useCatwomenActions();

  return (
    <div className="filter-bar">
      {/* Search Input */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <label htmlFor="category-select">Filter by Category:</label>
        <select
          id="category-select"
          value={selectedCategory || ''}
          onChange={(e) => handleCategorySelect(e.target.value || null)}
          className="category-select"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters Button */}
      {(selectedCategory || searchTerm) && (
        <button onClick={handleClearFilters} className="clear-filters-btn">
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default FilterBar;
