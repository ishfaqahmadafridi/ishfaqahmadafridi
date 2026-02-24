/**
 * Catwomen Module - Barrel Export
 * Clean exports for all women functionality
 */

// Main components
export { default } from './Catwomen';
export { default as Catwomen } from './Catwomen';
export { default as CatwomenWithFilters } from './CatwomenWithFilters';

// Atomic components
export * from './components';

// Redux (recommended)
export * from '../redux/slices/catwomenSlice';

// Context (legacy - for backward compatibility)
export { WomenContext, useWomen } from './context';
export { WomenProvider } from './context/WomenProvider';

// Hooks
export * from '../hooks/actwomen';

// Operations
export * from '../operations/catwomen';

// Utils
export * from '../utils/catwomen';
