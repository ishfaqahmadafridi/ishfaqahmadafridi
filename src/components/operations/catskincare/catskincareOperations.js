/**
 * Skincare Operations
 * Business logic and data operations for skincare products
 */

/**
 * Filter products by category
 * @param {Array} categories - All categories
 * @param {string} categoryId - Category ID to filter
 * @returns {Array} Products in the specified category
 */
export const filterProductsByCategory = (categories, categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

/**
 * Search products by term
 * @param {Array} categories - All categories
 * @param {string} searchTerm - Term to search for
 * @returns {Array} Products matching search term
 */
export const searchProductsByTerm = (categories, searchTerm) => {
  const term = searchTerm.toLowerCase();
  const allProducts = categories.flatMap(cat => cat.products);
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.details.material.toLowerCase().includes(term)
  );
};

/**
 * Get all products from all categories
 * @param {Array} categories - All categories
 * @returns {Array} All products
 */
export const getAllProducts = (categories) => {
  return categories.flatMap(cat => cat.products);
};
