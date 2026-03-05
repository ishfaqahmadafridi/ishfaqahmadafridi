import { createSlice } from '@reduxjs/toolkit';
import { updateProfile, changePassword, uploadProfileImage, fetchProfile } from './profileThunk';

const initialState = {
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
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearUpdateMessage: (state) => {
            state.updateMessage = '';
            state.updateError = null;
            state.updateStatus = 'idle';
        },
        clearPasswordMessage: (state) => {
            state.passwordMessage = '';
            state.passwordError = null;
            state.passwordStatus = 'idle';
        },
        updateLocalProfile: (state, action) => {
            state.profileData = { ...state.profileData, ...action.payload };
        },
        removeProfileImage: (state) => {
            state.profileData.profileImage = null;
            localStorage.removeItem('profile_image');
        },
        setProfileFromLogin: (state, action) => {
            const user = action.payload;
            state.profileData = {
                name: user.username || '',
                email: user.email || '',
                username: user.username || '',
                profileImage: user.profile_image || null,
            };
            localStorage.setItem('user_name', user.username || '');
            localStorage.setItem('user_email', user.email || '');
            localStorage.setItem('username', user.username || '');
            if (user.profile_image) {
                localStorage.setItem('profile_image', user.profile_image);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Profile
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.profileData = {
                    name: action.payload.name || '',
                    email: action.payload.email || '',
                    username: action.payload.username || '',
                    profileImage: action.payload.profile_image || null,
                };
            })
            // Update Profile
            .addCase(updateProfile.pending, (state) => {
                state.updateStatus = 'loading';
                state.updateError = null;
                state.updateMessage = '';
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.updateStatus = 'succeeded';
                state.profileData = { ...state.profileData, ...action.meta.arg };
                state.updateMessage = 'Profile updated successfully!';
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.updateStatus = 'failed';
                state.updateError = action.payload || 'Failed to update profile';
                state.updateMessage = 'Failed to update profile. Please try again.';
            })
            // Change Password
            .addCase(changePassword.pending, (state) => {
                state.passwordStatus = 'loading';
                state.passwordError = null;
                state.passwordMessage = '';
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.passwordStatus = 'succeeded';
                state.passwordMessage = 'Password changed successfully!';
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.passwordStatus = 'failed';
                state.passwordError = action.payload || 'Failed to change password';
                state.passwordMessage = 'Failed to change password. Please check your current password.';
            })
            // Upload Profile Image
            .addCase(uploadProfileImage.pending, (state) => {
                state.imageStatus = 'loading';
                state.imageError = null;
            })
            .addCase(uploadProfileImage.fulfilled, (state, action) => {
                state.imageStatus = 'succeeded';
                state.profileData.profileImage = action.payload.image_url;
                localStorage.setItem('profile_image', action.payload.image_url);
            })
            .addCase(uploadProfileImage.rejected, (state, action) => {
                state.imageStatus = 'failed';
                state.imageError = action.payload || 'Failed to upload image';
            });
    },
});

export const { 
    clearUpdateMessage, 
    clearPasswordMessage, 
    updateLocalProfile, 
    removeProfileImage,
    setProfileFromLogin 
} = profileSlice.actions;

export const selectProfileData = (state) => state.profile.profileData;
export const selectUpdateStatus = (state) => state.profile.updateStatus;
export const selectPasswordStatus = (state) => state.profile.passwordStatus;
export const selectImageStatus = (state) => state.profile.imageStatus;
export const selectUpdateMessage = (state) => state.profile.updateMessage;
export const selectPasswordMessage = (state) => state.profile.passwordMessage;
export const selectUpdateError = (state) => state.profile.updateError;
export const selectPasswordError = (state) => state.profile.passwordError;

export default profileSlice.reducer;
