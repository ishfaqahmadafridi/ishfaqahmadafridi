import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { womenCategories } from '../../../../assets/womenData';
import { ecommerceService } from '../../../../api/ecommerceService';

// Async thunk to fetch women's products from backend
export const fetchWomenProducts = createAsyncThunk(
  'catwomen/fetchProducts',
  async () => {
    const response = await ecommerceService.getProductsByCategory('women');
    return response;
  }
);

const initialState = {
  categories: womenCategories,
  backendProducts: [] as any[],
  selectedCategory: null,
  searchTerm: '',
  status: 'idle',
  error: null as string | null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchWomenProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWomenProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.backendProducts = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchWomenProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setSelectedCategory, setSearchTerm, clearFilters, resetCatwomenState } = catwomenSlice.actions;
export const selectCategories = (state: any) => state.catwomen.categories;
export const selectWomenBackendProducts = (state: any) => state.catwomen.backendProducts;
export const selectSelectedCategory = (state: any) => state.catwomen.selectedCategory;
export const selectSearchTerm = (state: any) => state.catwomen.searchTerm;
export const selectWomenStatus = (state: any) => state.catwomen.status;

export const selectFilteredProducts = (state: any) => {
  const { categories, selectedCategory, searchTerm } = state.catwomen;
  let products = categories.flatMap((cat: any) => cat.products || []);
  if (selectedCategory) {
    const category = categories.find((cat: any) => cat.id === selectedCategory);
    products = category ? category.products : [];
  }
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    products = products.filter((p: any) => p.name.toLowerCase().includes(term));
  }
  return products;
};

export default catwomenSlice.reducer;
