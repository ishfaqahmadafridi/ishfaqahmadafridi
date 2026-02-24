/**
 * ProductInfo - Displays product details
 */
import PropTypes from 'prop-types';

function ProductInfo({ details }) {
  return (
    <div className="product-details">
      {details.fitType && <p><strong>Fit:</strong> {details.fitType}</p>}
      {details.material && <p><strong>Material:</strong> {details.material}</p>}
      {details.designDetails && <p><strong>Design:</strong> {details.designDetails}</p>}
      {details.modelInfo && <p><strong>Model:</strong> {details.modelInfo}</p>}
    </div>
  );
}

ProductInfo.propTypes = {
  details: PropTypes.shape({
    fitType: PropTypes.string,
    material: PropTypes.string,
    designDetails: PropTypes.string,
    modelInfo: PropTypes.string,
  }).isRequired,
};

export default ProductInfo;
