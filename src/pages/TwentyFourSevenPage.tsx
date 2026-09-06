import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '../types/appStore';
import { getStoreProducts } from '../services/storeService';
import { addToCart } from '../services/cartService';
import { AppCard } from '../components/AppCard';
import { EditorialCard } from '../components/EditorialCard';
import { HorizontalShelf } from '../components/HorizontalShelf';
import { Clock, ShoppingCart, CheckCircle, Star, ExternalLink } from 'lucide-react';

export const TwentyFourSevenPage: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  useEffect(() => {
    getStoreProducts().then(setProducts);
  }, []);

  const handleAddToCart = (product: ProductItem) => {
    addToCart(product, 1);
    setAddedItem(product.name);
    setTimeout(() => setAddedItem(null), 2500);
  };

  // Convert products into AppItem structure for seamless App Store layout matching
  const productApps = products.map(p => ({
    id: p.id,
    name: p.name,
    subtitle: `₹${p.discountPrice || p.price} • ${p.deliveryTime}`,
    category: p.category,
    icon: p.image,
    price: "ADD",
    developer: "Twenty Four Seven",
    rating: "4.9",
    ratingCount: 18500,
    ageRating: "4+",
    appStoreUrl: `/twenty-four-seven/product/${p.id}`
  }));

  const storyItem = {
    id: "24s-editorial-hero",
    kind: "TodayCard",
    eyebrow: "APP STORE FEATURED STORY",
    title: "Twenty Four Seven: 24/7 Express Convenience",
    description: "Satisfy midnight cravings and order late-night essentials with 15-minute express delivery straight to your doorstep.",
    heroImage: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
    backgroundColor: "#1C1428",
    textColor: "#FFFFFF",
    app: {
      id: "24s-app",
      name: "Twenty Four Seven: 24S",
      subtitle: "24/7 Convenience Store & Delivery",
      category: "Shopping",
      icon: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=180&q=80",
      price: "GET"
    }
  };

  return (
    <div className="space-y-12 pb-24 text-gray-900 dark:text-white">
      {/* Toast Notification */}
      {addedItem && (
        <div className="fixed bottom-20 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-amber-500 animate-in fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold">{addedItem} added to Cart!</span>
        </div>
      )}

      {/* Main App Store Story Hero */}
      <EditorialCard item={storyItem as any} size="hero" />

      {/* App Store Metadata Block */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center shadow-sm">
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase">RATING</div>
          <div className="flex items-center justify-center gap-1 mt-1 text-sm font-bold text-gray-900 dark:text-white">
            <span>4.9</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase">SPEED</div>
          <div className="mt-1 text-sm font-bold text-emerald-600 dark:text-emerald-400">15 Mins</div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase">CATEGORY</div>
          <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">Shopping</div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase">AVAILABILITY</div>
          <div className="mt-1 text-xs font-bold text-gray-900 dark:text-white">24/7 Open</div>
        </div>
      </div>

      {/* App Screenshots Preview */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Featured Menu Preview</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/twenty-four-seven/product/${p.id}`)}
              className="w-56 shrink-0 bg-white dark:bg-zinc-900 rounded-2xl p-3 border border-gray-200 dark:border-zinc-800 shadow-md cursor-pointer hover:shadow-lg transition-all group"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-2 bg-gray-100 dark:bg-zinc-800">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="text-sm font-bold truncate group-hover:text-amber-500 transition-colors">{p.name}</h4>
              <p className="text-xs text-gray-500 truncate">{p.category} • ₹{p.discountPrice || p.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(p);
                }}
                className="w-full mt-2 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* App Store Collection Shelves */}
      <HorizontalShelf
        title="Hot Snacks & Fast Delivery"
        subtitle="ESSENTIALS — Freshly prepared hot dogs, cold coffee, and late-night munchies."
        apps={productApps.slice(0, 5) as any}
      />

      <HorizontalShelf
        title="Beverages & Sweets"
        subtitle="CHILLED & REFRESHING — Energy drinks, artisan chocolates, and ice cream."
        apps={productApps.slice(5) as any}
      />
    </div>
  );
};
