import { formatPrice } from '../../lib/utils';

type ProductPriceProps = {
    price: number;
    originalPrice?: number;
};

export default function ProductPrice({ price, originalPrice }: ProductPriceProps) {
    return (
        <div className="flex items-baseline gap-2">
            <span className={`text-sm md:text-base font-bold ${originalPrice ? 'text-rose-600' : 'text-foreground'}`}>
                {formatPrice(price)}
            </span>
            {originalPrice && (
                <span className="text-[10px] md:text-xs text-gray-400 line-through">{formatPrice(originalPrice)}</span>
            )}
        </div>
    );
}
