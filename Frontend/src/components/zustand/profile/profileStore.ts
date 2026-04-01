import { create } from 'zustand';
import api from '../../../api/client';

export interface ProfileData {
  name: string;
  email: string;
  username: string;
  profileImage: string | null;
}

type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface ProfileState {
  profileData: ProfileData;
  updateStatus: StatusType;
  passwordStatus: StatusType;
  imageStatus: StatusType;
  updateError: any | null;
  passwordError: any | null;
  imageError: any | null;
  updateMessage: string;
  passwordMessage: string;

  clearUpdateMessage: () => void;
  clearPasswordMessage: () => void;
  updateLocalProfile: (data: Partial<ProfileData>) => void;
  removeProfileImage: () => void;
  setProfileFromLogin: (user: any) => void;

  updateProfile: (profileData: any) => Promise<any>;
  changePassword: (passwordData: any) => Promise<any>;
  uploadProfileImage: (imageFile: File) => Promise<any>;
  fetchProfile: () => Promise<any>;
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  profileData: {
    name: localStorage.getItem('user_name') || '',
    email: localStorage.getItem('user_email') || '',
    username: localStorage.getItem('username') || '',
    profileImage: localStorage.getItem('profile_image') || null,
  },
  updateStatus: 'idle',
  passwordStatus: 'idle',
  imageStatus: 'idle',
  updateError: null,
  passwordError: null,
  imageError: null,
  updateMessage: '',
  passwordMessage: '',

  clearUpdateMessage: () => set({ updateMessage: '', updateError: null, updateStatus: 'idle' }),
  clearPasswordMessage: () => set({ passwordMessage: '', passwordError: null, passwordStatus: 'idle' }),
  
  updateLocalProfile: (data) => set((state) => ({ profileData: { ...state.profileData, ...data } })),
  
  removeProfileImage: () => {
    localStorage.removeItem('profile_image');
    set((state) => ({ profileData: { ...state.profileData, profileImage: null } }));
  },

  setProfileFromLogin: (user) => {
    const data = {
      name: user.username || '',
      email: user.email || '',
      username: user.username || '',
      profileImage: user.profile_image || null,
    };
    
    localStorage.setItem('user_name', data.name);
    localStorage.setItem('user_email', data.email);
    localStorage.setItem('username', data.username);
    if (data.profileImage) {
      localStorage.setItem('profile_image', data.profileImage);
    }
    
    set({ profileData: data });
  },

  updateProfile: async (profileData) => {
    set({ updateStatus: 'loading', updateError: null, updateMessage: '' });
    try {
      const response: any = await api.put('/profile/update/', profileData);
      
      localStorage.setItem('user_name', profileData.name);
      localStorage.setItem('user_email', profileData.email);
      localStorage.setItem('username', profileData.username);
      
      set((state) => ({ 
        updateStatus: 'succeeded', 
        profileData: { ...state.profileData, ...profileData },
        updateMessage: 'Profile updated successfully!' 
      }));
      return response;
    } catch (error: any) {
      set({ 
        updateStatus: 'failed', 
        updateError: error || 'Failed to update profile',
        updateMessage: 'Failed to update profile. Please try again.'
      });
      throw error;
    }
  },

  changePassword: async (passwordData) => {
    set({ passwordStatus: 'loading', passwordError: null, passwordMessage: '' });
    try {
      const response = await api.post('/profile/change-password/', passwordData);
      set({ passwordStatus: 'succeeded', passwordMessage: 'Password changed successfully!' });
      return response;
    } catch (error: any) {
      set({ 
        passwordStatus: 'failed', 
        passwordError: error || 'Failed to change password',
        passwordMessage: 'Failed to change password. Please check your current password.' 
      });
      throw error;
    }
  },

  uploadProfileImage: async (imageFile: File) => {
    set({ imageStatus: 'loading', imageError: null });
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
      });
      
      const response: any = await api.post('/profile/upload-image/', { profile_image: base64 });
      
      localStorage.setItem('profile_image', response.image_url);
      set((state) => ({
        imageStatus: 'succeeded',
        profileData: { ...state.profileData, profileImage: response.image_url }
      }));
      return response;
    } catch (error: any) {
      set({ imageStatus: 'failed', imageError: error || 'Failed to upload image' });
      throw error;
    }
  },

  fetchProfile: async () => {
    try {
      const response: any = await api.get('/profile/');
      set((state) => ({
        profileData: {
          name: response.name || '',
          email: response.email || '',
          username: response.username || '',
          profileImage: response.profile_image || null,
        }
      }));
      return response;
    } catch (error) {
      throw error;
    }
  },
}));
