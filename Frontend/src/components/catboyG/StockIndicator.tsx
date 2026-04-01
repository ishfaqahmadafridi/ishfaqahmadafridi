export default function StockIndicator() {
    return (
        <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-medium text-green-600 uppercase tracking-wide">In Stock</span>
        </div>
    );
}
