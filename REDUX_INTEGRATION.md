# Redux Toolkit Integration for Catwomen Component

## Overview
The catwomen component has been successfully migrated to use Redux Toolkit for state management. This provides a centralized, scalable solution for managing women's product catalog state.

## Files Created

### 1. **Redux Slice**
- **Location**: `src/components/redux/slices/catwomenSlice.js`
- **Purpose**: Contains all state, reducers, and selectors for the catwomen feature
- **State Managed**:
  - `categories`: All women's product categories (from womenData)
  - `selectedCategory`: Currently selected category filter
  - `searchTerm`: Current search query
  - `filteredProducts`: Computed filtered products based on category/search

### 2. **Redux Store**
- **Location**: `src/components/redux/store.js`
- **Updated**: Added catwomenReducer to the store configuration

### 3. **Custom Hooks**
- **Location**: `src/components/hooks/actwomen/useCatwomenRedux.js`
- **Exports**:
  - `useCatwomenState()`: Access state values
  - `useCatwomenActions()`: Access action dispatchers
  - `useCatwomen()`: Combined state + actions

### 4. **Example Components**
- **FilterBar**: `src/components/catwoman/components/FilterBar.jsx`
  - Demonstrates category filtering and search functionality
- **CatwomenWithFilters**: `src/components/catwoman/CatwomenWithFilters.jsx`
  - Enhanced catalog with full filtering capabilities

## Usage

### Basic Component (Current Implementation)
```jsx
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/slices/catwomenSlice';

function Catwomen({ setPage, setSelectedProduct }) {
  const categories = useSelector(selectCategories);
  // Uses Redux for data, keeps original UI
}
```

### With Filtering (Enhanced Version)
```jsx
import { useCatwomenState, useCatwomenActions } from '../hooks/actwomen';

function FilterExample() {
  const { categories, selectedCategory, searchTerm, filteredProducts } = useCatwomenState();
  const { handleCategorySelect, handleSearch, handleClearFilters } = useCatwomenActions();
  
  return (
    <div>
      <input 
        value={searchTerm} 
        onChange={(e) => handleSearch(e.target.value)} 
      />
      <select 
        value={selectedCategory || ''} 
        onChange={(e) => handleCategorySelect(e.target.value)}
      >
        {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
      </select>
      {/* Display filteredProducts */}
    </div>
  );
}
```

## Available Actions

### Import
```javascript
import {
  setSelectedCategory,
  setSearchTerm,
  clearFilters,
  resetCatwomenState,
} from '../redux/slices/catwomenSlice';
```

### Actions
- `setSelectedCategory(categoryId)`: Filter by category
- `setSearchTerm(term)`: Search products
- `clearFilters()`: Reset all filters
- `resetCatwomenState()`: Reset to initial state

## Available Selectors

```javascript
import {
  selectCategories,
  selectSelectedCategory,
  selectSearchTerm,
  selectFilteredProducts,
} from '../redux/slices/catwomenSlice';

// Use with useSelector
const categories = useSelector(selectCategories);
const filteredProducts = useSelector(selectFilteredProducts);
```

## Integration Points

### 1. Store Configuration
The Redux Provider is wrapped around the entire app in `src/main.jsx`:
```jsx
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
```

### 2. Component Usage
Two implementations are available:
- **Catwomen.jsx**: Basic catalog (uses Redux only for data)
- **CatwomenWithFilters.jsx**: Full-featured with search/filter (complete Redux integration)

### 3. Switching Between Versions
To use the enhanced version with filters, update the route in `src/components/home/utils/pageRoutes.jsx`:
```jsx
import { CatwomenWithFilters } from '../../catwoman';

export const pages = {
  women: <CatwomenWithFilters setPage={setPage} setSelectedProduct={setSelectedProduct} />
};
```

## Features

### ✅ Implemented
- Redux Toolkit slice with reducers and selectors
- Custom hooks for easy state access
- Category filtering
- Product search
- Filter clearing
- Example FilterBar component
- Enhanced CatwomenWithFilters component
- Provider setup in main.jsx

### 📋 Future Enhancements
- Persist filters in localStorage
- Add sorting (price, name, date)
- Add favorites/wishlist
- Track recently viewed products
- Multi-filter support (price range, size, color)

## Testing the Integration

1. **Verify Store**: Check Redux DevTools to see `catwomen` state
2. **Test Filtering**: Use CatwomenWithFilters to test category filter
3. **Test Search**: Type in search box to filter products
4. **Check Selectors**: FilteredProducts should update automatically

## Migration Notes

- Original Context-based implementation is preserved for backward compatibility
- Can gradually migrate other components to Redux
- No breaking changes to existing components
- Redux provides better debugging with DevTools
