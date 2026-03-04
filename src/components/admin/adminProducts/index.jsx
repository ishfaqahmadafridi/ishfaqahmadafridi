import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductStock,
  fetchInventoryStatus
} from '../../redux/slices/admin/adminThunks';
import {
  selectProducts,
  selectProductsLoading,
  selectInventoryStatus
} from '../../redux/slices/admin/adminSlice';
import ProductModal from '../productModal/index';
import ProductsHeader from './ProductsHeader';
import InventoryStats from './InventoryStats';
import ProductFilterTabs from './ProductFilterTabs';
import ProductsTable from './ProductsTable';
import LoadingSpinner from './LoadingSpinner';

export const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts) || [];
  const loading = useSelector(selectProductsLoading);
  const inventoryStatus = useSelector(selectInventoryStatus) || {};
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchInventoryStatus());
  }, [dispatch]);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await dispatch(deleteProduct(id));
    }
  };

  const handleStockUpdate = async (id, currentStock) => {
    const newStock = prompt('Enter new stock quantity:', currentStock);
    if (newStock !== null && newStock !== '') {
      await dispatch(updateProductStock({ id, stock: parseInt(newStock) }));
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'in_stock') return product.stock > 5;
    if (filter === 'low_stock') return product.stock > 0 && product.stock <= 5;
    if (filter === 'out_of_stock') return product.stock === 0;
    return true;
  });

  const handleSaveProduct = async (productData) => {
    if (editingProduct) {
      await dispatch(updateProduct({ id: editingProduct.id, data: productData }));
    } else {
      await dispatch(createProduct(productData));
    }
    setShowModal(false);
  };

  if (loading && products.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6 py-2">
      <ProductsHeader onAddProduct={handleAddProduct} />
      
      <InventoryStats inventoryStatus={inventoryStatus} />
      
      <ProductFilterTabs filter={filter} onFilterChange={handleFilterChange} />
      
      <ProductsTable
        products={filteredProducts}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onStockUpdate={handleStockUpdate}
      />

      {showModal && (
        <ProductModal
          product={editingProduct}
          onClose={() => setShowModal(false)}
          onSave={handleSaveProduct}
        />
)}
    </div>
  );
}

export default AdminProducts;
