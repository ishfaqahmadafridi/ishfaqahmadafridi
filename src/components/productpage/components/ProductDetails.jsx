/**
 * Product Details Component
 * Displays product details as key-value pairs
 */
import PropTypes from 'prop-types';

export function ProductDetails({ details }) {
  if (!details || Object.keys(details).length === 0) {
    return null;
  }

  return (
    <div className="product-details">
      <h3>Product Details</h3>
      <ul>
        {Object.entries(details).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductDetails.propTypes = {
  details: PropTypes.object,
};
