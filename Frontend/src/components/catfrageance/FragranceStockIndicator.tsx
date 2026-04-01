export default function FragranceStockIndicator() {
    return (
        <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest">Available Now</span>
        </div>
    );
}
