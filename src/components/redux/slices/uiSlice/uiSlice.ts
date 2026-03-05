import { createSlice } from '@reduxjs/toolkit';

// Check if user has visited before
const hasVisited = localStorage.getItem('hasVisitedSite') === 'true';

const initialState = {
    currentPage: hasVisited ? 'home' : 'landing',
    previousPage: hasVisited ? 'home' : 'landing',
    selectedProduct: null,
    selectedCategory: null,
    selectedCategories: [],
    theme: 'light',
    isMenuOpen: false,
    isSearchDialogOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.previousPage = state.currentPage;
            state.currentPage = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.selectedCategories = [];
        },
        setSelectedCategories: (state, action) => {
            state.selectedCategories = action.payload;
            state.selectedCategory = null;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setMenuOpen: (state, action) => {
            state.isMenuOpen = action.payload;
        },
        toggleSearchDialog: (state) => {
            state.isSearchDialogOpen = !state.isSearchDialogOpen;
        },
        setSearchDialogOpen: (state, action) => {
            state.isSearchDialogOpen = action.payload;
        },
    },
});

export const { setPage, setSelectedProduct, setSelectedCategory, setSelectedCategories, toggleTheme, toggleMenu, setMenuOpen, toggleSearchDialog, setSearchDialogOpen } = uiSlice.actions;
export const selectCurrentPage = (state) => state.ui.currentPage;
export const selectPreviousPage = (state) => state.ui.previousPage;
export const selectSelectedProduct = (state) => state.ui.selectedProduct;
export const selectSelectedCategory = (state) => state.ui.selectedCategory;
export const selectSelectedCategories = (state) => state.ui.selectedCategories;
export const selectTheme = (state) => state.ui.theme;
export const selectIsMenuOpen = (state) => state.ui.isMenuOpen;
export const selectIsSearchDialogOpen = (state) => state.ui.isSearchDialogOpen;

export default uiSlice.reducer;
