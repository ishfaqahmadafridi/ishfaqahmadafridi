import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  fetchDashboardStats,
  fetchAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductStock,
  fetchInventoryStatus,
  fetchLowStockProducts,
  fetchOutOfStockProducts,
  fetchAllOrders,
  fetchRecentOrders,
  updateOrderStatus,
  fetchSalesAnalytics,
  fetchUserAnalytics,
  fetchTopSellingProducts
} from './adminThunks';

const initialState = {
  // Dashboard
  dashboardStats: null,
  statsLoading: false,
  statsError: null,

  // Products
  products: [],
  productsLoading: false,
  productsError: null,
  inventoryStatus: null,
  lowStockProducts: [],
  outOfStockProducts: [],

  // Orders
  orders: [],
  recentOrders: [],
  ordersLoading: false,
  ordersError: null,

  // Analytics
  salesAnalytics: null,
  userAnalytics: null,
  topProducts: [],
  analyticsLoading: false,
  analyticsError: null,

  // UI
  selectedProduct: null,
  selectedOrder: null,
  currentView: 'dashboard', // dashboard, products, orders, analytics
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    clearErrors: (state) => {
      state.statsError = null;
      state.productsError = null;
      state.ordersError = null;
      state.analyticsError = null;
    },
  },
  extraReducers: (builder) => {
    // Dashboard Stats
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.statsLoading = true;
        state.statsError = null;
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.statsLoading = false;
        state.dashboardStats = action.payload;
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.statsLoading = false;
        state.statsError = action.payload;
      });

    // Fetch All Products
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.productsLoading = true;
        state.productsError = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.payload;
      });

    // Create Product
    builder
      .addCase(createProduct.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.productsLoading = false;
        if (!state.products) {
          state.products = [];
        }
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.payload;
      });

    // Update Product
    builder
      .addCase(updateProduct.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.productsLoading = false;
        if (!state.products) {
          state.products = [];
        }
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.payload;
      });

    // Delete Product
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = (state.products || []).filter(p => p.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.payload;
      });

    // Update Product Stock
    builder
      .addCase(updateProductStock.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(updateProductStock.fulfilled, (state, action) => {
        state.productsLoading = false;
        if (!state.products) {
          state.products = [];
        }
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProductStock.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.payload;
      });

    // Inventory Status
    builder
      .addCase(fetchInventoryStatus.fulfilled, (state, action) => {
        state.inventoryStatus = action.payload || {};
      })
      .addCase(fetchInventoryStatus.rejected, (state, action) => {
        state.inventoryStatus = {};
      });

    // Low Stock Products
    builder
      .addCase(fetchLowStockProducts.fulfilled, (state, action) => {
        state.lowStockProducts = action.payload || [];
      })
      .addCase(fetchLowStockProducts.rejected, (state) => {
        state.lowStockProducts = [];
      });

    // Out of Stock Products
    builder
      .addCase(fetchOutOfStockProducts.fulfilled, (state, action) => {
        state.outOfStockProducts = action.payload || [];
      })
      .addCase(fetchOutOfStockProducts.rejected, (state) => {
        state.outOfStockProducts = [];
      });

    // Fetch All Orders
    builder
      .addCase(fetchAllOrders.pending, (state) => {
        state.ordersLoading = true;
        state.ordersError = null;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.ordersLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.ordersLoading = false;
        state.ordersError = action.payload;
      });

    // Fetch Recent Orders
    builder
      .addCase(fetchRecentOrders.pending, (state) => {
        state.ordersLoading = true;
      })
      .addCase(fetchRecentOrders.fulfilled, (state, action) => {
        state.ordersLoading = false;
        state.recentOrders = action.payload || [];
      })
      .addCase(fetchRecentOrders.rejected, (state, action) => {
        state.ordersLoading = false;
        state.recentOrders = [];
      });

    // Update Order Status
    builder
      .addCase(updateOrderStatus.pending, (state) => {
        state.ordersLoading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.ordersLoading = false;
        const index = state.orders.findIndex(o => o.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.ordersLoading = false;
        state.ordersError = action.payload;
      });

    // Sales Analytics
    builder
      .addCase(fetchSalesAnalytics.pending, (state) => {
        state.analyticsLoading = true;
        state.analyticsError = null;
      })
      .addCase(fetchSalesAnalytics.fulfilled, (state, action) => {
        state.analyticsLoading = false;
        state.salesAnalytics = action.payload;
      })
      .addCase(fetchSalesAnalytics.rejected, (state, action) => {
        state.analyticsLoading = false;
        state.analyticsError = action.payload;
      });

    // User Analytics
    builder
      .addCase(fetchUserAnalytics.pending, (state) => {
        state.analyticsLoading = true;
      })
      .addCase(fetchUserAnalytics.fulfilled, (state, action) => {
        state.analyticsLoading = false;
        state.userAnalytics = action.payload;
      })
      .addCase(fetchUserAnalytics.rejected, (state, action) => {
        state.analyticsLoading = false;
        state.analyticsError = action.payload;
      });

    // Top Selling Products
    builder
      .addCase(fetchTopSellingProducts.pending, (state) => {
        state.analyticsLoading = true;
      })
      .addCase(fetchTopSellingProducts.fulfilled, (state, action) => {
        state.analyticsLoading = false;
        // Handle both array response and object with products property
        state.topProducts = Array.isArray(action.payload) 
          ? action.payload 
          : (action.payload?.products || []);
      })
      .addCase(fetchTopSellingProducts.rejected, (state, action) => {
        state.analyticsLoading = false;
        state.analyticsError = action.payload;
      });
  },
});

