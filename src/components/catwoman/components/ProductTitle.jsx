/**
 * ProductTitle - Displays product title as clickable button
 */
import PropTypes from 'prop-types';

function ProductTitle({ title, onClick }) {
  return (
    <h3>
      <button onClick={onClick} className="product-link">
        {title}
      </button>
    </h3>
  );
}

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductTitle;
