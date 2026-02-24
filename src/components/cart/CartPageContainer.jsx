import React from 'react';
import PropTypes from 'prop-types';

function CartPageContainer({ children }) {
  return (
    <div className="page-container">
      <main className="cart-page">
        {children}
      </main>
    </div>
  );
}

CartPageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartPageContainer;
