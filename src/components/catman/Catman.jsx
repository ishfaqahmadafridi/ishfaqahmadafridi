import PropTypes from 'prop-types';
import '../../styles/ProductGrid.css';
import { menCategories } from '../../assets/menData';
import { PageHeader, MenCatalog } from './components';

/**
 * Catman - Main men's catalog component
 * Clean component using hooks, operations, and utils from organized folders
 * Import from: ./hooks, ./operations, ./utils when needed
 */
function Catman({ setPage, setSelectedProduct }) {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Men's Collection" />
        <MenCatalog
          categories={menCategories}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
}

Catman.propTypes = {
  setPage: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default Catman;