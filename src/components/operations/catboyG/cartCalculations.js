/**
 * Pure functions for cart calculations
 */

export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.totalPrice, 0);
};

export const calculateCartItemCount = (cartItems) => {
  return cartItems.reduce((count, item) => count + item.quantity, 0);
};

export const findItemInCart = (cartItems, productId, size) => {
  return cartItems.find(item => item.id === productId && item.size === size);
};

export const isItemInCart = (cartItems, productId, size) => {
  return cartItems.some(item => item.id === productId && item.size === size);
};

export const getItemQuantity = (cartItems, productId, size) => {
  const item = findItemInCart(cartItems, productId, size);
  return item ? item.quantity : 0;
};
