/**
 * Product Title Component
 * Displays product name
 */
import PropTypes from 'prop-types';

export function ProductTitle({ name }) {
  return <h2>{name}</h2>;
}

ProductTitle.propTypes = {
  name: PropTypes.string.isRequired,
};
