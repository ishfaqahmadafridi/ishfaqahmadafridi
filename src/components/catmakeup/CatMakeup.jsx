import PropTypes from 'prop-types';
import '../../styles/ProductGrid.css';
import { makeupCategories } from '../../assets/makeupData';
import { PageHeader, MakeupCatalog } from './components';

/**
 * CatMakeup - Main makeup catalog component
 * Clean component using hooks, operations, and utils from organized folders
 * Import from: ./hooks, ./operations, ./utils when needed
 */
function CatMakeup({ setPage, setSelectedProduct }) {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Makeup Collection" />
        <MakeupCatalog
          categories={makeupCategories}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
}

CatMakeup.propTypes = {
  setPage: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default CatMakeup;