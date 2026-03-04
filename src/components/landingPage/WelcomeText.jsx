import React, { useState, useEffect } from 'react';

export default function WelcomeText() {
    const [titleText, setTitleText] = useState('');
    const [subtitleText, setSubtitleText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    
    const fullTitle = 'AI Collection';
    const fullSubtitle = 'Welcome to AI Collection';

    useEffect(() => {
        let titleIndex = 0;
        let subtitleIndex = 0;
        let isDeleting = false;
        let titleComplete = false;

        // Blinking cursor effect
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        const typeText = () => {
            // Type title first
            if (!titleComplete) {
                if (!isDeleting && titleIndex <= fullTitle.length) {
                    setTitleText(fullTitle.slice(0, titleIndex));
                    titleIndex++;
                    
                    if (titleIndex > fullTitle.length) {
                        setTimeout(() => {
                            isDeleting = true;
                        }, 1500); // Pause before deleting
                    }
                } else if (isDeleting && titleIndex > 0) {
                    titleIndex--;
                    setTitleText(fullTitle.slice(0, titleIndex));
                    
                    if (titleIndex === 0) {
                        isDeleting = false;
                        titleComplete = true;
                    }
                } else if (isDeleting && titleIndex === 0) {
                    isDeleting = false;
                    titleComplete = true;
                }
            } 
            // Then type subtitle
            else {
                if (!isDeleting && subtitleIndex <= fullSubtitle.length) {
                    setSubtitleText(fullSubtitle.slice(0, subtitleIndex));
                    subtitleIndex++;
                    
                    if (subtitleIndex > fullSubtitle.length) {
                        setTimeout(() => {
                            isDeleting = true;
                        }, 2000); // Longer pause before deleting subtitle
                    }
                } else if (isDeleting && subtitleIndex > 0) {
                    subtitleIndex--;
                    setSubtitleText(fullSubtitle.slice(0, subtitleIndex));
                    
                    if (subtitleIndex === 0) {
                        // Reset to start the cycle again
                        isDeleting = false;
                        titleComplete = false;
                        titleIndex = 0;
                    }
                }
            }
        };

        const typingInterval = setInterval(typeText, 100); // Typing speed

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase min-h-16 md:min-h-32 flex items-center justify-center">
                {titleText}
                {titleText && showCursor && <span className="animate-pulse ml-1">|</span>}
            </h1>
            <p className="text-gray-400 text-xs md:text-sm tracking-[0.5em] uppercase font-light min-h-8 flex items-center justify-center">
                {subtitleText}
                {subtitleText && showCursor && <span className="animate-pulse ml-1">|</span>}
            </p>
        </div>
    );
}
