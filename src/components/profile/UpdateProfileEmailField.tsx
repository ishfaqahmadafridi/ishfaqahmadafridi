import type { ProfileFieldProps } from '../interfaces/profile/profileInterface';

export default function UpdateProfileEmailField({ value, onChange }: ProfileFieldProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
            <input
                type="email"
                name="email"
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:bg-white rounded-xl outline-none transition-all"
                required
            />
        </div>
    );
}
