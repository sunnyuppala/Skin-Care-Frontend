import React from 'react';

const Multipurpose = () => (
  <div className="min-h-screen bg-[#F7F8ED] py-12 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-light mb-4 text-[#222]">Multipurpose Skincare</h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover the power of all-in-one skincare solutions. Our multipurpose products are designed to simplify your routine while delivering exceptional results for every skin type.
      </p>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Multipurpose Skincare" className="rounded-xl shadow-lg mx-auto mb-8 w-full max-w-md" />
      <h2 className="text-2xl font-semibold mb-4 text-[#222]">Why Choose Multipurpose?</h2>
      <ul className="text-left text-gray-700 mb-8 max-w-xl mx-auto space-y-3">
        <li>• <span className="font-medium">Saves time:</span> Fewer steps, same glow.</li>
        <li>• <span className="font-medium">Cost-effective:</span> One product, many benefits.</li>
        <li>• <span className="font-medium">Travel-friendly:</span> Less clutter, more convenience.</li>
        <li>• <span className="font-medium">Gentle formulas:</span> Suitable for all skin types.</li>
      </ul>
      <div className="mt-8">
        <a href="/bundle" className="inline-block bg-[#222] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#444] transition">Shop Multipurpose Bundles</a>
      </div>
    </div>
  </div>
);

export default Multipurpose; 