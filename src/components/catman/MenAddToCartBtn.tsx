import type { MenAddToCartBtnProps } from '../interfaces/catman/catmanInterface';

export default function MenAddToCartBtn({ onClick }: MenAddToCartBtnProps) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-black text-white text-xs font-black py-4 rounded-md uppercase tracking-[0.2em] hover:bg-gray-900 transition-all active:scale-95 shadow-lg"
        >
            Add to bag
        </button>
    );
}
