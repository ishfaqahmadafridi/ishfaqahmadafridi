import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/client';

// Dashboard Stats
export const fetchDashboardStats = createAsyncThunk(
  'admin/fetchDashboardStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/dashboard/stats/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch dashboard stats');
    }
  }
);

// Products Management
export const fetchAllProducts = createAsyncThunk(
  'admin/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/products/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch products');
    }
  }
);

export const createProduct = createAsyncThunk(
  'admin/createProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await api.post('/admin/products/', productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to create product');
    }
  }
);

export const updateProduct = createAsyncThunk(
  'admin/updateProduct',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/admin/products/${id}/`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update product');
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/admin/products/${id}/`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete product');
    }
  }
);

export const updateProductStock = createAsyncThunk(
  'admin/updateProductStock',
  async ({ id, stock }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/admin/products/${id}/update_stock/`, { stock });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update stock');
    }
  }
);

export const fetchInventoryStatus = createAsyncThunk(
  'admin/fetchInventoryStatus',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/products/inventory_status/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch inventory status');
    }
  }
);

export const fetchLowStockProducts = createAsyncThunk(
  'admin/fetchLowStockProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/products/low_stock_products/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch low stock products');
    }
  }
);

export const fetchOutOfStockProducts = createAsyncThunk(
  'admin/fetchOutOfStockProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/products/out_of_stock_products/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch out of stock products');
    }
  }
);

// Orders Management
export const fetchAllOrders = createAsyncThunk(
  'admin/fetchAllOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/orders/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch orders');
    }
  }
);

export const fetchRecentOrders = createAsyncThunk(
  'admin/fetchRecentOrders',
  async (days = 7, { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/orders/recent_orders/?days=${days}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch recent orders');
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  'admin/updateOrderStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/admin/orders/${id}/update_status/`, { status });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update order status');
    }
  }
);

// Analytics
export const fetchSalesAnalytics = createAsyncThunk(
  'admin/fetchSalesAnalytics',
  async (period = 'week', { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/analytics/sales/?period=${period}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch sales analytics');
    }
  }
);

export const fetchUserAnalytics = createAsyncThunk(
  'admin/fetchUserAnalytics',
  async (period = 'week', { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/analytics/users/?period=${period}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch user analytics');
    }
  }
);

export const fetchTopSellingProducts = createAsyncThunk(
  'admin/fetchTopSellingProducts',
  async (limit = 10, { rejectWithValue }) => {
    try {
      const response = await api.get(`/admin/analytics/top-products/?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch top products');
    }
  }
);

// User Activity Logging
export const logUserActivity = createAsyncThunk(
  'admin/logUserActivity',
  async ({ activity_type, metadata }, { rejectWithValue }) => {
    try {
      const response = await api.post('/activity/log/', {
        activity_type,
        metadata
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to log activity');
    }
  }
);
