import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSalesAnalytics,
  fetchUserAnalytics,
  fetchTopSellingProducts
} from '../../redux/slices/admin/adminThunks';
import {
  selectSalesAnalytics,
  selectUserAnalytics,
  selectTopProducts,
  selectAnalyticsLoading
} from '../../redux/slices/admin/adminSlice';
import AnalyticsHeader from './AnalyticsHeader';
import SalesChart from './SalesChart';
import UserActivityChart from './UserActivityChart';
import TopProductsChart from './TopProductsChart';
import LoadingSpinner from './LoadingSpinner';

export default function AdminAnalytics() {
  const dispatch = useDispatch();
  const salesAnalytics = useSelector(selectSalesAnalytics);
  const userAnalytics = useSelector(selectUserAnalytics);
  const topProducts = useSelector(selectTopProducts) || [];
  const loading = useSelector(selectAnalyticsLoading);
  const [period, setPeriod] = useState('week');

  useEffect(() => {
    dispatch(fetchSalesAnalytics(period));
    dispatch(fetchUserAnalytics(period));
    dispatch(fetchTopSellingProducts(10));
  }, [dispatch, period]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6 py-2">
      <AnalyticsHeader period={period} onPeriodChange={handlePeriodChange} />
      
      <SalesChart salesAnalytics={salesAnalytics} />
      
      <UserActivityChart userAnalytics={userAnalytics} />
      
      <TopProductsChart topProducts={topProducts} />
    </div>
  );
}
