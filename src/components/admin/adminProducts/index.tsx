import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchInventoryStatus } from '../../redux/slices/admin/adminThunks';
import { selectProducts, selectProductsLoading, selectInventoryStatus, selectProductsError } from '../../redux/slices/admin/adminSlice';
import type { AppDispatch } from '../../redux/store';
import type { Product } from '../../interfaces/admin/adminProducts/adminProductsInterface';
import ProductsHeader from './ProductsHeader';
import InventoryStats from './InventoryStats';
import ProductFilterTabs from './ProductFilterTabs';
import ProductsTable from './ProductsTable';
import LoadingSpinner from './LoadingSpinner';
import ProductModal from '../productModal';

export default function AdminProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const stats = useSelector(selectInventoryStatus);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchInventoryStatus());
  }, [dispatch]);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="text-red-500 text-lg mb-4">Failed to load products</p>
        <button 
          onClick={() => dispatch(fetchAllProducts())}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-2">
      <ProductsHeader onAddProduct={handleAddProduct} />
      <InventoryStats stats={stats} />
      <ProductFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProductsTable products={products} onEditProduct={handleEditProduct} activeFilter={activeFilter} />

      {showModal && (
        <ProductModal
          product={editingProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
