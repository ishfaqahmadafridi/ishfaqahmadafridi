import PropTypes from 'prop-types';

/**
 * ProductInfo - Displays detailed product information
 */
const ProductInfo = ({ details }) => {
  if (!details) return null;

  return (
    <div className="text-sm text-gray-600 mb-3 space-y-1">
      {details.fitType && (
        <div>
          <span className="font-medium">Fit: </span>
          {details.fitType}
        </div>
      )}
      {details.material && (
        <div>
          <span className="font-medium">Material: </span>
          {details.material}
        </div>
      )}
      {details.designDetails && (
        <div>
          <span className="font-medium">Design: </span>
          {details.designDetails}
        </div>
      )}
    </div>
  );
};

ProductInfo.propTypes = {
  details: PropTypes.shape({
    fitType: PropTypes.string,
    designDetails: PropTypes.string,
    material: PropTypes.string,
    modelInfo: PropTypes.string,
  }),
};

export default ProductInfo;
