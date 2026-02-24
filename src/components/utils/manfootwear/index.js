/**
 * ManFootwear Module - Barrel Export
 * Clean exports for all man footwear functionality
 */

// Main component
export { default } from '../../manFooterwear/ManFootwear';
export { default as ManFootwear } from '../../manFooterwear/ManFootwear';

// Atomic components
export * from '../../manFooterwear/components';

// Context
export { ManFootwearContext, useManFootwear } from './context';
export { ManFootwearProvider } from '../../manFooterwear/context/ManFootwearProvider';

// Hooks
export * from '../../manFooterwear/hooks';

// Operations
export * from '../../manFooterwear/operations';

// Utils
export * from '../../manFooterwear/utils';
