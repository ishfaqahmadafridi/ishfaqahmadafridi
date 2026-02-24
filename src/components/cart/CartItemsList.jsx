import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { cartItemsArrayShape } from './cartPropTypes';

function CartItemsList({ cartItems, removeItem, formatPrice, setPage }) {
  return (
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem
            key={`${item.id}-${item.size}`}
            item={item}
            removeItem={removeItem}
            formatPrice={formatPrice}
          />
        ))
      ) : (
        <EmptyCart setPage={setPage} />
      )}
    </div>
  );
}

CartItemsList.propTypes = {
  cartItems: cartItemsArrayShape.isRequired,
  removeItem: PropTypes.func.isRequired,
  formatPrice: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

export default CartItemsList;
