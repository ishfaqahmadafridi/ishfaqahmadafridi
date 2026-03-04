import React from 'react';
import { IoGridOutline, IoCubeOutline, IoCartOutline, IoStatsChartOutline } from 'react-icons/io5';
import SidebarMenuItem from './SidebarMenuItem';

/**
 * SidebarNav Component
 * Navigation menu container with all menu items
 * 
 * @param {Object} props
 * @param {string} props.currentView - Currently active view
 * @param {Function} props.onNavigate - Navigation handler function
 */
export default function SidebarNav({ currentView, onNavigate }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: IoGridOutline },
    { id: 'products', label: 'Products', icon: IoCubeOutline },
    { id: 'orders', label: 'Orders', icon: IoCartOutline },
    { id: 'analytics', label: 'Analytics', icon: IoStatsChartOutline },
  ];

  return (
    <nav className="py-4 px-3">
      {menuItems.map((item) => (
        <SidebarMenuItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          isActive={currentView === item.id}
          onClick={onNavigate}
        />
      ))}
    </nav>
  );
}
