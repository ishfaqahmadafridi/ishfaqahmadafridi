import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../../redux/slices/admin/adminThunks';
import { selectOrders, selectOrdersLoading } from '../../redux/slices/admin/adminSlice';
import type { AppDispatch } from '../../redux/store';
import OrdersHeader from './OrdersHeader';
import OrderStatsGrid from './OrderStatsGrid';
import OrderFilterTabs from './OrderFilterTabs';
import OrdersTable from './OrdersTable';
import LoadingSpinner from './LoadingSpinner';

export default function AdminOrders() {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector(selectOrders) as any[];
  const loading = useSelector(selectOrdersLoading);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    dispatch(fetchAllOrders() as any);
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const stats = {
    total: orders.length,
    pending: orders.filter((o: any) => o.status === 'pending').length,
    processing: orders.filter((o: any) => o.status === 'processing').length,
    shipped: orders.filter((o: any) => o.status === 'shipped').length,
    delivered: orders.filter((o: any) => o.status === 'delivered').length,
    cancelled: orders.filter((o: any) => o.status === 'cancelled').length,
  };

  const filteredOrders = activeFilter === 'all' 
    ? orders 
    : orders.filter((o: any) => o.status === activeFilter);

  return (
    <div className="space-y-6 py-2">
      <OrdersHeader />
      <OrderStatsGrid stats={stats} />
      <OrderFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <OrdersTable orders={filteredOrders} />
    </div>
  );
}
