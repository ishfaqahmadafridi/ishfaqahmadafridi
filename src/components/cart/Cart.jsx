import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CartPage.css';
import CartPageContainer from './CartPageContainer';
import CartHeader from './CartHeader';
import CartItemsList from './CartItemsList';
import CartSummary from './CartSummary';
import { formatPrice, calculateSubtotal, getTotalQuantity } from './cartUtils';
import { cartItemsArrayShape } from './cartPropTypes';

function Cart({ cartItems, removeItem, setPage }) {
  const totalQuantity = getTotalQuantity(cartItems);

  return (
    <CartPageContainer>
      <CartHeader totalQuantity={totalQuantity} setPage={setPage} />
      
      <CartItemsList
        cartItems={cartItems}
        removeItem={removeItem}
        formatPrice={formatPrice}
        setPage={setPage}
      />

      {cartItems.length > 0 && (
        <CartSummary
          cartItems={cartItems}
          formatPrice={formatPrice}
          calculateSubtotal={() => calculateSubtotal(cartItems)}
        />
      )}
    </CartPageContainer>
  );
}

Cart.propTypes = {
  cartItems: cartItemsArrayShape.isRequired,
  removeItem: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Cart;