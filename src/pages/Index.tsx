
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BestSelling from '@/components/BestSelling';
import WhyOurProducts from '@/components/WhyOurProducts';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Loading screen animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      // Page reveal animation after loading
      if (pageRef.current) {
        gsap.fromTo(pageRef.current, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.5, 
            ease: "power3.out",
            delay: 0.3
          }
        );
      }
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div ref={pageRef} className="min-h-screen" style={{ backgroundColor: 'rgba(239, 245, 225, 1)' }}>
      <Navbar />
      <Hero />
      <BestSelling />
      <WhyOurProducts />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
