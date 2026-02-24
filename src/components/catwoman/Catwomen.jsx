import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import '../../styles/ProductGrid.css';
import { selectCategories } from '../redux/slices/catwomenSlice';
import { PageHeader, WomenCatalog } from './components';

/**
 * Catwomen - Main women's catalog component
 * Now uses Redux Toolkit for state management
 */
function Catwomen({ setPage, setSelectedProduct }) {
  // Get categories from Redux store
  const categories = useSelector(selectCategories);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Women's Collection" />
        <WomenCatalog
          categories={categories}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
}

Catwomen.propTypes = {
  setPage: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default Catwomen;