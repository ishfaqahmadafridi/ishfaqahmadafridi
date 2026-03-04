import React from 'react';
import RegisterBackground from './RegisterBackground';
import RegisterHeader from './RegisterHeader';
import RegisterFormContainer from './RegisterFormContainer';
import RegisterFooter from './RegisterFooter';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50/30 to-rose-50/30 pt-28 md:pt-32 px-4 pb-12">
      <div className="max-w-md w-full">
        <RegisterBackground />

        <div className="relative bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-2 border-purple-200/60 hover:border-purple-300 hover:shadow-purple-300/30 transition-all duration-500">
          <RegisterHeader />
          <RegisterFormContainer />
          <RegisterFooter />
        </div>
      </div>
    </div>
  );
}
