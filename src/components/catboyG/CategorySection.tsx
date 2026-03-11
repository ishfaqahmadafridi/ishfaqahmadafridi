import type { CatBoyGCategory, CatBoyGProduct } from '../interfaces/catboyG/catBoyGInterface';
import CategoryHeader from './CategoryHeader';
import ProductsGrid from './ProductsGrid';

type CategorySectionProps = {
    category: CatBoyGCategory;
    onProductClick: (product: CatBoyGProduct) => void;
    backendProducts?: any[];
};

export default function CategorySection({ category, onProductClick, backendProducts = [] }: CategorySectionProps) {
    // Convert backend products to the same format as static products
    const formattedBackendProducts = backendProducts.map((product: any) => ({
        id: `backend-${product.id}`,
        name: product.name,
        price: parseFloat(product.price),
        originalPrice: product.original_price ? parseFloat(product.original_price) : undefined,
        discount: product.discount ? `${product.discount}% OFF` : undefined,
        image: product.image || 'https://placehold.co/400x600',
        isBackend: true,
    }));

    // Combine static and backend products
    const allProducts = [...formattedBackendProducts, ...category.products];

    return (
        <section className="space-y-8">
            <CategoryHeader name={category.name} heroImage={category.heroImage} />
            <ProductsGrid products={allProducts} onProductClick={onProductClick} />
        </section>
    );
}
