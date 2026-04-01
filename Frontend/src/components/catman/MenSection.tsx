import MenHeader from './MenHeader';
import MenProductsGrid from './MenProductsGrid';
import type { MenSectionProps } from '../interfaces/catman/catmanInterface';

export default function MenSection({ category, backendProducts = [] }: MenSectionProps) {
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

    // Combine static and backend products (backend products first to show new additions)
    const allProducts = [...formattedBackendProducts, ...category.products];

    return (
        <section className="space-y-8">
            <MenHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/111827/ffffff?text=Men\'s+Collection'} />
            <MenProductsGrid products={allProducts} />
        </section>
    );
}
