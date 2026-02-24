/**
 * Man Footwear Operations
 * Business logic and data operations for man footwear
 */

/**
 * Filter categories by name
 * @param {Array} categories - All categories
 * @param {string} searchTerm - Term to search for
 * @returns {Array} Filtered categories
 */
export const filterCategoriesByName = (categories, searchTerm) => {
  if (!searchTerm) return categories;
  const term = searchTerm.toLowerCase();
  return categories.filter(cat => 
    cat.name.toLowerCase().includes(term)
  );
};

/**
 * Sort categories by name
 * @param {Array} categories - All categories
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted categories
 */
export const sortCategories = (categories, order = 'asc') => {
  return [...categories].sort((a, b) => {
    if (order === 'asc') {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
};

/**
 * Get total categories count
 * @param {Array} categories - All categories
 * @returns {number} Total count
 */
export const getTotalCount = (categories) => {
  return categories.length;
};
