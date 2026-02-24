import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useCartState } from '../hooks/useCartState';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const cartState = useCartState();

  return (
    <CartContext.Provider value={cartState}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartContext;
