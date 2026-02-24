import React from 'react';
import PropTypes from 'prop-types';

function ProductImage({ src, alt, onClick }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="product-image" 
      onClick={onClick}
      loading="lazy"
    />
  );
}

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProductImage;
