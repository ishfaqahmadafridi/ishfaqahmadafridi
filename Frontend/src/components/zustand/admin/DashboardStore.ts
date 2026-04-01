import { devtools } from "zustand/middleware";
import api from "../../../api/client";
import { DashboardStats, Order } from '../../interfaces/admin/adminDashboard/adminDashboardInterface';
import { create } from "zustand/react";

interface DashboardState {
  dashboardStats: DashboardStats | null;
  statsLoading: boolean;
  statsError: string | null;
  recent_Orders: Order[];
  

  fetchDashboardStats: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>()(
  devtools(
    (set) => ({
      dashboardStats: null,
      statsLoading: false,
      statsError: null,
      recent_Orders: [],

      fetchDashboardStats: async () => {
        set({ statsLoading: true, statsError: null });
        try {
          const [statsRes, recentOrdersRes]: any = await Promise.all([
            api.get('/admin/dashboard/stats/'),
            api.get('/admin/orders/recent_orders/?days=7')
          ]);
          
          set({
            dashboardStats: statsRes,
            recent_Orders: Array.isArray(recentOrdersRes) ? recentOrdersRes : (recentOrdersRes?.data || []),
            statsLoading: false,
          });
        } catch (error: any) {
          set({
            statsError: error?.message || 'Failed to load dashboard stats',
            statsLoading: false,
          });
        }
      },
    }),
    { name: 'DashboardStore' } // nice label in devtools
  )
);