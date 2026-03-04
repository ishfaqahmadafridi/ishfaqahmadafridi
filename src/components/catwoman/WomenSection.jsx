import React from 'react';
import WomenHeader from './WomenHeader';
import WomenProductsGrid from './WomenProductsGrid';

export default function WomenSection({ category }) {
    return (
        <section className="space-y-8">
            <WomenHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/fecaca/000000?text=Women\'s+Collection'} />
            <WomenProductsGrid products={category.products} />
        </section>
    );
}
