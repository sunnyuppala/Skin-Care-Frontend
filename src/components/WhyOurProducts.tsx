import React from 'react';
import photo1 from './Images/photo-1629940446512-e0f1edd3f8e2.avif';

const features = [
  {
    number: "01",
    title: "Bio Ingredients",
    description: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."
  },
  {
    number: "02",
    title: "Everything Natural",
    description: "Pure ingredients for pure skin. The Perfect solution for your skin care needs."
  },
  {
    number: "03",
    title: "All Handmade",
    description: "Made with love and care. Just for you. Give your skin the tender loving care it deserves."
  }
];

const WhyOurProducts = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-orange-100 rounded-full text-sm text-orange-800 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Why Our Products
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
              YOUR SKIN DESERVES
              <br />
              THE BEST CARE.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Discover a curated collection of skincare products designed to rejuvenate, 
              protect, and pamper your skin. Explore our page crafted with love backed 
              by science, and inspired by nature.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.number} className="flex gap-6">
                <div className="text-3xl font-light text-gray-300 flex-shrink-0">
                  {feature.number}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative">
            <img 
              src={photo1}
              alt="Skincare routine" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Best Skin Care Product</p>
                <p className="text-xs text-gray-600">Award Wining</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 text-xs text-gray-600 bg-white/80 rounded px-2 py-1">
              SINCE 2001
            </div>
            <div className="absolute bottom-6 right-6 text-xs text-gray-600 bg-white/80 rounded px-2 py-1 hover:underline cursor-pointer">
              LEARN MORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurProducts;
