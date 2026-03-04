import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';

export default function ProfileBackButton() {
  const dispatch = useDispatch();

  return (
    <button 
      onClick={() => dispatch(setPage('home'))}
      className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to Home
    </button>
  );
}
