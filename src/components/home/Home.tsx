import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectIsSearchDialogOpen, setSearchDialogOpen } from '../redux/slices/uiSlice/uiSlice';
import type { RootState, AppDispatch } from '../redux/store';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HomeContent from './HomeContent';
import SearchDialog from '../search/SearchDialog';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => selectCurrentPage(state));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  const isSearchDialogOpen = useSelector((state: RootState) => selectIsSearchDialogOpen(state));
  const isAdminPage = currentPage === 'admin';

  if (isAdminPage) {
    return <HomeContent page={currentPage} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <HomeContent page={currentPage} />
      </main>
      <Footer />
      <SearchDialog 
        isOpen={isSearchDialogOpen} 
        onClose={() => dispatch(setSearchDialogOpen(false))} 
      />
    </div>
  );
}
