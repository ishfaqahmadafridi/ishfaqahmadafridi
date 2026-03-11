// src/zustand/admin/productsStore.ts

import { create, StateCreator } from 'zustand';
import api from '../../../api/client';
import { Product, InventoryStatCardProps } from '../../interfaces/admin/adminProducts/adminProductsInterface';

// Full store interface (data + actions)
export interface ProductsState {
  products: Product[];
  productsLoading: boolean;
  productsError: string | null;
  inventoryStatus: InventoryStatCardProps;
  lowStockProducts: any[];          // ← improve to proper type if possible
  outOfStockProducts: any[];        // ← improve to proper type if possible

  fetchAllProducts: () => Promise<void>;
  createProduct: (data: any) => Promise<void>;
  updateProduct: (id: string, data: any) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  updateProductStock: (id: string, stock: number) => Promise<void>;
  fetchInventoryStatus: () => Promise<void>;
  fetchLowStockProducts: () => Promise<void>;
  fetchOutOfStockProducts: () => Promise<void>;
}

// Optional: export the initializer separately (good for slices / testing)
export const productsStoreInitializer: StateCreator<ProductsState> = (set, get) => ({
  products: [],
  productsLoading: false,
  productsError: null,
  inventoryStatus: { label: '', value: 0, color: '' },
  lowStockProducts: [],
  outOfStockProducts: [],

  fetchAllProducts: async () => {
    set({ productsLoading: true, productsError: null });
    try {
      const res: any = await api.get('/admin/products/');
      set({ products: Array.isArray(res) ? res : [], productsLoading: false });
    } catch (err: any) {
      set({ productsError: err?.message || 'Failed to fetch products', productsLoading: false });
    }
  },

  createProduct: async (data) => {
    set({ productsLoading: true });
    try {
      const res: any = await api.post('/admin/products/', data);
      set((state) => ({
        products: [...state.products, res],
        productsLoading: false,
      }));
    } catch (err: any) {
      set({ productsError: err?.message, productsLoading: false });
    }
  },

  updateProduct: async (id, data) => {
    set({ productsLoading: true });
    try {
      const res: any = await api.patch(`/admin/products/${id}/`, data);
      set((state) => {
        const idx = state.products.findIndex((p) => p.id === Number(id));
        if (idx === -1) return { productsLoading: false };
        return {
          products: state.products.map((p, i) => (i === idx ? res : p)),
          productsLoading: false,
        };
      });
    } catch (err: any) {
      set({ productsError: err?.message, productsLoading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ productsLoading: true });
    try {
      await api.delete(`/admin/products/${id}/`);
      set((state) => ({
        products: state.products.filter((p) => p.id !== Number(id)),
        productsLoading: false,
      }));
    } catch (err: any) {
      set({ productsError: err?.message, productsLoading: false });
    }
  },

  updateProductStock: async (id, stock) => {
    set({ productsLoading: true });
    try {
      const res: any = await api.post(`/admin/products/${id}/update_stock/`, { stock });
      set((state) => {
        const idx = state.products.findIndex((p) => p.id === Number(id));
        if (idx === -1) return { productsLoading: false };
        return {
          products: state.products.map((p, i) => (i === idx ? res : p)),
          productsLoading: false,
        };
      });
    } catch (err: any) {
      set({ productsError: err?.message, productsLoading: false });
    }
  },

  fetchInventoryStatus: async () => {
    try {
      const res: any = await api.get('/admin/products/inventory_status/');
      set({ inventoryStatus: res ?? { label: '', value: 0, color: '' } });
    } catch {
      set({ inventoryStatus: { label: '', value: 0, color: '' } });
    }
  },

  fetchLowStockProducts: async () => {
    try {
      const res: any = await api.get('/admin/products/low_stock_products/');
      set({ lowStockProducts: res ?? [] });
    } catch {
      set({ lowStockProducts: [] });
    }
  },

  fetchOutOfStockProducts: async () => {
    try {
      const res: any = await api.get('/admin/products/out_of_stock_products/');
      set({ outOfStockProducts: res ?? [] });
    } catch {
      set({ outOfStockProducts: [] });
    }
  },
});

// Final exported hook — this is what you import
export const useProductsStore = create<ProductsState>()(productsStoreInitializer);