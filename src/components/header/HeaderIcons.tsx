import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleTheme, selectTheme, toggleSearchDialog } from '../redux/slices/uiSlice/uiSlice';
import { selectCartItems } from '../redux/slices/cart/cartSlice';
import { logout, selectIsAuthenticated } from '../redux/slices/auth/authSlice';
import { IoSearch, IoCartOutline, IoSunnyOutline, IoMoonOutline, IoPersonOutline, IoLogOutOutline } from 'react-icons/io5';

export default function HeaderIcons() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useSelector(selectTheme);
    const cartItems = useSelector(selectCartItems);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="flex items-center gap-4 md:gap-6 text-xl">
            <button onClick={() => dispatch(toggleTheme())} className="p-2 hover:opacity-50 transition-opacity">
                {theme === 'light' ? <IoMoonOutline /> : <IoSunnyOutline className="text-yellow-400" />}
            </button>
            <button onClick={() => dispatch(toggleSearchDialog())} className="p-2 hover:opacity-50 transition-opacity">
                <IoSearch />
            </button>
            <button onClick={() => navigate('/cart')} className="relative p-2 hover:opacity-50 transition-opacity">
                <IoCartOutline />
                {count > 0 && <span className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-bounce">{count}</span>}
            </button>
            {isAuthenticated ? (
                <>
                    <button onClick={() => navigate('/profile')} className="p-2 hover:text-purple-600 transition-colors">
                        <IoPersonOutline />
                    </button>
                    <button onClick={() => dispatch(logout())} className="p-2 hover:text-rose-600 transition-colors">
                        <IoLogOutOutline />
                    </button>
                </>
            ) : (
                <button onClick={() => navigate('/signin')} className="p-2 hover:opacity-50 transition-opacity">
                    <IoPersonOutline />
                </button>
            )}
        </div>
    );
}
