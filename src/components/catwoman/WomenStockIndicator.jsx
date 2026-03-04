import React from 'react';

export default function WomenStockIndicator() {
    return (
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
            <span className="text-[10px] md:text-xs font-bold text-rose-600 uppercase tracking-widest">Trending Choice</span>
        </div>
    );
}
