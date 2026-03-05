import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../../../assets/catBoysGData';

const initialState = {
    categories: categories,
};

const catBoysGSlice = createSlice({
    name: 'catBoysG',
    initialState,
    reducers: {},
});

export const selectCategories = (state) => state.catBoysG.categories;

export default catBoysGSlice.reducer;
