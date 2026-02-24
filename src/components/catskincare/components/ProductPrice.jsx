/**
 * ProductPrice - Displays product pricing with discount
 */
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/catskincare';

function ProductPrice({ price, originalPrice, discount }) {
  return (
    <div className="price-container">
      <span className="current-price">{formatPrice(price)}</span>
      {originalPrice && (
        <>
          <span className="original-price">{formatPrice(originalPrice)}</span>
          <span className="discount">{discount}</span>
        </>
      )}
    </div>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.string,
};

export default ProductPrice;
