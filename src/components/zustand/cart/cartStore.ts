import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../../../api/client';
import type {
  CartItem,
  AddToCartPayload,
  RemoveFromCartPayload,
  UpdateQuantityPayload
} from '../../interfaces/cart/cartInterface';

export interface CartState {
  items: CartItem[];

  addToCart: (item: AddToCartPayload) => void;
  removeFromCart: (payload: RemoveFromCartPayload) => void;
  updateQuantity: (payload: UpdateQuantityPayload) => void;
  clearCart: () => void;

  // Selectors as getter methods
  getCartItems: () => CartItem[];
  getCartTotalQuantity: () => number;
  getCartSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (newItem) => {
        // Log activity to backend
        api.post('/activity/log/', { 
          activity_type: 'add_to_cart',
          metadata: { product_id: newItem.id, product_name: newItem.name, size: newItem.size }
        }).catch(err => console.error('Failed to log add_to_cart activity', err));

        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === newItem.id && item.size === newItem.size
          );
          
          const newItems = [...state.items];
          
          if (existingItemIndex >= 0) {
            const existingItem = newItems[existingItemIndex];
            const newQty = existingItem.quantity + (newItem.quantity || 1);
            newItems[existingItemIndex] = {
              ...existingItem,
              quantity: newQty,
              totalPrice: newQty * existingItem.price,
            };
          } else {
            const qty = newItem.quantity || 1;
            newItems.push({
              ...newItem,
              quantity: qty,
              totalPrice: qty * newItem.price,
            });
          }
          
          return { items: newItems };
        });
      },

      removeFromCart: ({ id, size }) => set((state) => ({
        items: state.items.filter((item) => !(item.id === id && item.size === size))
      })),

      updateQuantity: ({ id, size, quantity }) => set((state) => ({
        items: state.items.map((item) => {
          if (item.id === id && item.size === size) {
            return {
              ...item,
              quantity,
              totalPrice: quantity * item.price
            };
          }
          return item;
        })
      })),

      clearCart: () => set({ items: [] }),

      // derived state functions
      getCartItems: () => get().items,
      getCartTotalQuantity: () => get().items.reduce((total, item) => total + item.quantity, 0),
      getCartSubtotal: () => get().items.reduce((total, item) => total + item.totalPrice, 0),
    }),
    {
      name: 'ecommerce-cart-storage', // unique name for localStorage key
    }
  )
);
