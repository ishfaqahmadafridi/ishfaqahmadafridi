import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesAnalytics, fetchUserAnalytics, fetchTopSellingProducts } from '../../redux/slices/admin/adminThunks';
import { selectSalesAnalytics, selectUserAnalytics, selectTopProducts, selectAnalyticsLoading } from '../../redux/slices/admin/adminSlice';
import type { AppDispatch } from '../../redux/store';
import AnalyticsHeader from './AnalyticsHeader';
import SalesChart from './SalesChart';
import UserActivityChart from './UserActivityChart';
import TopProductsChart from './TopProductsChart';
import LoadingSpinner from './LoadingSpinner';

export default function AdminAnalytics() {
  const dispatch = useDispatch<AppDispatch>();
  const salesAnalytics = useSelector(selectSalesAnalytics);
  const userAnalytics = useSelector(selectUserAnalytics);
  const topProducts = useSelector(selectTopProducts) as any[];
  const loading = useSelector(selectAnalyticsLoading);

  useEffect(() => {
    dispatch(fetchSalesAnalytics() as any);
    dispatch(fetchUserAnalytics() as any);
    dispatch(fetchTopSellingProducts() as any);
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6 py-2">
      <AnalyticsHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart data={salesAnalytics} />
        <UserActivityChart data={userAnalytics} />
      </div>
      <TopProductsChart products={topProducts} />
    </div>
  );
}
