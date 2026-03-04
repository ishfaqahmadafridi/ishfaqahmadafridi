import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';
import { logout, selectIsAuthenticated } from '../redux/slices/auth/authSlice';

export default function TopBar() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return (
        <div className="bg-gray-50 py-2 border-b border-gray-100 hidden md:block">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <span>Welcome to AI collection</span>
                <div className="flex gap-6 items-center">
                    {isAuthenticated ? (
                        <>
                            <button onClick={() => dispatch(setPage('admin'))} className="hover:text-blue-600 transition-colors px-2 py-1">Admin Panel</button>
                            <button onClick={() => dispatch(logout())} className="hover:text-black transition-colors px-2 py-1">Logout</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => dispatch(setPage('signin'))} className="hover:text-black transition-colors px-2 py-1">Sign In</button>
                            <button onClick={() => dispatch(setPage('register'))} className="hover:text-black transition-colors px-2 py-1">Register</button>
                        </>
                    )}
                    <button onClick={() => dispatch(setPage('tracking'))} className="hover:text-black transition-colors px-2 py-1">Tracking</button>
                </div>
            </div>
        </div>
    );
}
