import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { menCategories } from '../../../../assets/menData';
import { ecommerceService } from '../../../../api/ecommerceService';

// Async thunk to fetch men's products from backend
export const fetchMenProducts = createAsyncThunk(
    'men/fetchProducts',
    async () => {
        const response = await ecommerceService.getProductsByCategory('men');
        return response;
    }
);

const initialState = {
    categories: menCategories,
    backendProducts: [] as any[],
    status: 'idle',
    error: null as string | null,
};

const menSlice = createSlice({
    name: 'men',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMenProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.backendProducts = Array.isArray(action.payload) ? action.payload : [];
            })
            .addCase(fetchMenProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const selectMenCategories = (state: any) => state.men.categories;
export const selectMenBackendProducts = (state: any) => state.men.backendProducts;
export const selectMenStatus = (state: any) => state.men.status;

export default menSlice.reducer;
