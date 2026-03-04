import React, { useState, useEffect } from 'react';
import ModalHeader from './ModalHeader';
import ProductNameInput from './ProductNameInput';
import CategoryStockInputs from './CategoryStockInputs';
import PriceInputs from './PriceInputs';
import DescriptionInput from './DescriptionInput';
import HotProductCheckbox from './HotProductCheckbox';
import ModalActions from './ModalActions';

/**
 * ProductModal Component
 * Modal for adding or editing products with form handling
 * 
 * @param {Object} props
 * @param {Object} props.product - Product object for editing (null/undefined for adding new)
 * @param {Function} props.onClose - Close modal handler
 * @param {Function} props.onSave - Save product handler
 */
export default function ProductModal({ product, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    original_price: '',
    discount: 0,
    stock: 10,
    description: '',
    is_hot: false,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        category: product.category || '',
        price: product.price || '',
        original_price: product.original_price || '',
        discount: product.discount || 0,
        stock: product.stock || 0,
        description: product.description || '',
        is_hot: product.is_hot || false,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <ModalHeader isEditMode={!!product} onClose={onClose} />
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <ProductNameInput value={formData.name} onChange={handleChange} />
          
          <CategoryStockInputs 
            values={{ category: formData.category, stock: formData.stock }}
            onChange={handleChange}
          />
          
          <PriceInputs 
            values={{ 
              price: formData.price, 
              original_price: formData.original_price, 
              discount: formData.discount 
            }}
            onChange={handleChange}
          />
          
          <DescriptionInput value={formData.description} onChange={handleChange} />
          
          <HotProductCheckbox checked={formData.is_hot} onChange={handleChange} />
          
          <ModalActions isEditMode={!!product} onCancel={onClose} />
        </form>
      </div>
    </div>
  );
}
