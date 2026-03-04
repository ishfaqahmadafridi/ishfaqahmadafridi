import React from 'react';
import MenHeader from './MenHeader';
import MenProductsGrid from './MenProductsGrid';

export default function MenSection({ category }) {
    return (
        <section className="space-y-8">
            <MenHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/111827/ffffff?text=Men\'s+Collection'} />
            <MenProductsGrid products={category.products} />
        </section>
    );
}
