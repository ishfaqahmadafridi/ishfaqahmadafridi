import PropTypes from 'prop-types';
import '../../styles/ProductGrid.css';
import { fragranceCategories } from '../../assets/fragranceData';
import { PageHeader, FragranceCatalog } from './components';

/**
 * CatFragrance - Main fragrance catalog component
 * Clean component using PageHeader and FragranceCatalog
 */
function CatFragrance({ setPage, setSelectedProduct }) {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Fragrance Collection" />
        <FragranceCatalog
          categories={fragranceCategories}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
}

CatFragrance.propTypes = {
  setPage: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default CatFragrance;