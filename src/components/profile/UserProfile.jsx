import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';
import { selectIsAuthenticated } from '../redux/slices/auth/authSlice';
import ProfileBackButton from './ProfileBackButton';
import ProfileContainer from './ProfileContainer';

export default function UserProfile() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [activeTab, setActiveTab] = useState('profile');

  if (!isAuthenticated) {
    dispatch(setPage('signin'));
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ProfileBackButton />
        <ProfileContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
