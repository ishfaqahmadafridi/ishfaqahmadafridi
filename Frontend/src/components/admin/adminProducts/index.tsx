import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useProductsStore } from '../../zustand/admin/productsStore';
import ProductsHeader from './ProductsHeader';
import InventoryStats from './InventoryStats';
import ProductFilterTabs from './ProductFilterTabs';
import ProductsTable from './ProductsTable';
import LoadingSpinner from './LoadingSpinner';
import ProductModal from '../productModal';

export default function AdminProducts() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'low-stock' | 'out-of-stock'>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const {
    products,
    inventoryStatus: stats,
    productsLoading: loading,
    productsError: error,
    fetchAllProducts,
    fetchInventoryStatus,
    createProduct,
    updateProduct,
    deleteProduct,
    updateProductStock,
  } = useProductsStore(
    useShallow((s) => ({
      products: s.products,
      inventoryStatus: s.inventoryStatus,
      productsLoading: s.productsLoading,
      productsError: s.productsError,
      fetchAllProducts: s.fetchAllProducts,
      fetchInventoryStatus: s.fetchInventoryStatus,
      createProduct: s.createProduct,
      updateProduct: s.updateProduct,
      deleteProduct: s.deleteProduct,
      updateProductStock: s.updateProductStock,
    }))
  );

  useEffect(() => {
    fetchAllProducts();
    fetchInventoryStatus();
  }, [fetchAllProducts, fetchInventoryStatus]);

  const selectedProduct = selectedProductId
    ? products.find((p) => p.id === selectedProductId) ?? null
    : null;

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="text-red-500 text-lg mb-4">
          Failed to load: {error || 'Unknown error'}
        </p>
        <button
          onClick={() => {
            fetchAllProducts();
            fetchInventoryStatus();
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
      <ProductsHeader
         onAddProduct={() => {
          setSelectedProductId(null);
          setShowModal(true);
        }}
      />

      <InventoryStats  stats= {stats}/>

      <ProductFilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <ProductsTable
        products={products}
        activeFilter={activeFilter}
        onEdit={(id: number) => {
          setSelectedProductId(id);
          setShowModal(true);
        }}
        onDelete={deleteProduct}
        onUpdateStock={updateProductStock}
      />

      {showModal && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setShowModal(false);
            setSelectedProductId(null);
          }}
          onSave={selectedProduct ? updateProduct : createProduct}
          // optional: onSuccess={() => setShowModal(false)}
        />
      )}
    </div>
  );
}