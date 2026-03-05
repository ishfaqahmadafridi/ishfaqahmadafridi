import { createSlice } from '@reduxjs/toolkit';
import { makeupCategories } from '../../../../assets/makeupData';

const initialState = {
    categories: makeupCategories,
    status: 'succeeded',
    error: null,
};

const makeupSlice = createSlice({
    name: 'makeup',
    initialState,
    reducers: {},
});

export const selectMakeupCategories = (state) => state.makeup.categories;
export const selectMakeupStatus = (state) => state.makeup.status;

export default makeupSlice.reducer;
