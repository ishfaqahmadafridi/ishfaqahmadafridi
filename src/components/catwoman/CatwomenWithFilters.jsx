
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import '../../styles/ProductGrid.css';
import { selectFilteredProducts } from '../redux/slices/catwomenSlice';
import { useCatwomenState } from '../hooks/actwomen';
import { PageHeader, FilterBar, ProductsGrid } from './components';

function CatwomenWithFilters({ setPage, setSelectedProduct }) {
  // Get filtered products from Redux (automatically filtered by category/search)
  const filteredProducts = useSelector(selectFilteredProducts);
  const { selectedCategory, searchTerm } = useCatwomenState();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPage("product");
  };


  const getTitle = () => {
    if (selectedCategory) {
      const categoryName = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
      return `Women's ${categoryName}`;
    }
    if (searchTerm) {
      return `Search Results for "${searchTerm}"`;
    }
    return "Women's Collection";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader title={getTitle()} />
        
        {/* Filter and Search Bar */}
        <FilterBar />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductsGrid
            products={filteredProducts}
            onProductClick={handleProductClick}
          />
        ) : (
          <div className="no-results">
            <p className="text-center text-gray-600 text-lg py-12">
              No products found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

CatwomenWithFilters.propTypes = {
  setPage: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

export default CatwomenWithFilters;
