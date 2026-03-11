import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useOrdersStore } from '../../zustand/admin/ordersStore';
import OrdersHeader from './OrdersHeader';
import OrderStatsGrid from './OrderStatsGrid';
import OrderFilterTabs from './OrderFilterTabs';
import OrdersTable from './OrdersTable';
import LoadingSpinner from './LoadingSpinner';

export default function AdminOrders() {
  const {
    orders,
    ordersLoading: loading,
    fetchAllOrders,
  } = useOrdersStore(
    useShallow((s) => ({
      orders: s.orders,
      ordersLoading: s.ordersLoading,
      fetchAllOrders: s.fetchAllOrders,
    }))
  );
  
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const safeOrders = Array.isArray(orders) ? orders : [];

  const stats = {
    total: safeOrders.length,
    pending: safeOrders.filter((o: any) => o.status === 'pending').length,
    processing: safeOrders.filter((o: any) => o.status === 'processing').length,
    shipped: safeOrders.filter((o: any) => o.status === 'shipped').length,
    delivered: safeOrders.filter((o: any) => o.status === 'delivered').length,
    cancelled: safeOrders.filter((o: any) => o.status === 'cancelled').length,
  };

  const filteredOrders = activeFilter === 'all' 
    ? safeOrders 
    : safeOrders.filter((o: any) => o.status === activeFilter);

  return (
    <div className="space-y-6 py-2">
      <OrdersHeader />
      <OrderStatsGrid stats={stats} />
      <OrderFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <OrdersTable orders={filteredOrders} />
    </div>
  );
}
