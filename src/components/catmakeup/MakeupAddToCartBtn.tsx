import type { MakeupAddToCartBtnProps } from '../interfaces/catmakeup/catmakeupInterface';

export default function MakeupAddToCartBtn({ onClick }: MakeupAddToCartBtnProps) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-black text-white text-xs font-bold py-3.5 rounded-full uppercase tracking-widest hover:bg-pink-600 transition-all active:scale-95 shadow-md hover:shadow-pink-100"
        >
            Add to bag
        </button>
    );
}
