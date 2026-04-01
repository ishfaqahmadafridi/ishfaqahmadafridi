import React from 'react';

const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      <p className="text-sm font-black uppercase tracking-[0.2em] animate-pulse">Loading Experience...</p>
    </div>
  </div>
);

export default LoadingScreen;
