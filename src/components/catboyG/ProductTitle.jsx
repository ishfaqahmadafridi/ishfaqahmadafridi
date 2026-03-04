import React from 'react';

export default function ProductTitle({ name }) {
    return (
        <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem] group-hover:text-blue-600 transition-colors">
            {name}
        </h3>
    );
}
