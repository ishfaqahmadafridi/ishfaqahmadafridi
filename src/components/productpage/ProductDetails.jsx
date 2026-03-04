import React from 'react';

export default function ProductDetails({ details }) {
    if (!details) return null;
    return (
        <div className="pt-8 border-t border-gray-100 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Product Details</h4>
            <div className="prose prose-sm max-w-none text-gray-600">
                <ul className="grid grid-cols-1 gap-2 list-none p-0">
                    {Object.entries(details).map(([key, val]) => (
                        <li key={key} className="flex items-start gap-2">
                            <span className="font-bold text-black min-w-[100px]">{key}:</span>
                            <span>{val}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
