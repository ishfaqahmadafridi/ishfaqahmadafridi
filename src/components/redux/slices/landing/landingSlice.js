import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showButton: false,
};

const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        setShowButton: (state, action) => {
            state.showButton = action.payload;
        },
    },
});

export const { setShowButton } = landingSlice.actions;
export const selectShowButton = (state) => state.landing.showButton;

export default landingSlice.reducer;
