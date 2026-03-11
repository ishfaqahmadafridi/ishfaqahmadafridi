import { create } from 'zustand';
import { ecommerceService } from '../../../api/ecommerceService';

import { womenFootwearCategories } from '../../../assets/womenFootwearData';
import { womenCategories as womenCategoryCategories } from '../../../assets/womenCategoryData';
import { skincareCategories } from '../../../assets/skincareData';
import { menCategories } from '../../../assets/menData';
import { manFootwearCategories } from '../../../assets/manFootwaer';
import { makeupCategories } from '../../../assets/makeupData';
import { fragranceCategories } from '../../../assets/fragranceData';
import { womenCategories } from '../../../assets/womenData';
import { categories as boysCategories } from '../../../assets/catBoysGData';

type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface CategoryState {
  // Static data map
  localCategories: Record<string, any[]>;

  // Backend data map
  backendProducts: Record<string, any[]>;
  statuses: Record<string, FetchStatus>;
  errors: Record<string, string | null>;

  // Filter state (shared because you only view one category page at a time)
  selectedSubCategory: string | null;
  searchTerm: string;

  // Actions
  fetchProducts: (categoryName: string) => Promise<void>;
  setSelectedSubCategory: (subCat: string | null) => void;
  setSearchTerm: (term: string) => void;
  clearFilters: () => void;
}

export const useCategoryStore = create<CategoryState>((set, get) => ({
  localCategories: {
    womenFootwear: womenFootwearCategories,
    womenCategory: womenCategoryCategories, // From womenCategoryData
    skincare: skincareCategories,
    men: menCategories,
    manFootwear: manFootwearCategories,
    makeup: makeupCategories,
    fragrance: fragranceCategories,
    women: womenCategories, // From womenData
    boys: boysCategories,
  },

  backendProducts: {},
  statuses: {},
  errors: {},

  selectedSubCategory: null,
  searchTerm: '',

  setSelectedSubCategory: (subCat) => set({ selectedSubCategory: subCat }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  clearFilters: () => set({ selectedSubCategory: null, searchTerm: '' }),

  fetchProducts: async (categoryName: string) => {
    // Avoid re-fetching if already succeeded? We're opting to always fetch to keep data fresh.
    set((state) => ({
      statuses: { ...state.statuses, [categoryName]: 'loading' },
      errors: { ...state.errors, [categoryName]: null },
    }));

    try {
      const response = await ecommerceService.getProductsByCategory(categoryName);
      set((state) => ({
        backendProducts: {
          ...state.backendProducts,
          [categoryName]: Array.isArray(response) ? response : [],
        },
        statuses: { ...state.statuses, [categoryName]: 'succeeded' },
      }));
    } catch (error: any) {
      set((state) => ({
        statuses: { ...state.statuses, [categoryName]: 'failed' },
        errors: { ...state.errors, [categoryName]: error?.message || 'Failed to fetch products' },
      }));
    }
  },
}));

// Helper selector function available to easily replicate old Redux selectors
export const selectFilteredProducts = (categoryName: string) => {
  const state = useCategoryStore.getState();
  const subCats = state.localCategories[categoryName] || [];
  const selected = state.selectedSubCategory;
  const term = state.searchTerm.toLowerCase();

  let products = subCats.flatMap((cat: any) => cat.products || []);
  
  if (selected) {
    const category = subCats.find((cat: any) => cat.id === selected);
    products = category ? category.products : [];
  }
  
  if (term) {
    products = products.filter((p: any) => p.name.toLowerCase().includes(term));
  }
  
  return products;
};
