import type { MakeupProductTitleProps } from '../interfaces/catmakeup/catmakeupInterface';

export default function MakeupProductTitle({ name }: MakeupProductTitleProps) {
    return (
        <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-2 min-h-12 group-hover:text-pink-600 transition-colors">
            {name}
        </h3>
    );
}
