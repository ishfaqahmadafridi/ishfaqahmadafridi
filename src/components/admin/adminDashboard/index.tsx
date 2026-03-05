import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardStats, fetchRecentOrders } from '../../redux/slices/admin/adminThunks';
import { selectDashboardStats, selectStatsLoading, selectStatsError, selectRecentOrders } from '../../redux/slices/admin/adminSlice';
import type { AppDispatch } from '../../redux/store';
import type { Order } from '../../interfaces/admin/adminDashboard/adminDashboardInterface';
import StatsGrid from './StatsGrid';
import RecentOrdersSection from './RecentOrdersSection';
import QuickStatsRow from './QuickStatsRow';
import LoadingSpinner from './LoadingSpinner';

export default function AdminDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const stats = useSelector(selectDashboardStats);
  const loading = useSelector(selectStatsLoading);
  const error = useSelector(selectStatsError);
  const recentOrders = (useSelector(selectRecentOrders) || []) as Order[];

  useEffect(() => {
    dispatch(fetchDashboardStats());
    dispatch(fetchRecentOrders());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !stats) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="text-red-500 text-lg mb-4">
          {error ? 'Failed to load dashboard stats' : 'No dashboard data available'}
        </p>
        <p className="text-gray-500 text-sm mb-4">Make sure you are logged in as an admin user</p>
        <button 
          onClick={() => {
            dispatch(fetchDashboardStats());
            dispatch(fetchRecentOrders());
          }}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-2">
      <StatsGrid stats={stats} />
      <RecentOrdersSection orders={recentOrders} />
      <QuickStatsRow stats={stats} />
    </div>
  );
}
