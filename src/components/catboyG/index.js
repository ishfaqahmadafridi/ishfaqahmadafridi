/**
 * Master index file for catboyG module
 * Senior-level barrel export pattern
 */

// Re-export all from organized folders
export * from './components';
export * from './context';
export * from '../hooks/catboyG';
export * from '../operations';
export * from '../utils';

// Export main components
export { default as CatBoysG } from './CatBoysG';
export { default as CatBoysGWithContext } from './CatBoysGWithContext';
