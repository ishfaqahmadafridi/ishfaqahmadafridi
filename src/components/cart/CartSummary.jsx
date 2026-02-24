import React from 'react';
import PropTypes from 'prop-types';
import { cartItemsArrayShape } from './cartPropTypes';

function CartSummary({ cartItems, formatPrice, calculateSubtotal }) {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = calculateSubtotal();

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <div className="summary-row">
        <span>Subtotal ({totalItems} items)</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>Calculated at checkout</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <button className="checkout-button">PROCEED TO CHECKOUT</button>
    </div>
  );
}

CartSummary.propTypes = {
  cartItems: cartItemsArrayShape.isRequired,
  formatPrice: PropTypes.func.isRequired,
  calculateSubtotal: PropTypes.func.isRequired
};

export default CartSummary;
