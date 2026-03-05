import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/slices/uiSlice/uiSlice';
import type { RootState } from '../redux/store';
import TopBar from './TopBar';
import LogoNav from './LogoNav';

export default function Header() {
  const theme = useSelector((state: RootState) => selectTheme(state));
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    } border-b border-gray-100 shadow-sm`}>
      <TopBar />
      <LogoNav />
    </header>
  );
}
