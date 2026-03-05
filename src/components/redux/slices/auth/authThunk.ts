import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/client';
import { setProfileFromLogin } from '../profile/profileSlice';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.post('/register/', userData);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.post('/login/', credentials);
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
            
            // Set profile data from login response
            if (response.user) {
                dispatch(setProfileFromLogin(response.user));
            }
            
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Fetch user profile on app init (if token exists)
export const fetchUserProfile = createAsyncThunk(
    'auth/fetchProfile',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await api.get('/profile/');
            dispatch(setProfileFromLogin(response));
            return response;
        } catch (error) {
            // Token invalid - clear it
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            return rejectWithValue(error);
        }
    }
);