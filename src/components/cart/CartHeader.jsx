import React from 'react';
import PropTypes from 'prop-types';

function CartHeader({ totalQuantity, setPage }) {
  return (
    <>
      <button onClick={() => setPage('home')} className="back-button">
        ← Continue Shopping
      </button>
      
      <h1>Your Shopping Cart ({totalQuantity} items)</h1>
    </>
  );
}

CartHeader.propTypes = {
  totalQuantity: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default CartHeader;
