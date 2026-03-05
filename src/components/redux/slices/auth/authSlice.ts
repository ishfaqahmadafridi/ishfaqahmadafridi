import { createSlice, } from '@reduxjs/toolkit';
import { loginUser, registerUser, fetchUserProfile } from './authThunk';






const initialState = {
    user: null,
    isAuthenticated: !!localStorage.getItem('access_token'),
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
        },
    },
    extraReducers: (builder) => {
        builder
            // Register User
            .addCase(registerUser.pending, (state) => { state.status = 'loading'; })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Login User
            .addCase(loginUser.pending, (state) => { state.status = 'loading'; })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isAuthenticated = true;
                state.user = (action.payload as any).user ?? action.payload; // Backend may return user nested or flat
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Fetch User Profile (on app init)
            .addCase(fetchUserProfile.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state) => {
                state.status = 'failed';
                // Do NOT set isAuthenticated = false here.
                // The API client (client.ts) already handles real 401 errors by removing
                // the token and redirecting to /signin.
                // If the profile call fails for any other reason (network issue, backend down),
                // keep the user authenticated based on the token still in localStorage.
            });
    },
});

export const { logout } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export const selectUser = (state) => state.auth.user;
export const selectIsAdmin = (state) => state.auth.user?.is_staff || false;

export default authSlice.reducer;
