import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedSize: null,
    quantity: 1,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedSize: (state, action) => {
            state.selectedSize = action.payload;
        },
        setQuantity: (state, action) => {
            state.quantity = Math.max(1, action.payload);
        },
        resetProductState: (state) => {
            state.selectedSize = null;
            state.quantity = 1;
        },
    },
});

export const { setSelectedSize, setQuantity, resetProductState } = productSlice.actions;
export const selectSelectedSize = (state) => state.product.selectedSize;
export const selectQuantity = (state) => state.product.quantity;

export default productSlice.reducer;
