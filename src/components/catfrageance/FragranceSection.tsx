import FragranceHeader from './FragranceHeader';
import FragranceProductsGrid from './FragranceProductsGrid';
import type { FragranceSectionProps } from '../interfaces/catfragrance/catfragranceInterface';

export default function FragranceSection({ category, backendProducts = [] }: FragranceSectionProps) {
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
            <FragranceHeader name={category.name} heroImage={category.heroImage || 'https://placehold.co/1200x600/fef3c7/000000?text=Fragrances'} />
            <FragranceProductsGrid products={allProducts} />
        </section>
    );
}
