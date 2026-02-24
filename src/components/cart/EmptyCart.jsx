import React from 'react';
import PropTypes from 'prop-types';

function EmptyCart({ setPage }) {
  return (
    <div className="empty-cart">
      <p>Your cart is currently empty</p>
      <button onClick={() => setPage('home')} className="continue-shopping">
        Continue Shopping
      </button>
    </div>
  );
}

EmptyCart.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default EmptyCart;
