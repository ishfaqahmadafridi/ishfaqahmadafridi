import React from 'react';
import PropTypes from 'prop-types';

function StockIndicator({ stockStatus = "FEW ITEMS LEFT" }) {
  return <p className="stock">{stockStatus}</p>;
}

StockIndicator.propTypes = {
  stockStatus: PropTypes.string
};

export default StockIndicator;
