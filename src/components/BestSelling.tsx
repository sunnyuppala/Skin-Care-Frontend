import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';
// Import local images
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.webp';
import clinksing from './images/clinksing.jpg';
import clinsing2 from './images/clinsing 2.jpg';
import bfa6cb from './images/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg';
import b5d506ba from './images/b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg';
import photo1 from './images/photo-1629940446512-e0f1edd3f8e2.avif';
import photo2 from './images/photo-1674867688579-f46e18cd57f5.avif';
import photo3 from './images/photo-1668025757022-a75458371576.avif';
import photo4 from './images/photo-1664530964174-ad3a5bffdbce.avif';

const categories = [
  'NEW ARRIVAL',
  'CLEANSING',
  'ACNE FIGHTER',
  'ANTI AGING',
];

const products = [
  { id: 1, name: 'ALYA SKIN CLEANSER.', price: 'FROM $29.99', image: image1, category: 'CLEANSING' },
  { id: 2, name: 'RITUAL OF SAKURA.', price: 'FROM $27.99', image: image2, category: 'NEW ARRIVAL' },
  { id: 3, name: 'THE BODY LOTION.', price: 'FROM $19.99', image: image3, category: 'ANTI AGING' },
  { id: 4, name: 'VITAMIN C SERUM.', price: 'FROM $39.99', image: image4, category: 'ACNE FIGHTER' },
  { id: 5, name: 'HYDRATING TONER.', price: 'FROM $24.99', image: clinksing, category: 'CLEANSING' },
  { id: 6, name: 'GLOW MOISTURIZER.', price: 'FROM $34.99', image: clinsing2, category: 'NEW ARRIVAL' },
  { id: 7, name: 'NIGHT REPAIR CREAM.', price: 'FROM $44.99', image: bfa6cb, category: 'ANTI AGING' },
  { id: 8, name: 'SUNSCREEN SPF50.', price: 'FROM $22.99', image: b5d506ba, category: 'ACNE FIGHTER' },
  { id: 9, name: 'SOOTHING FACE MIST.', price: 'FROM $18.99', image: photo1, category: 'CLEANSING' },
  { id: 10, name: 'HERBAL EYE GEL.', price: 'FROM $29.99', image: photo2, category: 'NEW ARRIVAL' },
  { id: 11, name: 'ANTI-BLEMISH CREAM.', price: 'FROM $32.99', image: photo3, category: 'ACNE FIGHTER' },
  { id: 12, name: 'REJUVENATING MASK.', price: 'FROM $36.99', image: photo4, category: 'ANTI AGING' },
  { id: 13, name: 'DAILY FOAM CLEANSER.', price: 'FROM $21.99', image: image1, category: 'CLEANSING' },
  { id: 14, name: 'BRIGHTENING SERUM.', price: 'FROM $38.99', image: image2, category: 'NEW ARRIVAL' },
  { id: 15, name: 'SPOT TREATMENT.', price: 'FROM $25.99', image: image3, category: 'ACNE FIGHTER' },
  { id: 16, name: 'AGE DEFENSE LOTION.', price: 'FROM $41.99', image: image4, category: 'ANTI AGING' },
];

const CARD_WIDTHS = {
  base: 320, // mobile
  md: 350,  // tablet
  lg: 370,  // desktop
};
const CARD_GAP = 32;

function getVisibleCount(width) {
  if (width < 640) return 1; // mobile
  if (width < 1024) return 2; // tablet
  return 3; // desktop
}

const BestSelling = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { addToCart, cart } = useCart();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const VISIBLE_COUNT = getVisibleCount(windowWidth);
  const CARD_WIDTH = windowWidth < 640 ? CARD_WIDTHS.base : windowWidth < 1024 ? CARD_WIDTHS.md : CARD_WIDTHS.lg;
  const filteredProducts = products.filter(
    (p) => activeCategory === '' || p.category === activeCategory
  );
  const maxIndex = Math.max(filteredProducts.length - VISIBLE_COUNT, 0);

  const slideLeft = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const slideRight = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };
  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  return (
    <section
      id="best-selling"
      className="py-10 px-2 sm:px-4 md:px-8 bg-[#F7F8ED] font-sans"
      style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center px-5 py-2 bg-white rounded-full text-sm text-[#222] shadow border border-[#E6E6E6] mb-6 font-medium">
            <span className="w-2 h-2 bg-[#222] rounded-full mr-2"></span>
            Best Selling Products
          </div>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-light leading-tight tracking-tight text-[#222] mb-8">
            Skincare That Brings Out<br />Your Natural Radiance
          </h2>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 mt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full border border-[#222] transition-colors duration-200 font-medium ${activeCategory === cat ? 'bg-[#222] text-white' : 'bg-white text-[#222] hover:bg-[#222] hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* Responsive Carousel */}
        <div className="relative flex items-center">
          <button
            onClick={slideLeft}
            className="absolute left-0 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-[#E6E6E6] bg-white hover:bg-[#222] hover:text-white transition shadow disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll Left"
            disabled={startIndex === 0}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <div
            className="overflow-hidden w-full px-1 sm:px-4"
            style={{ minHeight: 320 }}
          >
            <div
              className="flex gap-4 sm:gap-8 transition-transform duration-500 ease-in-out touch-pan-x"
              style={{
                transform: `translateX(-${startIndex * (CARD_WIDTH + CARD_GAP)}px)`,
                width: `${filteredProducts.length * (CARD_WIDTH + CARD_GAP)}px`,
              }}
            >
              {filteredProducts.map((product) => {
                const cartItem = cart.find((item) => item.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between min-w-[90vw] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[370px] max-w-[370px] w-[90vw] sm:w-[320px] md:w-[350px] lg:w-[370px] border border-[#E6E6E6] border-[1px] relative flex-shrink-0"
                    style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)', borderWidth: '1px', borderColor: '#E6E6E6' }}
                  >
                    <div className="w-full aspect-[4/5] bg-[#F7F8ED] flex items-center justify-center overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                        style={{ objectFit: 'cover' }}
                      />
                      {/* Bottom overlay card */}
                      <div className="absolute left-2 right-2 sm:left-4 sm:right-4 bottom-2 sm:bottom-4 bg-white/90 rounded-xl shadow flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3" style={{backdropFilter: 'blur(2px)'}}>
                        <div>
                          <div className="text-xs sm:text-sm text-[#222] font-medium mb-1" style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif', fontWeight: 400 }}>{product.name}</div>
                          <div className="text-xs sm:text-sm text-[#888] font-normal" style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif', fontWeight: 400 }}>{product.price}</div>
                        </div>
                        <button className="bg-[#F7F8ED] rounded-lg p-2 shadow border border-[#E6E6E6] flex items-center justify-center hover:bg-[#E6E6E6] transition relative" onClick={() => addToCart(product)}>
                          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[#222]" />
                          {cartItem && (
                            <span className="ml-2 text-xs sm:text-sm text-[#222] font-semibold bg-[#E6E6E6] rounded px-2 py-0.5">Added {cartItem.qty}</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={slideRight}
            className="absolute right-0 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-[#E6E6E6] bg-white hover:bg-[#222] hover:text-white transition shadow disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll Right"
            disabled={startIndex === maxIndex}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
