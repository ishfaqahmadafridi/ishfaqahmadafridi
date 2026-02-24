/**
 * Home State Hook
 * Manages navigation, cart, and product selection state
 */
import { useState } from 'react';

export const useHomeState = () => {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [previousPage, setPreviousPage] = useState("home");

  // Enhanced addToCart function
  const addToCart = (product, size, quantity) => {
    setCartItems(prevItems => {
      // Check if item with same ID and size already exists
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.size === size
      );

      if (existingItemIndex >= 0) {
        // Update quantity if exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
          totalPrice: updatedItems[existingItemIndex].price * (updatedItems[existingItemIndex].quantity + quantity)
        };
        return updatedItems;
      } else {
        // Add new item
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            size,
            quantity,
            totalPrice: product.price * quantity
          }
        ];
      }
    });
    setPage("cart");
  };

  // Function to update cart item quantity
  const updateCartItemQuantity = (itemId, size, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.size === size
          ? {
              ...item,
              quantity: Math.max(1, newQuantity),
              totalPrice: item.price * Math.max(1, newQuantity)
            }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeFromCart = (itemId, size) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === itemId && item.size === size))
    );
  };

  // Function to handle page navigation with previous page tracking
  const handlePageChange = (newPage) => {
    setPreviousPage(page);
    setPage(newPage);
  };

  // Calculate total cart item count
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return {
    page,
    setPage,
    selectedProduct,
    setSelectedProduct,
    cartItems,
    previousPage,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    handlePageChange,
    cartItemCount,
  };
};
