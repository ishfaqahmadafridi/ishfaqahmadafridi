import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/client';

export const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async (profileData, { rejectWithValue }) => {
        try {
            const response = await api.put('/profile/update/', profileData);
            // Update localStorage with new values
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
    async (imageFile, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('profile_image', imageFile);
            const response = await api.post('/profile/upload-image/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            // Store image URL in localStorage
            localStorage.setItem('profile_image', response.image_url);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
