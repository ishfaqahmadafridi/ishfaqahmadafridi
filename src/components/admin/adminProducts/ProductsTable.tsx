import ProductTableRow from './ProductTableRow';
import type { Product } from '../../interfaces/admin/adminProducts/adminProductsInterface';

interface ProductsTableProps {
  products: Product[];
  onEditProduct: (product: Product) => void;
  activeFilter: string;
}

export default function ProductsTable({ products = [], onEditProduct, activeFilter }: ProductsTableProps) {
  const getStockStatus = (stock: number): string => {
    if (stock === 0) return 'out_of_stock';
    if (stock <= 10) return 'low_stock';
    return 'in_stock';
  };

  // Ensure products is always an array and filter out null/undefined items
  const safeProducts = Array.isArray(products) ? products.filter(Boolean) : [];
  
  const filteredProducts = safeProducts.filter((product: Product) =>
    product && (activeFilter === 'all' ? true : getStockStatus(product.stock) === activeFilter)
  );

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Product</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Category</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Price</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Stock</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product: Product) => (
              product?.id ? (
                <ProductTableRow
                  key={product.id}
                  product={product}
                  onEdit={() => onEditProduct(product)}
                />
              ) : null
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
