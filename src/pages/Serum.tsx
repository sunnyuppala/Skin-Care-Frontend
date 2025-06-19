import React from 'react';

const Serum = () => (
  <div className="min-h-screen bg-[#F7F8ED] py-12 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-light mb-4 text-[#222]">Serums for Radiant Skin</h1>
      <p className="text-lg text-gray-600 mb-8">
        Unlock the secret to glowing skin with our advanced serums. Each formula is packed with potent ingredients to target your unique skin concerns and reveal your natural radiance.
      </p>
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Serum" className="rounded-xl shadow-lg mx-auto mb-8 w-full max-w-md" />
      <h2 className="text-2xl font-semibold mb-4 text-[#222]">Key Ingredients</h2>
      <ul className="text-left text-gray-700 mb-8 max-w-xl mx-auto space-y-3">
        <li>• <span className="font-medium">Vitamin C:</span> Brightens and evens skin tone.</li>
        <li>• <span className="font-medium">Hyaluronic Acid:</span> Deep hydration and plumping effect.</li>
        <li>• <span className="font-medium">Niacinamide:</span> Reduces redness and refines pores.</li>
        <li>• <span className="font-medium">Peptides:</span> Boosts collagen for firmer skin.</li>
      </ul>
      <div className="mt-8">
        <a href="/#best-selling" className="inline-block bg-[#222] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#444] transition">Explore Our Serums</a>
      </div>
    </div>
  </div>
);

export default Serum; 