import { createSlice } from '@reduxjs/toolkit';
import { womenCategories } from '../../../../assets/womenData';

const initialState = {
  categories: womenCategories,
  selectedCategory: null,
  searchTerm: '',
  status: 'succeeded',
  error: null,
};

const catwomenSlice = createSlice({
  name: 'catwomen',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => { state.selectedCategory = action.payload; },
    setSearchTerm: (state, action) => { state.searchTerm = action.payload; },
    clearFilters: (state) => { state.selectedCategory = null; state.searchTerm = ''; },
    resetCatwomenState: () => initialState,
  },
});

export const { setSelectedCategory, setSearchTerm, clearFilters, resetCatwomenState } = catwomenSlice.actions;
export const selectCategories = (state) => state.catwomen.categories;
export const selectSelectedCategory = (state) => state.catwomen.selectedCategory;
export const selectSearchTerm = (state) => state.catwomen.searchTerm;
export const selectWomenStatus = (state) => state.catwomen.status;

export const selectFilteredProducts = (state) => {
  const { categories, selectedCategory, searchTerm } = state.catwomen;
  let products = categories.flatMap(cat => cat.products || []);
  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    products = category ? category.products : [];
  }
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(term));
  }
  return products;
};

export default catwomenSlice.reducer;
