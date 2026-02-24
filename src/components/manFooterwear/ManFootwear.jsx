import PropTypes from 'prop-types';
import "../../styles/ManFootwear.css";
import { manFootwearCategories } from '../../assets/manFootwearData';
import { ManFootwearCatalog } from './components';

/**
 * ManFootwear - Main man footwear component
 * Clean component using hooks, operations, and utils from organized folders
 * Import from: ./hooks, ./operations, ./utils when needed
 */
export default function ManFootwear() {
  return (
    <div className="man-footwear">
      <ManFootwearCatalog 
        title="Man Footwear"
        categories={manFootwearCategories}
      />
    </div>
  );
}

ManFootwear.propTypes = {};
