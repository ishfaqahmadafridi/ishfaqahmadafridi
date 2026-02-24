/**
 * Product Page Component
 * Main component for displaying product details
 */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ProductPageProvider } from './context';
import { useProductPageState } from './hooks';
import { createCartItem, isValidProduct } from '../operations/productpage';
import { BackButton, ProductDetail, ErrorMessage } from './components';
import '../../styles/ProductPage.css';

function ProductPage({ product, setPage, addToCart, previousPage = 'women' }) {
  const { 
    selectedSize, 
    quantity, 
    handleSizeSelect, 
    handleQuantityChange 
  } = useProductPageState();

  const handleBack = useCallback(() => {
    setPage(previousPage);
  }, [setPage, previousPage]);

  const handleAddToCart = useCallback(() => {
    const cartItem = createCartItem(product, selectedSize, quantity);
    addToCart(cartItem);
  }, [product, selectedSize, quantity, addToCart]);

  if (!isValidProduct(product)) {
    return <ErrorMessage onBack={handleBack} />;
  }

  // Convert product.image to images array if needed
  const productWithImages = {
    ...product,
    images: product.images || (product.image ? [product.image, product.image, product.image] : [])
  };

  return (
    <div className="product-page">
      <BackButton onClick={handleBack} />
      <ProductDetail
        product={productWithImages}
        selectedSize={selectedSize}
        quantity={quantity}
        onSizeSelect={handleSizeSelect}
        onQuantityChange={handleQuantityChange}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

ProductPage.propTypes = {
  product: PropTypes.object,
  setPage: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  previousPage: PropTypes.string,
};

export default ProductPage;