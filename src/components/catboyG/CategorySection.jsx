import React from 'react';
import CategoryHeader from './CategoryHeader';
import ProductsGrid from './ProductsGrid';

export default function CategorySection({ category, onProductClick }) {
    return (
        <section className="space-y-8">
            <CategoryHeader name={category.name} heroImage={category.heroImage} />
            <ProductsGrid products={category.products} onProductClick={onProductClick} />
        </section>
    );
}
