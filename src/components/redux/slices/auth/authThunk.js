import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/client';


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
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post('/login/', credentials);
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);