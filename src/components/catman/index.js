/**
 * Catman Module - Barrel Export
 * Clean exports for all catman functionality
 */

// Main component
export { default } from './Catman';
export { default as Catman } from './Catman';

// Atomic components
export * from './components';

// Context
export { ManContext, useMan } from './context';
export { ManProvider } from './context/ManProvider';

// Hooks
export * from './hooks';

// Operations
export * from './operations';

// Utils
export * from '../utils/catman';
