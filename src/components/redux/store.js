import { configureStore } from '@reduxjs/toolkit';
import catwomenReducer from './slices/catwomenSlice';

export const store = configureStore({
  reducer: {
    catwomen: catwomenReducer,
  },
});