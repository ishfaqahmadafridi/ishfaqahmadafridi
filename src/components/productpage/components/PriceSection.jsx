/**
 * Price Section Component
 * Displays price, original price, discount, and installments
 */
import PropTypes from 'prop-types';
import { formatPrice, calculateInstallments } from '../../utils/productpage';

export function PriceSection({ price, originalPrice, discount }) {
  return (
    <div className="price-section">
      <div className="price">
        <span className="current-price">{formatPrice(price)}</span>
        {originalPrice && originalPrice > price && (
          <>
            <span className="original-price">{formatPrice(originalPrice)}</span>
            {discount && <span className="discount">-{discount}% OFF</span>}
          </>
        )}
      </div>
      <div className="installments">
        or 3 installments of {calculateInstallments(price)}
      </div>
    </div>
  );
}

PriceSection.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.number,
};
