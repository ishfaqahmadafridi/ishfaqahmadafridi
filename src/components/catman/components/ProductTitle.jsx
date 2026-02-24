import PropTypes from 'prop-types';

/**
 * ProductTitle - Displays product name
 */
const ProductTitle = ({ name }) => {
  return (
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      {name}
    </h3>
  );
};

ProductTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductTitle;
