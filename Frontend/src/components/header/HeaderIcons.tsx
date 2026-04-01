import { IoSearchOutline, IoCartOutline, IoPersonOutline, IoLogOutOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useUiStore } from '../zustand/ui/uiStore';
import { useCartStore } from '../zustand/cart/cartStore';
import { useAuthStore } from '../zustand/auth/authStore';
import { useProfileStore } from '../zustand/profile/profileStore';

import api from '../../api/client';

export default function HeaderIcons() {
    const navigate = useNavigate();
    
    // Zustand selectors
    const cartItems = useCartStore((state) => state.items);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const logout = useAuthStore((state) => state.logout);
    const profileData = useProfileStore((state) => state.profileData);
    const profileImage = profileData.profileImage;
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleCartClick = () => {
        // Log activity to backend
        api.post('/activity/log/', { activity_type: 'view_cart' })
           .catch(err => console.error('Failed to log view_cart activity', err));
        navigate('/cart');
    };

    return (
        <div className="flex items-center gap-2 md:gap-4 text-2xl md:text-3xl">
            <button onClick={() => navigate('/search')} className="p-2 hover:opacity-50 transition-opacity">
                <IoSearchOutline />
            </button>
            <button onClick={handleCartClick} className="p-2 hover:opacity-50 transition-opacity relative">
                <IoCartOutline />
                {count > 0 && (
                    <span className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-black transform translate-x-1 -translate-y-1">
                        {count}
                    </span>
                )}
            </button>
        </div>
    );
}
