import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardStats, fetchRecentOrders } from '../../redux/slices/admin/adminThunks';
import { selectDashboardStats, selectStatsLoading, selectRecentOrders } from '../../redux/slices/admin/adminSlice';
import StatsGrid from './StatsGrid';
import RecentOrdersSection from './RecentOrdersSection';
import QuickStatsRow from './QuickStatsRow';
import LoadingSpinner from './LoadingSpinner';

/**
 * AdminDashboard Component
 * Main dashboard container that fetches and displays admin statistics,
 * recent orders, and quick metrics
 */
export default function AdminDashboard() {
  const dispatch = useDispatch();
  const stats = useSelector(selectDashboardStats);
  const loading = useSelector(selectStatsLoading);
  const recentOrders = useSelector(selectRecentOrders) || [];

  useEffect(() => {
    dispatch(fetchDashboardStats());
    dispatch(fetchRecentOrders(7));
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!stats) return null;

  return (
    <div className="space-y-6 py-2">
      {/* Stats Grid */}
      <StatsGrid stats={stats} />

      {/* Recent Orders */}
      <RecentOrdersSection orders={recentOrders} />

      {/* Quick Stats Row */}
      <QuickStatsRow stats={stats} />
    </div>
  );
}
