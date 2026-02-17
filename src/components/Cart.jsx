import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CartPage.css';

function Cart({ cartItems, removeItem, setPage }) {
  const formatPrice = (price) => {
    return `PKR ${price.toLocaleString('en-IN')}`;
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };


  return (
    <div className="page-container">
      <main className="cart-page">
        <button onClick={() => setPage('home')} className="back-button">
          ← Continue Shopping
        </button>
        
        <h1>Your Shopping Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</h1>
        
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Price: {formatPrice(item.price)}</p>
                </div>
                <div className="cart-item-total">
                  {formatPrice(item.totalPrice)}
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeItem(item.id, item.size)}
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <div className="empty-cart">
              <p>Your cart is currently empty</p>
              <button onClick={() => setPage('home')} className="continue-shopping">
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
              <span>{formatPrice(calculateSubtotal())}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>{formatPrice(calculateSubtotal())}</span>
            </div>
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
        )}
      </main>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Cart;