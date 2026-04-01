import { create, StateCreator } from 'zustand';
import api from '../../../api/client';
import { Order } from '../../interfaces/admin/adminOrders/adminOrdersInterface';

export interface OrdersState {
  orders: Order[];
  recentOrders: Order[];
  ordersLoading: boolean;
  ordersError: string | null;

  fetchAllOrders: () => Promise<void>;
  fetchRecentOrders: (days?: number) => Promise<void>;
  updateOrderStatus: (id: number, status: string) => Promise<void>;
}

export const ordersStoreInitializer: StateCreator<OrdersState> = (set) => ({
  orders: [],
  recentOrders: [],
  ordersLoading: false,
  ordersError: null,

  fetchAllOrders: async () => {
    set({ ordersLoading: true, ordersError: null });
    try {
      const res: any = await api.get('/admin/orders/');
      set({ orders: Array.isArray(res) ? res : [], ordersLoading: false });
    } catch (err: any) {
      set({ ordersError: err?.message || 'Failed to fetch orders', ordersLoading: false });
    }
  },

  fetchRecentOrders: async (days = 7) => {
    set({ ordersLoading: true });
    try {
      const res: any = await api.get(`/admin/orders/recent_orders/?days=${days}`);
      set({ recentOrders: Array.isArray(res) ? res : [], ordersLoading: false });
    } catch (err: any) {
      set({ recentOrders: [], ordersLoading: false });
    }
  },

  updateOrderStatus: async (id, status) => {
    set({ ordersLoading: true });
    try {
      const res: any = await api.post(`/admin/orders/${id}/update_status/`, { status });
      set((state) => {
        const idx = state.orders.findIndex((o) => o.id === id);
        if (idx === -1) return { ordersLoading: false };
        return {
          orders: state.orders.map((o, i) => (i === idx ? res : o)),
          ordersLoading: false,
        };
      });
    } catch (err: any) {
      set({ ordersError: err?.message || 'Failed to update order status', ordersLoading: false });
    }
  },
});

export const useOrdersStore = create<OrdersState>()(ordersStoreInitializer);
