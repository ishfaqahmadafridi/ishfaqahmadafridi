import React from 'react';
import PropTypes from 'prop-types';
import { cartItemShape } from './cartPropTypes';

function CartItem({ item, removeItem, formatPrice }) {
  return (
    <div className="cart-item">
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
  );
}

CartItem.propTypes = {
  item: cartItemShape.isRequired,
  removeItem: PropTypes.func.isRequired,
  formatPrice: PropTypes.func.isRequired
};

export default CartItem;
