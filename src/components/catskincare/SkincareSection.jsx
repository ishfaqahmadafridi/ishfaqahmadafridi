import React from 'react';
import SkincareHeader from './SkincareHeader';
import SkincareProductsGrid from './SkincareProductsGrid';

export default function SkincareSection({ category }) {
    return (
        <section className="space-y-8">
            <SkincareHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/d1fae5/000000?text=Skincare'} />
            <SkincareProductsGrid products={category.products} />
        </section>
    );
}
