import { createSlice } from '@reduxjs/toolkit';
import { menCategories } from '../../../../assets/menData';

const initialState = {
    categories: menCategories,
    status: 'succeeded',
    error: null,
};

const menSlice = createSlice({
    name: 'men',
    initialState,
    reducers: {},
});

export const selectMenCategories = (state) => state.men.categories;
export const selectMenStatus = (state) => state.men.status;

export default menSlice.reducer;
