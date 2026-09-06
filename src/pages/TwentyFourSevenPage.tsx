import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '../types/appStore';
import { getStoreProducts } from '../services/storeService';
import { addToCart } from '../services/cartService';
import { Clock, ShoppingCart, Zap, Flame, CheckCircle, ArrowRight } from 'lucide-react';

export const TwentyFourSevenPage: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const categories = ['All', 'Hot Food', 'Beverages', 'Snacks', 'Ice Cream', 'Groceries'];

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const items = await getStoreProducts(activeCategory);
      setProducts(items);
      setLoading(false);
    };
    load();
  }, [activeCategory]);

  const handleAddToCart = (product: ProductItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedItem(product.name);
    setTimeout(() => setAddedItem(null), 2500);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Toast Notification */}
      {addedItem && (
        <div className="fixed bottom-20 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-amber-500 animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold">{addedItem} added to Cart!</span>
        </div>
      )}

      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-white p-8 sm:p-12 shadow-xl">
        <div className="relative z-10 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>24S Express Delivery</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Twenty Four Seven Store
          </h1>

          <p className="text-amber-100 text-sm sm:text-base font-medium">
            24/7 Convenience Store & 15-Minute Express Delivery. Hot dogs, iced coffee, snacks, groceries and late-night essentials delivered instantly to your door.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
              <Zap className="w-4 h-4 text-amber-300" /> 15-Min Delivery
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
              <Flame className="w-4 h-4 text-amber-300" /> Fresh Hot Food
            </span>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none text-[160px] font-black leading-none select-none">
          24S
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === cat
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="py-20 text-center text-gray-400">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/twenty-four-seven/product/${product.id}`)}
              className="group bg-white dark:bg-zinc-900 rounded-3xl p-4 border border-gray-200/80 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-100 dark:bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{product.deliveryTime}</span>
                  </div>
                  {product.discountPrice && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold">
                      SAVE ₹{product.price - product.discountPrice}
                    </div>
                  )}
                </div>

                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                  {product.category}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-amber-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-2 mt-1 font-normal">
                  {product.description}
                </p>
              </div>

              {/* Price & Add to Cart Footer */}
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-base font-extrabold text-gray-900 dark:text-white">
                    ₹{product.discountPrice || product.price}
                  </div>
                  {product.discountPrice && (
                    <div className="text-[11px] text-gray-400 line-through font-medium">
                      ₹{product.price}
                    </div>
                  )}
                </div>

                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>ADD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
