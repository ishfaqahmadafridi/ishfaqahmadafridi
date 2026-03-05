import { createSlice } from '@reduxjs/toolkit';
import { womenCategories } from '../../../../assets/womenCategoryData';

const initialState = {
    categories: womenCategories,
    status: 'succeeded',
    error: null,
};

const womenCategorySlice = createSlice({
    name: 'womenCategory',
    initialState,
    reducers: {},
});

export const selectWomenCategoryData = (state) => state.womenCategory.categories;
export const selectWomenCategoryStatus = (state) => state.womenCategory.status;

export default womenCategorySlice.reducer;
