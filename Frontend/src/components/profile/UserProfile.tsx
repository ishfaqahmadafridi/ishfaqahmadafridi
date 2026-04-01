import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../zustand/auth/authStore';
import ProfileBackButton from './ProfileBackButton';
import ProfileContainer from './ProfileContainer';

export default function UserProfile() {
    const navigate = useNavigate();
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/signin');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <ProfileBackButton />
                <ProfileContainer activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    );
}
