import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';
import NavLinks from './NavLinks';
import HeaderIcons from './HeaderIcons';

export default function LogoNav() {
    const dispatch = useDispatch();
    return (
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between gap-8">
            <h1
                onClick={() => dispatch(setPage('home'))}
                className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
            >
                AFRIDI'S
            </h1>
            <NavLinks />
            <HeaderIcons />
        </div>
    );
}
