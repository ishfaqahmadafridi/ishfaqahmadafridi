import MakeupHeader from './MakeupHeader';
import MakeupProductsGrid from './MakeupProductsGrid';
import type { MakeupSectionProps } from '../interfaces/catmakeup/catmakeupInterface';

export default function MakeupSection({ category, backendProducts = [] }: MakeupSectionProps) {
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
            <MakeupHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/fdf2f8/831843?text=Makeup'} />
            <MakeupProductsGrid products={allProducts} />
        </section>
    );
}
