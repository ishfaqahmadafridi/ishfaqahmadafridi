import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { carouselImages } from '../../../../assets/carouselData';

interface CarouselState {
  currentIndex: number;
  totalImages: number;
}

const initialState: CarouselState = {
  currentIndex: 0,
  totalImages: carouselImages.length,
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setCurrentIndex } = carouselSlice.actions;
export default carouselSlice.reducer;