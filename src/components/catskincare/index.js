/**
 * CatSkincare Module - Barrel Export
 * Clean exports for all skincare functionality
 */

// Main component
export { default } from './CatSkincare';
export { default as CatSkincare } from './CatSkincare';

// Atomic components
export * from './components';

// Context
export { SkincareContext, useSkincare } from './context';
export { SkincareProvider } from './context/SkincareProvider';

// Hooks
export * from '../hooks/catskincare';

// Operations
export * from '../operations/catskincare';

// Utils
export * from '../utils/catskincare';
