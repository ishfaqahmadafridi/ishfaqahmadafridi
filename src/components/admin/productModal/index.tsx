import { useState, useEffect } from 'react';
import { useProductsStore } from '../../zustand/admin/productsStore';
import type { ProductModalProps, ProductFormData } from '../../interfaces/admin/productModal/productModalInterface';
import ModalHeader from './ModalHeader';
import ProductNameInput from './ProductNameInput';
import DescriptionInput from './DescriptionInput';
import PriceInputs from './PriceInputs';
import CategoryStockInputs from './CategoryStockInputs';
import HotProductCheckbox from './HotProductCheckbox';
import ModalActions from './ModalActions';

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { createProduct, updateProduct, fetchAllProducts, fetchInventoryStatus } = useProductsStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: '',
    original_price: '',
    category: '',
    stock: '',
    image: '',
    is_hot: false,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: String(product.price || ''),
        original_price: String(product.original_price || ''),
        category: String(product.category || ''), // Convert to string for form
        stock: String(product.stock || ''),
        image: product.image || '',
        is_hot: product.is_hot || false,
      });
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        original_price: formData.original_price ? parseFloat(formData.original_price) : null,
        stock: parseInt(formData.stock) || 0,
        category: parseInt(formData.category) || null, // Send as integer ID
      };

      if (product) {
        await updateProduct(product.id.toString(), productData);
      } else {
        await createProduct(productData);
      }

      await fetchAllProducts();
      await fetchInventoryStatus();
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto m-4">
        <ModalHeader title={product ? 'Edit Product' : 'Add New Product'} onClose={onClose} />

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <ProductNameInput
            value={formData.name}
            onChange={(name) => setFormData({ ...formData, name })}
          />
          <DescriptionInput
            value={formData.description}
            onChange={(description) => setFormData({ ...formData, description })}
          />
          <PriceInputs
            price={formData.price}
            originalPrice={formData.original_price}
            onPriceChange={(price) => setFormData({ ...formData, price })}
            onOriginalPriceChange={(original_price) => setFormData({ ...formData, original_price })}
          />
          <CategoryStockInputs
            category={formData.category}
            stock={formData.stock}
            image={formData.image}
            onCategoryChange={(category) => setFormData({ ...formData, category })}
            onStockChange={(stock) => setFormData({ ...formData, stock })}
            onImageChange={(image) => setFormData({ ...formData, image })}
          />
          <HotProductCheckbox
            checked={formData.is_hot}
            onChange={(is_hot) => setFormData({ ...formData, is_hot })}
          />
          <ModalActions
            loading={loading}
            isEditing={!!product}
            onCancel={onClose}
          />
        </form>
      </div>
    </div>
  );
}
