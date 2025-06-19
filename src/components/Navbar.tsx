import React, { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="w-full bg-cream-50 px-4 md:px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded">
            SKINCARE
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/multipurpose" className="text-gray-700 hover:text-gray-900 transition-colors">MULTIPURPOSE</Link>
          <Link to="/serum" className="text-gray-700 hover:text-gray-900 transition-colors">Serum</Link>
          <Link to="/sunscreen" className="text-gray-700 hover:text-gray-900 transition-colors">Sunscreen</Link>
          <Link to="/bundle" className="text-gray-700 hover:text-gray-900 transition-colors">Bundle</Link>
        </div>
        {/* Cart (always visible) */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
            <ShoppingCart size={20} />
            <span className="text-sm">Cart ({cartCount})</span>
          </Link>
          {/* Hamburger for mobile */}
          <button className="md:hidden ml-2 p-2 rounded hover:bg-gray-100" onClick={() => setMobileOpen((v) => !v)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-50 border-t border-gray-200 px-4 py-3 space-y-2 shadow">
          <Link to="/multipurpose" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>MULTIPURPOSE</Link>
          <Link to="/serum" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>Serum</Link>
          <Link to="/sunscreen" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>Sunscreen</Link>
          <Link to="/bundle" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>Bundle</Link>
          <Link to="/cart" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>Cart ({cartCount})</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

