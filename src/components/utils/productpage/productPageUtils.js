/**
 * Product Page Utilities
 * Pure utility functions for product page
 */

/**
 * Format price to PKR currency
 * @param {number} price - The price to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  if (!price || isNaN(price)) return 'PKR 0';
  return `PKR ${price.toLocaleString('en-IN')}`;
};

/**
 * Calculate installment amount (price divided by 3)
 * @param {number} price - The total price
 * @returns {string} Formatted installment price
 */
export const calculateInstallments = (price) => {
  const installmentAmount = Math.round((price || 0) / 3);
  return formatPrice(installmentAmount);
};

/**
 * Validate quantity within range
 * @param {number} quantity - The quantity to validate
 * @param {number} min - Minimum allowed
 * @param {number} max - Maximum allowed
 * @returns {number} Validated quantity
 */
export const validateQuantity = (quantity, min = 1, max = 99) => {
  return Math.max(min, Math.min(max, quantity));
};
