import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchDialog from '../search/SearchDialog';
import { selectIsSearchDialogOpen, setSearchDialogOpen } from '../redux/slices/uiSlice/uiSlice';
import type { AppDispatch } from '../redux/store';

export default function Layout() {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const isSearchDialogOpen = useSelector(selectIsSearchDialogOpen);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
            <SearchDialog
                isOpen={isSearchDialogOpen}
                onClose={() => dispatch(setSearchDialogOpen(false))}
            />
        </div>
    );
}
