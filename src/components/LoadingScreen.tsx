
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Logo fade in
    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
    
    // Progress bar animation
    tl.fromTo(progressRef.current,
      { width: "0%" },
      { width: "100%", duration: 1.5, ease: "power2.inOut" },
      "-=0.5"
    );
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <div ref={logoRef} className="mb-8">
        <h1 className="text-4xl md:text-6xl font-light text-white tracking-widest">
          SKINCARE
        </h1>
      </div>
      <div className="w-64 h-0.5 bg-gray-700 relative overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-orange-400 to-pink-400"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
