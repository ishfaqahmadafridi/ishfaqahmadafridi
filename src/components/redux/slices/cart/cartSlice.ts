import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  CartState, 
  AddToCartPayload, 
  RemoveFromCartPayload, 
  UpdateQuantityPayload,
  CartItem
} from '../../../interfaces/cart/cartInterface';
import { RootState } from '../../store';

const initialState: CartState = {
  items: [], // Array of { id, name, size, price, totalPrice, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
          totalPrice: (newItem.quantity || 1) * newItem.price,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartPayload>) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { id, size, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.size === size
      );
      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.quantity * item.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;
export const selectCartTotalQuantity = (state: RootState): number =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartSubtotal = (state: RootState): number =>
  state.cart.items.reduce((total, item) => total + item.totalPrice, 0);

export default cartSlice.reducer;
