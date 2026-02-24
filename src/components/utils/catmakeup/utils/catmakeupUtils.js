/**
 * Format price in Indian currency format
 * @param {number} price - Price to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return `PKR ${price.toLocaleString('en-IN')}`;
};
