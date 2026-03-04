

export default function CarouselNav({ onPrev, onNext }) {
  return (
    <>
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" 
        onClick={onPrev} 
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" 
        onClick={onNext} 
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}
