import type { CatBoyGCategory, CatBoyGProduct } from '../interfaces/catboyG/catBoyGInterface';
import CategoryHeader from './CategoryHeader';
import ProductsGrid from './ProductsGrid';

type CategorySectionProps = {
    category: CatBoyGCategory;
    onProductClick: (product: CatBoyGProduct) => void;
};

export default function CategorySection({ category, onProductClick }: CategorySectionProps) {
    return (
        <section className="space-y-8">
            <CategoryHeader name={category.name} heroImage={category.heroImage} />
            <ProductsGrid products={category.products} onProductClick={onProductClick} />
        </section>
    );
}