export const {
  setCurrentView,
  setSelectedProduct,
  setSelectedOrder,
  clearErrors
} = adminSlice.actions;

// Base selectors
const selectAdminState = (state) => state.admin || {};

// Simple selectors (no memoization needed for primitives)
export const selectDashboardStats = (state) => state.admin?.dashboardStats;
export const selectStatsLoading = (state) => state.admin?.statsLoading;
export const selectStatsError = (state) => state.admin?.statsError;
export const selectProductsLoading = (state) => state.admin?.productsLoading;
export const selectProductsError = (state) => state.admin?.productsError;
export const selectInventoryStatus = (state) => state.admin?.inventoryStatus;
export const selectOrdersLoading = (state) => state.admin?.ordersLoading;
export const selectSalesAnalytics = (state) => state.admin?.salesAnalytics;
export const selectUserAnalytics = (state) => state.admin?.userAnalytics;
export const selectAnalyticsLoading = (state) => state.admin?.analyticsLoading;
export const selectCurrentView = (state) => state.admin?.currentView;
export const selectSelectedProduct = (state) => state.admin?.selectedProduct;
export const selectSelectedOrder = (state) => state.admin?.selectedOrder;

// Memoized selectors for arrays (prevents new reference on each call)
const EMPTY_ARRAY = [];

export const selectProducts = createSelector(
  [selectAdminState],
  (admin) => admin?.products ?? EMPTY_ARRAY
);

export const selectLowStockProducts = createSelector(
  [selectAdminState],
  (admin) => admin?.lowStockProducts ?? EMPTY_ARRAY
);

export const selectOutOfStockProducts = createSelector(
  [selectAdminState],
  (admin) => admin?.outOfStockProducts ?? EMPTY_ARRAY
);

export const selectOrders = createSelector(
  [selectAdminState],
  (admin) => admin?.orders ?? EMPTY_ARRAY
);

export const selectRecentOrders = createSelector(
  [selectAdminState],
  (admin) => admin?.recentOrders ?? EMPTY_ARRAY
);

export const selectTopProducts = createSelector(
  [selectAdminState],
  (admin) => admin?.topProducts ?? EMPTY_ARRAY
);

export default adminSlice.reducer;
