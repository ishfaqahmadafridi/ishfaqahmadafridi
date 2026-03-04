import { createSlice } from '@reduxjs/toolkit';
import { fragranceCategories } from '../../../../assets/fragranceData';

const initialState = {
    categories: fragranceCategories,
    status: 'succeeded',
    error: null,
};

const fragranceSlice = createSlice({
    name: 'fragrance',
    initialState,
    reducers: {},
});

export const selectFragranceCategories = (state) => state.fragrance.categories;
export const selectFragranceStatus = (state) => state.fragrance.status;

export default fragranceSlice.reducer;
