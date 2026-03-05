import FragranceHeader from './FragranceHeader';
import FragranceProductsGrid from './FragranceProductsGrid';
import type { FragranceSectionProps } from '../interfaces/catfragrance/catfragranceInterface';

export default function FragranceSection({ category }: FragranceSectionProps) {
    return (
        <section className="space-y-8">
            <FragranceHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/fef3c7/000000?text=Fragrances'} />
            <FragranceProductsGrid products={category.products} />
        </section>
    );
}
