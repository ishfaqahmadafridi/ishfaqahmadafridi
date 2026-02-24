import React from 'react';
import PropTypes from 'prop-types';

function CategoryHeader({ heroImage, categoryName }) {
  return (
    <div className="hero-section">
      <img 
        src={heroImage} 
        alt={`${categoryName} Collection`} 
        className="hero-image" 
        loading="lazy"
      />
      <h2 className="category-title">{categoryName}</h2>
    </div>
  );
}

CategoryHeader.propTypes = {
  heroImage: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired
};

export default CategoryHeader;
