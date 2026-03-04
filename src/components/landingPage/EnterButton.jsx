
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowButton, setShowButton } from '../redux/slices/landing/landingSlice';
import { setPage } from '../redux/slices/uiSlice/uiSlice';

export default function EnterButton() {
      const dispatch = useDispatch();
      const showButton = useSelector(selectShowButton);
    
      useEffect(() => {
        const timer = setTimeout(() => dispatch(setShowButton(true)), 2000);
        return () => clearTimeout(timer);
      }, [dispatch]);
    
      const handleEnter = useCallback(() => {
       
        localStorage.setItem('hasVisitedSite', 'true');
     
        dispatch(setPage('home'));
      }, [dispatch]);
    
      
      useEffect(() => {
        const handleKeyPress = (e) => {
          if (e.key === 'Enter' && showButton) {
            handleEnter();
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
      }, [showButton, handleEnter]);

    if (!showButton) return <div className="h-14" />; 

    return (
        <button
            onClick={handleEnter}
            className="px-12 py-4 border border-white text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
        >
            Enter 
        </button>
    );
}
