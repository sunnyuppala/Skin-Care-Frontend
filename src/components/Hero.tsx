import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import geroooo from './images/geroooo.jpg';

const Hero = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text fill animation on scroll
    if (textRef.current) {
      const words = textRef.current.textContent?.split(' ') || [];
      textRef.current.innerHTML = words.map(word => 
        `<span class="inline-block opacity-30">${word}&nbsp;</span>`
      ).join('');

      const spans = textRef.current.querySelectorAll('span');
      
      gsap.to(spans, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 md:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 bg-orange-100 rounded-full text-sm text-orange-800 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Why Our Products
          </div>
          
          
          
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full">
              Shop Now
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={geroooo}
              alt="Natural Skincare" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-gray-600">While giving you an invigorating</p>
              <p className="text-sm text-gray-600">cleansing experience.</p>
            </div>
          </div>
          
          <div className="absolute top-4 right-4">
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <img 
                src={geroooo} 
                alt="Product" 
                className="w-16 h-20 object-cover rounded"
              />
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-400 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-400 rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
