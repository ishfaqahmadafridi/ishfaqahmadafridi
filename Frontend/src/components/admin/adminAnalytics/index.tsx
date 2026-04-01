import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useAnalyticsStore } from '../../zustand/admin/analyticsStore';
import AnalyticsHeader from './AnalyticsHeader';
import SalesChart from './SalesChart';
import UserActivityChart from './UserActivityChart';
import TopProductsChart from './TopProductsChart';
import LoadingSpinner from './LoadingSpinner';

export default function AdminAnalytics() {
  const {
    salesAnalytics,
    userAnalytics,
    topProducts,
    analyticsLoading: loading,
    fetchSalesAnalytics,
    fetchUserAnalytics,
    fetchTopSellingProducts,
  } = useAnalyticsStore(
    useShallow((s) => ({
      salesAnalytics: s.salesAnalytics,
      userAnalytics: s.userAnalytics,
      topProducts: s.topProducts,
      analyticsLoading: s.analyticsLoading,
      fetchSalesAnalytics: s.fetchSalesAnalytics,
      fetchUserAnalytics: s.fetchUserAnalytics,
      fetchTopSellingProducts: s.fetchTopSellingProducts,
    }))
  );

  useEffect(() => {
    fetchSalesAnalytics();
    fetchUserAnalytics();
    fetchTopSellingProducts();
  }, [fetchSalesAnalytics, fetchUserAnalytics, fetchTopSellingProducts]);

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
