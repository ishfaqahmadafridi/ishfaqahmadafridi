// Export all operation functions

// Cart Operations
export {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearAllItems
} from './catboyG/cartOperations';

// Cart Calculations
export {
  calculateCartTotal,
  calculateCartItemCount,
  findItemInCart,
  isItemInCart,
  getItemQuantity
} from './catboyG/cartCalculations';

// Product Operations
export {
  filterProductsByCategory,
  searchProductsByTerm,
  filterProductsByPrice,
  getAllProducts,
  getProductById,
  getCategoryById
} from './productOperations';
