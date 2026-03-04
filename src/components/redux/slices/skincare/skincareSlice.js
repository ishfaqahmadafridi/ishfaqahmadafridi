import { createSlice } from '@reduxjs/toolkit';
import { skincareCategories } from '../../../../assets/skincareData';

const initialState = {
    categories: skincareCategories,
    status: 'succeeded',
    error: null,
};

const skincareSlice = createSlice({
    name: 'skincare',
    initialState,
    reducers: {},
});

export const selectSkincareCategories = (state) => state.skincare.categories;
export const selectSkincareStatus = (state) => state.skincare.status;

export default skincareSlice.reducer;
