import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/slices/auth/authSlice';
import ProfileBackButton from './ProfileBackButton';
import ProfileContainer from './ProfileContainer';

export default function UserProfile() {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);
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
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto">
                <ProfileBackButton />
                <ProfileContainer activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    );
}
