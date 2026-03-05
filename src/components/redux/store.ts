import { configureStore } from '@reduxjs/toolkit';
import catwomenReducer from './slices/catwomenG/catwomenSlice';
import cartReducer from './slices/cart/cartSlice';
import catBoysGReducer from './slices/catBoyG/catBoysGSlice';
import fragranceReducer from './slices/Fragrance/fragranceSlice';
import makeupReducer from './slices/makeup/makeupSlice';
import menReducer from './slices/men/menSlice';
import skincareReducer from './slices/skincare/skincareSlice';
import uiReducer from './slices/uiSlice/uiSlice';
import landingReducer from './slices/landing/landingSlice';
import manFootwearReducer from './slices/manfoot/manFootwearSlice';
import womenCategoryReducer from './slices/womencategory/womenCategorySlice';
import womenFootwearReducer from './slices/womenFoot/womenFootwearSlice';
import productReducer from './slices/product/productSlice';
import carouselReducer from './slices/carousal/CarousalSlice';
import authReducer from './slices/auth/authSlice';
import adminReducer from './slices/admin/adminSlice';
import profileReducer from './slices/profile/profileSlice';

export const store = configureStore({
  reducer: {
    catwomen: catwomenReducer,
    cart: cartReducer,
    catBoysG: catBoysGReducer,
    fragrance: fragranceReducer,
    makeup: makeupReducer,
    men: menReducer,
    skincare: skincareReducer,
    ui: uiReducer,
    landing: landingReducer,
    manFootwear: manFootwearReducer,
    womenCategory: womenCategoryReducer,
    womenFootwear: womenFootwearReducer,
    product: productReducer,
    carousel: carouselReducer,
    auth: authReducer,
    admin: adminReducer,
    profile: profileReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;