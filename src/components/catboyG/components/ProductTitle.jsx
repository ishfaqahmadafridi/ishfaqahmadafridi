import React from 'react';
import PropTypes from 'prop-types';

function ProductTitle({ name, onClick }) {
  return (
    <h3>
      <button onClick={onClick} className="product-link">
        {name}
      </button>
    </h3>
  );
}

ProductTitle.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProductTitle;
