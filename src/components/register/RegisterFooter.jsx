import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';

export default function RegisterFooter() {
  const dispatch = useDispatch();

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button 
          onClick={() => dispatch(setPage('signin'))} 
          className="font-bold text-purple-600 hover:text-purple-700 hover:underline transition-all"
        >
          Sign in here
        </button>
      </p>
    </div>
  );
}
