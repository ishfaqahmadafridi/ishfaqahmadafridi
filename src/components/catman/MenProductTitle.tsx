import type { MenProductTitleProps } from '../interfaces/catman/catmanInterface';

export default function MenProductTitle({ name }: MenProductTitleProps) {
    return (
        <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-2 min-h-12 group-hover:text-blue-800 transition-colors">
            {name}
        </h3>
    );
}
