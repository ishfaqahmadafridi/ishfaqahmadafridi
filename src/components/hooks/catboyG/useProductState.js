import { useState, useCallback } from 'react';
import {
  filterProductsByCategory,
  searchProductsByTerm,
  filterProductsByPrice,
  getProductById as findProductById
} from '../../operations/catboyG/productOperations';

/**
 * Custom hook for managing product state and operations
 */
export function useProductState(categories) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  const filterByCategory = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    const products = filterProductsByCategory(categories, categoryId);
    setFilteredProducts(products);
  }, [categories]);

  const searchProducts = useCallback((term) => {
    setSearchTerm(term);
    const products = searchProductsByTerm(categories, term);
    setFilteredProducts(products);
  }, [categories]);

  const filterByPrice = useCallback((min, max) => {
    setPriceRange({ min, max });
    const products = filterProductsByPrice(categories, min, max);
    setFilteredProducts(products);
  }, [categories]);

  const getProductById = useCallback((productId) => {
    return findProductById(categories, productId);
  }, [categories]);

  const resetFilters = useCallback(() => {
    setSelectedCategory(null);
    setFilteredProducts([]);
    setSearchTerm('');
    setPriceRange({ min: 0, max: Infinity });
  }, []);

  return {
    categories,
    selectedCategory,
    filteredProducts,
    searchTerm,
    priceRange,
    filterByCategory,
    searchProducts,
    filterByPrice,
    getProductById,
    resetFilters
  };
}
