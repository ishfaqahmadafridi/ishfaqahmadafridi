/**
 * Pure functions for product filtering and searching
 */

export const filterProductsByCategory = (categories, categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

export const searchProductsByTerm = (categories, searchTerm) => {
  const allProducts = categories.flatMap(cat => cat.products);
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const filterProductsByPrice = (categories, min, max) => {
  const allProducts = categories.flatMap(cat => cat.products);
  return allProducts.filter(
    product => product.price >= min && product.price <= max
  );
};

export const getAllProducts = (categories) => {
  return categories.flatMap(cat => cat.products);
};

export const getProductById = (categories, productId) => {
  const allProducts = getAllProducts(categories);
  return allProducts.find(product => product.id === productId);
};

export const getCategoryById = (categories, categoryId) => {
  return categories.find(cat => cat.id === categoryId);
};
