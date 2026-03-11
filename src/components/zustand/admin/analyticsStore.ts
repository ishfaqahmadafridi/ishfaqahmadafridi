import { create, StateCreator } from 'zustand';
import api from '../../../api/client';
import { SalesAnalytics, UserAnalytics, TopProduct } from '../../interfaces/admin/adminAnalytics/adminAnalyticsInterface';

export interface AnalyticsState {
  salesAnalytics: SalesAnalytics | null;
  userAnalytics: UserAnalytics | null;
  topProducts: TopProduct[];
  analyticsLoading: boolean;
  analyticsError: string | null;

  fetchSalesAnalytics: (period?: string) => Promise<void>;
  fetchUserAnalytics: (period?: string) => Promise<void>;
  fetchTopSellingProducts: (limit?: number) => Promise<void>;
}

export const analyticsStoreInitializer: StateCreator<AnalyticsState> = (set) => ({
  salesAnalytics: null,
  userAnalytics: null,
  topProducts: [],
  analyticsLoading: false,
  analyticsError: null,

  fetchSalesAnalytics: async (period = 'week') => {
    set({ analyticsLoading: true, analyticsError: null });
    try {
      const res: any = await api.get(`/admin/analytics/sales/?period=${period}`);
      
      const salesAnalyticsMapped: SalesAnalytics = {
        daily_sales: res.data || [],
        total_sales: Array.isArray(res.data) ? res.data.reduce((sum: number, item: any) => sum + (item.sales || 0), 0) : 0,
        total_orders: Array.isArray(res.data) ? res.data.reduce((sum: number, item: any) => sum + (item.orders || 0), 0) : 0,
        avg_order_value: res.average_order_value || 0,
      };

      set({ salesAnalytics: salesAnalyticsMapped, analyticsLoading: false });
    } catch (err: any) {
      set({ analyticsError: err?.message || 'Failed to fetch sales analytics', analyticsLoading: false });
    }
  },

  fetchUserAnalytics: async (period = 'week') => {
    set({ analyticsLoading: true });
    try {
      const res: any = await api.get(`/admin/analytics/users/?period=${period}`);
      set({ userAnalytics: res, analyticsLoading: false });
    } catch (err: any) {
      set({ analyticsError: err?.message || 'Failed to fetch user analytics', analyticsLoading: false });
    }
  },

  fetchTopSellingProducts: async (limit = 10) => {
    set({ analyticsLoading: true });
    try {
      const res: any = await api.get(`/admin/analytics/top-products/?limit=${limit}`);
      const products = Array.isArray(res) ? res : (res?.products || []);
      set({ topProducts: products, analyticsLoading: false });
    } catch (err: any) {
      set({ analyticsError: err?.message || 'Failed to fetch top products', analyticsLoading: false });
    }
  },
});

export const useAnalyticsStore = create<AnalyticsState>()(analyticsStoreInitializer);
