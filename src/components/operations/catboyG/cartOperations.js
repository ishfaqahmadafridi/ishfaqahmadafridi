/**
 * Pure functions for cart item manipulations
 */

export const addItemToCart = (cartItems, product, quantity = 1, size = 'M') => {
  const existingItemIndex = cartItems.findIndex(
    item => item.id === product.id && item.size === size
  );

  if (existingItemIndex > -1) {
    // Update quantity if item already exists
    const updatedItems = [...cartItems];
    updatedItems[existingItemIndex].quantity += quantity;
    updatedItems[existingItemIndex].totalPrice = 
      updatedItems[existingItemIndex].price * updatedItems[existingItemIndex].quantity;
    return updatedItems;
  }

  // Add new item
  return [
    ...cartItems,
    {
      ...product,
      quantity,
      size,
      totalPrice: product.price * quantity
    }
  ];
};

export const removeItemFromCart = (cartItems, productId, size) => {
  return cartItems.filter(item => !(item.id === productId && item.size === size));
};

export const updateItemQuantity = (cartItems, productId, size, newQuantity) => {
  if (newQuantity <= 0) {
    return removeItemFromCart(cartItems, productId, size);
  }

  return cartItems.map(item =>
    item.id === productId && item.size === size
      ? {
          ...item,
          quantity: newQuantity,
          totalPrice: item.price * newQuantity
        }
      : item
  );
};

export const clearAllItems = () => {
  return [];
};
