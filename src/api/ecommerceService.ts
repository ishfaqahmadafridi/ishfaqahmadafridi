import api from './client';

export const ecommerceService = {
    // Categories
    getAllCategories: () => api.get('/categories/'),
    getCategoryBySlug: (slug: string) => api.get(`/categories/${slug}/`),
    getParentCategories: () => api.get('/categories/parents/'),
    getSubcategories: (parentId: number) => api.get(`/categories/?parent=${parentId}`),
    getCategoryProducts: (slug: string) => api.get(`/categories/${slug}/products/`),

    // Products
    getAllProducts: () => api.get('/products/'),
    getProductById: (id: number) => api.get(`/products/${id}/`),
    getProductsByCategory: (categorySlug: string) => api.get(`/products/?category_slug=${categorySlug}`),
    getProductsByCategoryId: (categoryId: number) => api.get(`/products/?category=${categoryId}`),
};
