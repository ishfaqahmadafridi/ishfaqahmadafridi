import { useState, useCallback } from 'react';
import { menCategories } from '../../../assets/menData';

/**
 * Custom hook for managing men's products state
 * @returns {Object} Men's products state and handlers
 */
export const useCatmanState = () => {
  const [categories] = useState(menCategories);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product);
    console.log('Product clicked:', product);
  }, []);

  const clearSelectedProduct = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return {
    categories,
    selectedProduct,
    handleProductClick,
    clearSelectedProduct,
  };
};
