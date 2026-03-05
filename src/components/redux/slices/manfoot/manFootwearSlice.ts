import { createSlice } from '@reduxjs/toolkit';
import { manFootwearCategories } from '../../../../assets/manFootwaer';

const initialState = {
    categories: manFootwearCategories,
    status: 'succeeded',
    error: null,
};

const manFootwearSlice = createSlice({
    name: 'manFootwear',
    initialState,
    reducers: {},
});

export const selectManFootwearCategories = (state) => state.manFootwear.categories;
export const selectManFootwearStatus = (state) => state.manFootwear.status;

export default manFootwearSlice.reducer;
