/**
 * Man Footwear State Hook
 * Manages local state for man footwear component
 */
import { useState, useCallback } from 'react';

export const useManFootwearState = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategorySelect = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedCategory(null);
    setSearchTerm('');
  }, []);

  return {
    selectedCategory,
    searchTerm,
    handleCategorySelect,
    handleSearch,
    clearSelection
  };
};
