import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { logout, selectIsAuthenticated, selectIsAdmin } from '../redux/slices/auth/authSlice';

export default function TopBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isAdmin = useSelector(selectIsAdmin);
    
    const fullText = "Welcome to IA collection";
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        
        if (isTyping) {
            if (displayText.length < fullText.length) {
                timeout = setTimeout(() => {
                    setDisplayText(fullText.slice(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            } else {
                timeout = setTimeout(() => setIsTyping(true), 500);
            }
        }
        
        return () => clearTimeout(timeout);
    }, [displayText, isTyping]);

    return (
        <div className="bg-gray-50 py-2 border-b border-gray-100 hidden md:block">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <span className="min-w-[200px]">{displayText}<span className="animate-pulse">|</span></span>
                <div className="flex gap-6 items-center">
                    {isAuthenticated ? (
                        <>
                            {isAdmin && (
                                <button onClick={() => navigate('/admin')} className="hover:text-blue-600 transition-colors px-2 py-1">Admin Panel</button>
                            )}
                            <button onClick={() => dispatch(logout())} className="hover:text-black transition-colors px-2 py-1">Logout</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate('/signin')} className="hover:text-black transition-colors px-2 py-1">Sign In</button>
                            <button onClick={() => navigate('/register')} className="hover:text-black transition-colors px-2 py-1">Register</button>
                        </>
                    )}
                    <button onClick={() => navigate('/tracking')} className="hover:text-black transition-colors px-2 py-1">Tracking</button>
                </div>
            </div>
        </div>
    );
}
