import { createSlice } from '@reduxjs/toolkit';
import { womenFootwearCategories } from '../../../../assets/womenFootwearData';

const initialState = {
    categories: womenFootwearCategories,
    status: 'succeeded',
    error: null,
};

const womenFootwearSlice = createSlice({
    name: 'womenFootwear',
    initialState,
    reducers: {},
});

export const selectWomenFootwearData = (state) => state.womenFootwear.categories;
export const selectWomenFootwearStatus = (state) => state.womenFootwear.status;

export default womenFootwearSlice.reducer;
