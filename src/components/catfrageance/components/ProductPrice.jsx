import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/catfragrance';

/**
 * ProductPrice - Displays product pricing information
 */
const ProductPrice = ({ price, originalPrice, discount }) => {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl font-bold text-gray-900">
          {formatPrice(price)}
        </span>
        {originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            {formatPrice(originalPrice)}
          </span>
        )}
      </div>
      {discount && (
        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          {discount}
        </span>
      )}
    </div>
  );
};

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.string,
};

export default ProductPrice;
