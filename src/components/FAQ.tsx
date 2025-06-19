import React, { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import photoFaq from './images/photo-1668025757022-a75458371576.avif';

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes, all our products are carefully formulated with sensitive skin in mind. We use gentle, natural ingredients and avoid harsh chemicals that can cause irritation."
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely! We never test on animals and ensure all our products are cruelty-free. Check individual product details for specifics."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, you can return it for a full refund within 30 days of delivery."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping page for detailed information."
  },
  {
    question: "How do I choose the right products?",
    answer: "We recommend starting with our skin assessment quiz or consulting our skincare specialists who can help you create a personalized routine based on your skin type and concerns."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    
    if (openIndex !== null && openIndex !== index) {
      // Close previously opened FAQ
      gsap.to(answerRefs.current[openIndex], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
    
    if (isOpening) {
      setOpenIndex(index);
      
      // Open new FAQ
      const element = answerRefs.current[index];
      if (element) {
        gsap.set(element, { height: "auto" });
        const height = element.offsetHeight;
        gsap.fromTo(element, 
          { height: 0, opacity: 0 },
          { 
            height: height,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          }
        );
      }
    } else {
      // Close current FAQ
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => setOpenIndex(null)
      });
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 mb-6">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
              Frequently Asked Question
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
              Answers to Your
              <br />
              Skincare Questions, All
              <br />
              in One Place.
            </h2>
          </div>
          
          <div className="relative">
            <img 
              src={photoFaq} 
              alt="Skincare FAQ" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-gray-900 text-white rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 text-xs">?</span>
              </div>
              <div className="text-sm">
                <p>24/7 We're Here</p>
                <p>to Help You</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-start hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div
                ref={el => answerRefs.current[index] = el}
                className="overflow-hidden"
                style={{ height: openIndex === index ? 'auto' : 0 }}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
