type ProductImageProps = {
    src: string;
    name: string;
    discount?: string;
};

export default function ProductImage({ src, name, discount }: ProductImageProps) {
    return (
        <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
            <img src={src} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {discount && (
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                    {discount}
                </div>
            )}
        </div>
    );
}
