import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentView } from '../../redux/slices/admin/adminSlice';
import { selectIsAuthenticated } from '../../redux/slices/auth/authSlice';
import AdminSidebar from '../adminSidebar/index';
import AccessDenied from './AccessDenied';
import AdminHeader from './AdminHeader';
import AdminContent from './AdminContent';

/**
 * AdminPanel Component
 * Main admin panel container with authentication check,
 * sidebar, header, and content routing
 */
export default function AdminPanel() {
  const currentView = useSelector(selectCurrentView);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Check if user is admin
  if (!isAuthenticated) {
    return <AccessDenied />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <AdminHeader />
        <AdminContent currentView={currentView} />
      </div>
    </div>
  );
}
