import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/slices/auth/authSlice';
import { selectProfileData } from '../redux/slices/profile/profileSlice';

export default function ProfileHeader() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const profileData = useSelector(selectProfileData);
  
  const userEmail = profileData.email || 'user@example.com';
  const userName = profileData.name || 'User';

  return (
    <div className="bg-gradient-to-r from-rose-500 via-rose-600 to-purple-600 p-8 text-white">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold">
          {userName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">{userName}</h1>
          <p className="text-rose-100 mt-1">{userEmail}</p>
        </div>
      </div>
    </div>
  );
}
