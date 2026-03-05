import type { WomenProductTitleProps } from '../interfaces/catwoman/catwomanInterface';

export default function WomenProductTitle({ name }: WomenProductTitleProps) {
    return (
        <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-2 min-h-12 group-hover:text-rose-700 transition-colors">
            {name}
        </h3>
    );
}
