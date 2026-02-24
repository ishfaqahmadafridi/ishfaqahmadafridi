/**
 * Product Page Operations
 * Business logic for product page
 */

/**
 * Adjust quantity by change amount
 * @param {number} currentQuantity - Current quantity
 * @param {number} change - Amount to change (-1 or +1)
 * @param {number} min - Minimum allowed
 * @param {number} max - Maximum allowed
 * @returns {number} New quantity
 */
export const adjustQuantity = (currentQuantity, change, min = 1, max = 99) => {
  const newQuantity = currentQuantity + change;
  return Math.max(min, Math.min(max, newQuantity));
};

/**
 * Get available sizes
 * @returns {Array} Array of available sizes
 */
export const getAvailableSizes = () => {
  return ['SMALL', 'MEDIUM', 'LARGE', 'X-LARGE'];
};

/**
 * Validate product data
 * @param {Object} product - Product object
 * @returns {boolean} Whether product is valid
 */
export const isValidProduct = (product) => {
  return product && product.name && product.price;
};

/**
 * Create cart item
 * @param {Object} product - Product object
 * @param {string} size - Selected size
 * @param {number} quantity - Selected quantity
 * @returns {Object} Cart item object
 */
export const createCartItem = (product, size, quantity) => {
  return {
    ...product,
    selectedSize: size,
    selectedQuantity: quantity,
    addedAt: new Date().toISOString()
  };
};
