/**
 * Product Page State Hook
 * Manages local state for product page
 */
import { useState, useCallback } from 'react';
import { adjustQuantity as adjustQty } from '../../operations/productpage';

export const useProductPageState = (initialSize = 'SMALL', initialQuantity = 1) => {
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleSizeSelect = useCallback((size) => {
    setSelectedSize(size);
  }, []);

  const handleQuantityChange = useCallback((change) => {
    setQuantity(prev => adjustQty(prev, change));
  }, []);

  const handleQuantitySet = useCallback((newQuantity) => {
    setQuantity(newQuantity);
  }, []);

  const resetState = useCallback(() => {
    setSelectedSize(initialSize);
    setQuantity(initialQuantity);
  }, [initialSize, initialQuantity]);

  return {
    selectedSize,
    quantity,
    handleSizeSelect,
    handleQuantityChange,
    handleQuantitySet,
    resetState
  };
};
