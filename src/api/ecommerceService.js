import api from './client';

export const ecommerceService = {
    // Categories
    getAllCategories: () => api.get('/categories/'),
    getCategoryBySlug: (slug) => api.get(`/categories/${slug}/`),

    // Products
    getAllProducts: () => api.get('/products/'),
    getProductById: (id) => api.get(`/products/${id}/`),
};
