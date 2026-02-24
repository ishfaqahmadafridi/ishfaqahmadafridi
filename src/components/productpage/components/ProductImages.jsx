/**
 * Product Images Component
 * Displays product images with thumbnail navigation
 */
import PropTypes from 'prop-types';

export function ProductImages({ images, name }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="product-images">
      <div className="main-image">
        <img src={images[0]} alt={name} />
      </div>
      {images.length > 1 && (
        <div className="thumbnail-container">
          {images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`${name} ${index + 1}`} 
              className="thumbnail"
            />
          ))}
        </div>
      )}
    </div>
  );
}

ProductImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};
