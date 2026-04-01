import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useUiStore } from '../zustand/ui/uiStore';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchDialog from '../search/SearchDialog';


export default function Layout() {
    const theme = useUiStore((state) => state.theme);
    const isSearchDialogOpen = useUiStore((state) => state.isSearchDialogOpen);
    const setSearchDialogOpen = useUiStore((state) => state.setSearchDialogOpen);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
            <SearchDialog
                isOpen={isSearchDialogOpen}
                onClose={() => setSearchDialogOpen(false)}
            />
        </div>
    );
}
