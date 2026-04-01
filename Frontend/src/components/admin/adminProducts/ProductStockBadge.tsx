import type { ProductStockBadgeProps } from '../../interfaces/admin/adminProducts/adminProductsInterface';

export default function ProductStockBadge({ stock }: ProductStockBadgeProps) {
  const getStatusInfo = (stock: number): { text: string; className: string } => {
    if (stock === 0) {
      return { text: 'Out of Stock', className: 'bg-red-100 text-red-800' };
    }
    if (stock <= 10) {
      return { text: 'Low Stock', className: 'bg-yellow-100 text-yellow-800' };
    }
    return { text: 'In Stock', className: 'bg-green-100 text-green-800' };
  };

  const { text, className } = getStatusInfo(stock);

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {text}
    </span>
  );
}
