import { useState, useCallback } from 'react';
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearAllItems
} from '../../catboyG/cartOperations';
import {
  calculateCartTotal,
  calculateCartItemCount
} from '../../catboyG/cartCalculations';

/**
 * Custom hook for managing cart state and operations
 */
export function useCartState() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product, quantity = 1, size = 'M') => {
    setCartItems(prevItems => addItemToCart(prevItems, product, quantity, size));
  }, []);

  const removeFromCart = useCallback((productId, size) => {
    setCartItems(prevItems => removeItemFromCart(prevItems, productId, size));
  }, []);

  const updateQuantity = useCallback((productId, size, newQuantity) => {
    setCartItems(prevItems => updateItemQuantity(prevItems, productId, size, newQuantity));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems(clearAllItems());
  }, []);

  const getCartTotal = useCallback(() => {
    return calculateCartTotal(cartItems);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return calculateCartItemCount(cartItems);
  }, [cartItems]);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  return {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    toggleCart,
    setIsCartOpen
  };
}
