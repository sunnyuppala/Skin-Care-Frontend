import React from 'react';

const Bundle = () => (
  <div className="min-h-screen bg-[#F7F8ED] py-12 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-light mb-4 text-[#222]">Skincare Bundles</h1>
      <p className="text-lg text-gray-600 mb-8">
        Get the best value and results with our expertly curated skincare bundles. Each set is designed to target specific skin needs and help you achieve your healthiest skin ever.
      </p>
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Skincare Bundle" className="rounded-xl shadow-lg mx-auto mb-8 w-full max-w-md" />
      <h2 className="text-2xl font-semibold mb-4 text-[#222]">Bundle Benefits</h2>
      <ul className="text-left text-gray-700 mb-8 max-w-xl mx-auto space-y-3">
        <li>• <span className="font-medium">Complete routine:</span> Everything you need in one set.</li>
        <li>• <span className="font-medium">Cost savings:</span> Save more compared to buying individually.</li>
        <li>• <span className="font-medium">Perfect for gifting:</span> Beautifully packaged for any occasion.</li>
        <li>• <span className="font-medium">Expertly matched:</span> Products that work better together.</li>
      </ul>
      <div className="mt-8">
        <a href="/#best-selling" className="inline-block bg-[#222] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#444] transition">Browse Bundles</a>
      </div>
    </div>
  </div>
);

export default Bundle; 