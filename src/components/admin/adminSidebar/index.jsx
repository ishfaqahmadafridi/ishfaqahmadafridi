import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentView, setCurrentView } from '../../redux/slices/admin/adminSlice';
import { setPage } from '../../redux/slices/uiSlice/uiSlice';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import BackToStoreButton from './BackToStoreButton';

/**
 * AdminSidebar Component
 * Fixed left sidebar for admin panel navigation
 * Contains header, navigation menu, and back to store button
 */
export default function AdminSidebar() {
  const dispatch = useDispatch();
  const currentView = useSelector(selectCurrentView);

  const handleNavigation = (viewId) => {
    dispatch(setCurrentView(viewId));
  };

  const handleBackToStore = () => {
    dispatch(setPage('home'));
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white flex flex-col shadow-xl">
      <SidebarHeader />
      <div className="flex-1 overflow-y-auto">
        <SidebarNav currentView={currentView} onNavigate={handleNavigation} />
      </div>
      <BackToStoreButton onClick={handleBackToStore} />
    </aside>
  );
}
