import PropTypes from 'prop-types';

export const cartItemShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
});

export const cartItemsArrayShape = PropTypes.arrayOf(cartItemShape);
