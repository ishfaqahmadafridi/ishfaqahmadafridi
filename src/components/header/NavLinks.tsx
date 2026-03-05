import { useNavigate } from 'react-router-dom';

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
    return (
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {items.map(item => (
                <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`px-3 py-2 text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-all duration-200 ${item.cls || ''}`}
                >
                    {item.name}
                </button>
            ))}
        </nav>
    );
}
