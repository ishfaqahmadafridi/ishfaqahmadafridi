import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders, updateOrderStatus } from '../../redux/slices/admin/adminThunks';
import { selectOrders, selectOrdersLoading } from '../../redux/slices/admin/adminSlice';
import { IoCheckmarkCircleOutline, IoTimeOutline, IoRocketOutline, IoCloseCircleOutline } from 'react-icons/io5';
import OrdersHeader from './OrdersHeader';
import OrderStatsGrid from './OrderStatsGrid';
import OrderFilterTabs from './OrderFilterTabs';
import OrdersTable from './OrdersTable';
import OrderDetailsModal from './OrderDetailsModal';
import LoadingSpinner from './LoadingSpinner';

export default function AdminOrders() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders) || [];
  const loading = useSelector(selectOrdersLoading);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const statusOptions = [
    { value: 'pending', label: 'Pending', icon: IoTimeOutline, color: 'yellow' },
    { value: 'processing', label: 'Processing', icon: IoRocketOutline, color: 'blue' },
    { value: 'shipped', label: 'Shipped', icon: IoRocketOutline, color: 'purple' },
    { value: 'delivered', label: 'Delivered', icon: IoCheckmarkCircleOutline, color: 'green' },
    { value: 'cancelled', label: 'Cancelled', icon: IoCloseCircleOutline, color: 'red' },
  ];

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const handleStatusUpdate = async (orderId, newStatus) => {
    await dispatch(updateOrderStatus({ id: orderId, status: newStatus }));
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const filteredOrders = orders.filter(order => 
    filterStatus === 'all' || order.status === filterStatus
  );

  if (loading && orders.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6 py-2">
      <OrdersHeader />
      
      <OrderStatsGrid orders={orders} />
      
      <OrderFilterTabs 
        filterStatus={filterStatus}
        onFilterChange={handleFilterChange}
        orders={orders}
        statusOptions={statusOptions}
      />
      
      <OrdersTable
        orders={filteredOrders}
        onViewDetails={handleViewDetails}
        onStatusUpdate={handleStatusUpdate}
        statusOptions={statusOptions}
      />

      <OrderDetailsModal
        order={selectedOrder}
        onClose={handleCloseModal}
      />
    </div>
  );
}
