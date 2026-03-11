import { useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';
import HeaderIcons from './HeaderIcons';

export default function LogoNav() {
    const navigate = useNavigate();
    return (
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between gap-8">
            <h1
                onClick={() => navigate('/home')}
                className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
            >
                AFRIDI'S
            </h1>
            <NavLinks />
            <HeaderIcons />
        </div>
    );
}
