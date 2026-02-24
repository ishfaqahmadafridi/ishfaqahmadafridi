import PropTypes from 'prop-types';

/**
 * ProductImage - Displays product image
 */
const ProductImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover"
    />
  );
};

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImage;
