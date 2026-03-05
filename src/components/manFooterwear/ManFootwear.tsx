import ManFootwearGrid from './ManFootwearGrid';

export default function ManFootwear() {
    return (
        <div className="bg-gray-50 py-16 px-6">
            <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">
                Man Footwear
            </h2>
            <div className="max-w-7xl mx-auto">
                <ManFootwearGrid />
            </div>
        </div>
    );
}
