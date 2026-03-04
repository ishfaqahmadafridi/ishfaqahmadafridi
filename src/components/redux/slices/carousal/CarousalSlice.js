import { createSlice } from "@reduxjs/toolkit";
import { carouselImages } from '../../../../assets/carouselData';

const initialState = {
  currentIndex: 0,
  totalImages: carouselImages.length,
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setCurrentIndex } = carouselSlice.actions;
export default carouselSlice.reducer;