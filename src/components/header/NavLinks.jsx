import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';

export default function NavLinks() {
    const dispatch = useDispatch();
    const items = [
        { name: 'Women', p: 'women' }, { name: 'Men', p: 'man' },
        { name: 'Boys & Girls', p: 'boysG' }, { name: 'Fragrances', p: 'fragrances' },
        { name: 'Makeup', p: 'makeup' }, { name: 'Skincare', p: 'skincare' },
        { name: 'Sale', p: 'sale', cls: 'text-rose-600' }
    ];
    return (
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {items.map(item => (
                <button 
                    key={item.p} 
                    onClick={() => dispatch(setPage(item.p))} 
                    className={`px-3 py-2 text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-all duration-200 ${item.cls || ''}`}
                >
                    {item.name}
                </button>
            ))}
        </nav>
    );
}
