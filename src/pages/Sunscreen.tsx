import React from 'react';

const Sunscreen = () => (
  <div className="min-h-screen bg-[#F7F8ED] py-12 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-light mb-4 text-[#222]">Sunscreen Essentials</h1>
      <p className="text-lg text-gray-600 mb-8">
        Protect your skin every day with our lightweight, non-greasy sunscreens. Shield against harmful UV rays and prevent premature aging for a healthy, glowing complexion.
      </p>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Sunscreen" className="rounded-xl shadow-lg mx-auto mb-8 w-full max-w-md" />
      <h2 className="text-2xl font-semibold mb-4 text-[#222]">SPF Tips</h2>
      <ul className="text-left text-gray-700 mb-8 max-w-xl mx-auto space-y-3">
        <li>• <span className="font-medium">Apply generously:</span> Don't skimp on coverage.</li>
        <li>• <span className="font-medium">Reapply every 2 hours:</span> Especially after swimming or sweating.</li>
        <li>• <span className="font-medium">Choose broad-spectrum:</span> Protects from both UVA and UVB rays.</li>
        <li>• <span className="font-medium">Wear daily:</span> Even on cloudy days.</li>
      </ul>
      <div className="mt-8">
        <a href="/best-selling" className="inline-block bg-[#222] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#444] transition">Shop Sunscreen</a>
      </div>
    </div>
  </div>
);

export default Sunscreen; 