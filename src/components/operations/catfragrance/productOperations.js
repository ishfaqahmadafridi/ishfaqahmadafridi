/**
 * Filter products by category ID
 * @param {Array} categories - All categories with products
 * @param {string} categoryId - Category ID to filter
 * @returns {Array} Filtered products
 */
export const filterProductsByCategory = (categories, categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

/**
 * Search products by term
 * @param {Array} categories - All categories with products
 * @param {string} searchTerm - Search term
 * @returns {Array} Matching products
 */
export const searchProductsByTerm = (categories, searchTerm) => {
  if (!searchTerm) return [];
  
  const lowerSearchTerm = searchTerm.toLowerCase();
  const results = [];
  
  categories.forEach(category => {
    category.products.forEach(product => {
      if (product.name.toLowerCase().includes(lowerSearchTerm)) {
        results.push(product);
      }
    });
  });
  
  return results;
};

/**
 * Get all products from all categories
 * @param {Array} categories - All categories
 * @returns {Array} All products
 */
export const getAllProducts = (categories) => {
  return categories.flatMap(category => category.products);
};
