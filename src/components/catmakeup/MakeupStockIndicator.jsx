import React from 'react';

export default function MakeupStockIndicator() {
    return (
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
            <span className="text-[10px] md:text-xs font-bold text-pink-500 uppercase tracking-widest">In Stock & Ready</span>
        </div>
    );
}
