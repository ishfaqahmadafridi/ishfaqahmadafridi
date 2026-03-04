import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IoClose, IoSearch } from 'react-icons/io5';
import { setSelectedProduct, setPage } from '../redux/slices/uiSlice/uiSlice';
import { menCategories } from '../../assets/menData';
import { womenCategories } from '../../assets/womenData';
import { fragranceCategories } from '../../assets/fragranceData';

export default function SearchDialog({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Collect all products from all categories
  const allProducts = React.useMemo(() => {
    const products = [];

    // Add men's products
    menCategories.forEach(category => {
      if (category.products) {
        category.products.forEach(product => {
          products.push({
            ...product,
            categoryName: category.name,
            categoryId: category.id,
            source: 'men'
          });
        });
      }
    });

    // Add women's products
    womenCategories.forEach(category => {
      if (category.products) {
        category.products.forEach(product => {
          products.push({
            ...product,
            categoryName: category.name,
            categoryId: category.id,
            source: 'women'
          });
        });
      }
    });

    // Add fragrance products
    fragranceCategories.forEach(category => {
      if (category.products) {
        category.products.forEach(product => {
          products.push({
            ...product,
            categoryName: category.name,
            categoryId: category.id,
            source: 'fragrance'
          });
        });
      }
    });

    return products;
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, allProducts]);

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(setPage('product'));
    onClose();
    setSearchQuery('');
  };

  const handleClose = () => {
    setSearchQuery('');
    setFilteredProducts([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in"
        onClick={handleClose}
      />
      
      {/* Dialog */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-screen md:h-auto md:max-h-[90vh] md:top-20 bg-white z-50 shadow-2xl animate-in slide-in-from-top duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-4 p-4 border-b border-gray-200">
            <IoSearch className="text-2xl text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products... (e.g., Peshawari Chappal)"
              className="flex-1 text-lg outline-none placeholder:text-gray-400"
              autoFocus
            />
            <button 
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto p-4">
            {searchQuery.trim() === '' ? (
              <div className="text-center py-20 text-gray-400">
                <IoSearch className="text-6xl mx-auto mb-4 opacity-30" />
                <p className="text-lg">Start typing to search products</p>
                <p className="text-sm mt-2">Try "Peshawari Chappal", "Shirt", "Perfume", etc.</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg">No results found for "{searchQuery}"</p>
                <p className="text-sm mt-2">Try different keywords or browse our categories</p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-sm text-gray-500 mb-4">
                  Found {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <button
                      key={`${product.source}-${product.categoryId}-${product.id}`}
                      onClick={() => handleProductClick(product)}
                      className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors text-left border border-gray-100 hover:border-gray-300"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm mb-1 line-clamp-2">{product.name}</h3>
                        <p className="text-xs text-gray-500 mb-2">{product.categoryName}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-rose-600">₨{product.price}</span>
                          {product.originalPrice && (
                            <>
                              <span className="text-xs text-gray-400 line-through">₨{product.originalPrice}</span>
                              {product.discount && (
                                <span className="text-xs text-green-600 font-semibold">{product.discount}</span>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
