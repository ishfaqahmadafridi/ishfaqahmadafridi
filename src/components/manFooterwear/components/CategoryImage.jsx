/**
 * CategoryImage - Displays category image
 */
import PropTypes from 'prop-types';

function CategoryImage({ src, alt }) {
  return (
    <img 
      src={src} 
      alt={alt}
      loading="lazy"
    />
  );
}

CategoryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CategoryImage;
