import React from 'react';

const Cart = () => (
  <div className="min-h-screen bg-[#F7F8ED] py-12 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-5xl font-light mb-4 text-[#222]">Your Cart</h1>
      <p className="text-lg text-gray-600 mb-8">Your cart is currently empty. Start adding your favorite skincare products!</p>
      <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" alt="Empty Cart" className="rounded-xl shadow-lg mx-auto mb-8 w-full max-w-md" />
      <div className="mt-8">
        <a href="/best-selling" className="inline-block bg-[#222] text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-[#444] transition">Shop Best Sellers</a>
      </div>
    </div>
  </div>
);

export default Cart; 