import type { FragranceProductTitleProps } from '../interfaces/catfragrance/catfragranceInterface';

export default function FragranceProductTitle({ name }: FragranceProductTitleProps) {
    return (
        <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-2 min-h-12 group-hover:text-amber-600 transition-colors">
            {name}
        </h3>
    );
}
