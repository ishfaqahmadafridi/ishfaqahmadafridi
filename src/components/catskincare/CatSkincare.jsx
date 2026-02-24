import PropTypes from 'prop-types';
import '../../styles/ProductGrid.css';
import { skincareCategories } from '../../assets/skincareData';
import { PageHeader, SkincareCatalog } from './components';

/**
 * CatSkincare - Main skincare catalog component
 * Clean component using hooks, operations, and utils from organized folders
 * Import from: ./hooks, ./operations, ./utils when needed
 */
function CatSkincare({ setPage, setSelectedProduct }) {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Skincare Collection" />
        <SkincareCatalog
          categories={skincareCategories}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
}

CatSkincare.propTypes = {
  setPage: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default CatSkincare;