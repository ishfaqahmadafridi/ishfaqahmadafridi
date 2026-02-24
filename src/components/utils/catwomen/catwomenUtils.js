/**
 * Women Utilities
 * Pure utility functions for women component
 */

/**
 * Format price to PKR currency
 * @param {number} price - The price to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => `PKR ${price.toLocaleString('en-IN')}`;
