export const formatPrice = (price) => {
  return `PKR ${price.toLocaleString('en-IN')}`;
};

export const calculateSubtotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.totalPrice, 0);
};

export const getTotalQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};
