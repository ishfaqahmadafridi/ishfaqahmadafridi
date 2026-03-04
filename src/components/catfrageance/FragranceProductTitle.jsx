import React from 'react';

export default function FragranceProductTitle({ name }) {
    return (
        <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-2 min-h-[3rem] group-hover:text-amber-600 transition-colors">
            {name}
        </h3>
    );
}
