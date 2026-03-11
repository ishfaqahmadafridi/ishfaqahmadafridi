import { create } from 'zustand';
import api from '../../../api/client';
import { useProfileStore } from '../profile/profileStore';

export interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any | null;

  logout: () => Promise<void>;
  registerUser: (userData: any) => Promise<any>;
  loginUser: (credentials: any) => Promise<any>;
  fetchUserProfile: () => Promise<any>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: (() => {
    const token = localStorage.getItem('access_token');
    return !!token && token !== 'undefined' && token !== 'null';
  })(),
  status: 'idle',
  error: null,

  logout: async () => {
    try {
      await api.post('/activity/log/', { activity_type: 'logout' });
    } catch (e) {
      console.error('Failed to log logout activity', e);
    }
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  registerUser: async (userData: any) => {
    set({ status: 'loading', error: null });
    try {
      const response = await api.post('/register/', userData);
      set({ status: 'succeeded', error: null });
      return response;
    } catch (error: any) {
      set({ status: 'failed', error });
      throw error;
    }
  },

  loginUser: async (credentials: any) => {
    set({ status: 'loading', error: null });
    try {
      const response: any = await api.post('/login/', credentials);
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      
      const user = response.user ?? response; // Backend may return user nested or flat
      set({ status: 'succeeded', isAuthenticated: true, user });

      if (response.user) {
        useProfileStore.getState().setProfileFromLogin(response.user);
      }

      return response;
    } catch (error: any) {
      set({ status: 'failed', error });
      throw error;
    }
  },

  fetchUserProfile: async () => {
    const token = localStorage.getItem('access_token');
    if (!token || token === 'undefined' || token === 'null') {
      set({ isAuthenticated: false, user: null });
      return null;
    }
    set({ status: 'loading', error: null });
    try {
      const response: any = await api.get('/profile/');
      set({ status: 'succeeded', isAuthenticated: true, user: response });
      
      // Sync with profile store
      useProfileStore.getState().setProfileFromLogin(response);

      return response;
    } catch (error: any) {
      // Do NOT set isAuthenticated = false here.
      // API client handles 401. If this fails for network issues, keep authenticated.
      set({ status: 'failed', error });
      throw error; // Let caller know, but if it's app init it might just log
    }
  },
}));
