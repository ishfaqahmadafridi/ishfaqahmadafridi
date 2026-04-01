import { useProfileStore } from '../zustand/profile/profileStore';
import { useAuthStore } from '../zustand/auth/authStore';

export default function UpdateProfileForm() {
    const profileData = useProfileStore((state) => state.profileData);
    const authUser = useAuthStore((state) => state.user);

    // Use profile data first, then auth user data as fallback
    const name = profileData.name || profileData.username || authUser?.username || 'Not set';
    const username = profileData.username || authUser?.username || 'Not set';
    const email = profileData.email || authUser?.email || 'Not set';

    return (
        <div className="space-y-6">
            <p className="text-sm text-gray-500 mb-4">
                Your account information is displayed below. To change your password, use the "Change Password" tab.
            </p>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                        {name}
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                        {username}
                    </div>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                        {email}
                    </div>
                </div>
            </div>
        </div>
    );
}
