import React from 'react';

export default function MenStockIndicator() {
    return (
        <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">In Stock & Priority</span>
        </div>
    );
}
