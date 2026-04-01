type ProductTitleProps = {
    name: string;
};

export default function ProductTitle({ name }: ProductTitleProps) {
    return (
        <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 min-h-10 group-hover:text-blue-600 transition-colors">
            {name}
        </h3>
    );
}
