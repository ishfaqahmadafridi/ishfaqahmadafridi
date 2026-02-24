/**
 * Skincare Utilities
 * Pure utility functions for skincare component
 */

/**
 * Format price to PKR currency
 * @param {number} price - The price to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => `PKR ${price.toLocaleString('en-IN')}`;
