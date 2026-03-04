import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, selectIsSearchDialogOpen, setSearchDialogOpen } from '../redux/slices/uiSlice/uiSlice';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import HomeContent from './HomeContent';
import SearchDialog from '../search/SearchDialog';

export default function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const isSearchDialogOpen = useSelector(selectIsSearchDialogOpen);
  const isAdminPage = currentPage === 'admin';

  // Render admin panel without header/footer for full screen experience
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
