import { useNavigate } from 'react-router-dom';
import api from '../../api/client';

type NavItem = { name: string; path: string; cls?: string };

export default function NavLinks() {
    const navigate = useNavigate();
    const items: NavItem[] = [
        { name: 'Women', path: '/women' },
        { name: 'Men', path: '/men' },
        { name: 'Boys & Girls', path: '/kids' },
        { name: 'Fragrances', path: '/fragrances' },
        { name: 'Makeup', path: '/makeup' },
        { name: 'Skincare', path: '/skincare' },
        { name: 'Sale', path: '/sale', cls: 'text-rose-600' }
    ];

    const handleNavClick = (item: NavItem) => {
        // Log view category activity
        api.post('/activity/log/', { 
            activity_type: 'view_category', 
            metadata: { category: item.name, path: item.path } 
        }).catch(err => console.error('Failed to log category view', err));
        
        navigate(item.path);
    };

    return (
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {items.map(item => (
                <button
                    key={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 text-[12px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-all duration-200 ${item.cls || ''}`}
                >
                    {item.name}
                </button>
            ))}
        </nav>
    );
}
