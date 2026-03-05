import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/client';

export const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async (profileData, { rejectWithValue }) => {
        try {
            const response = await api.put('/profile/update/', profileData);
            localStorage.setItem('user_name', profileData.name);
            localStorage.setItem('user_email', profileData.email);
            localStorage.setItem('username', profileData.username);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const changePassword = createAsyncThunk(
    'profile/changePassword',
    async (passwordData, { rejectWithValue }) => {
        try {
            const response = await api.post('/profile/change-password/', passwordData);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const uploadProfileImage = createAsyncThunk(
    'profile/uploadImage',
    async (imageFile: File, { rejectWithValue }) => {
        try {
            // Convert file to base64
            const base64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(imageFile);
            });
            
            const response = await api.post('/profile/upload-image/', {
                profile_image: base64
            });
            localStorage.setItem('profile_image', response.image_url);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchProfile = createAsyncThunk(
    'profile/fetchProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/profile/');
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
