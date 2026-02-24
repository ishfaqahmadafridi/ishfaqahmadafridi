/**
 * Category Image Component
 * Displays category image
 */
import PropTypes from 'prop-types';

export function CategoryImage({ src, alt }) {
  return <img src={src} alt={alt} />;
}

CategoryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
