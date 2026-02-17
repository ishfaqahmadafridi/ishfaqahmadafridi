import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductPage.css';

function ProductPage({ product, setPage, addToCart, previousPage = 'women' }) {
  const [selectedSize, setSelectedSize] = useState('SMALL');
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price) => {
    if (!price || isNaN(price)) return 'PKR 0';
    return `PKR ${price.toLocaleString('en-IN')}`;
  };

  const calculateInstallments = () => {
    const price = product.price || 0;
    const installmentAmount = Math.round(price / 3);
    return formatPrice(installmentAmount);
  };

  const adjustQuantity = (change) => {
    setQuantity(prev => Math.max(1, Math.min(99, prev + change)));
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  if (!product) {
    return (
      <div className="product-error">
        <button onClick={() => setPage(previousPage)} className="back-button">
          ← Back to Products
        </button>
        <div className="error-message">No product selected. Please choose a product.</div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => setPage(previousPage)} className="back-button">
        ← Back to Products
      </button>
      
      <div className="product-detail">
        <div className="product-images">
          {product.image && (
            <>
              <img src={product.image} alt={product.name} className="main-image" />
              <div className="thumbnail-container">
                {[1, 2, 3].map((thumb) => (
                  <img 
                    key={thumb}
                    src={product.image}
                    alt={`Thumbnail ${thumb}`}
                    className="thumbnail"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="price-section">
            <p className="price">{formatPrice(product.price)}</p>
            {product.originalPrice && (
              <div className="original-price-container">
                <span className="original-price">{formatPrice(product.originalPrice)}</span>
                <span className="discount">{product.discount}</span>
              </div>
            )}
            <div className="installment">Pay in 3 installments of {calculateInstallments()}</div>
          </div>

          <div className="size-section">
            <h3>SIZE</h3>
            <div className="size-options">
              {['SMALL', 'MEDIUM', 'LARGE', 'X-LARGE'].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-section">
            <h3>QUANTITY</h3>
            <div className="quantity-selector">
              <button onClick={() => adjustQuantity(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => adjustQuantity(1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>

          {product.details && (
            <div className="product-details">
              <h3>PRODUCT DETAILS</h3>
              <ul>
                {Object.entries(product.details).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  product: PropTypes.object,
  setPage: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  previousPage: PropTypes.string
};

export default ProductPage;