import MakeupHeader from './MakeupHeader';
import MakeupProductsGrid from './MakeupProductsGrid';
import type { MakeupSectionProps } from '../interfaces/catmakeup/catmakeupInterface';

export default function MakeupSection({ category }: MakeupSectionProps) {
    return (
        <section className="space-y-8">
            <MakeupHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/fce7f3/000000?text=Makeup'} />
            <MakeupProductsGrid products={category.products} />
        </section>
    );
}
