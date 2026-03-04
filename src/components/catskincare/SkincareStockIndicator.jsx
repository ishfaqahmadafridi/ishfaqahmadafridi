import React from 'react';

export default function SkincareStockIndicator() {
    return (
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">Clinically Available</span>
        </div>
    );
}
