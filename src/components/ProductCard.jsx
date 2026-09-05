import React from "react";
import { useApp } from "../context/AppContext";
import { Star, Plus, Minus, Heart, Flame, Clock, SlidersHorizontal } from "lucide-react";

export const ProductCard = ({ product }) => {
  const { cart, addToCart, updateQuantity, setCustomizeItem, favorites, toggleFavorite } = useApp();

  const isFav = favorites.includes(product.id);

  // Find standard cart quantity if present
  const cartItem = cart.find((item) => item.id === product.id && !item.selectedOptions);
  const totalQuantity = cart
    .filter((item) => item.id === product.id)
    .reduce((acc, item) => acc + item.quantity, 0);

  const handleAddClick = () => {
    if (product.options) {
      setCustomizeItem(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/5 flex flex-col justify-between group relative">
      
      {/* Top Media & Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40"></div>

        {/* Veg/Non-Veg Icon & Badge Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <div className={`w-4 h-4 rounded-sm border p-0.5 bg-slate-900/90 flex items-center justify-center ${product.isVeg ? 'border-emerald-500' : 'border-red-500'}`}>
            <div className={`w-2 h-2 rounded-full ${product.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
          </div>

          {product.badge && (
            <span className="bg-red-600/90 backdrop-blur-md text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-md tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Heart Favorite Toggle */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-full text-slate-300 hover:text-red-500 transition-colors z-10"
        >
          <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
        </button>

        {/* Prep Time pill */}
        {product.prepTime && (
          <div className="absolute bottom-2.5 left-3 text-[11px] text-slate-300 font-medium flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
            <Clock className="w-3 h-3 text-yellow-400" />
            <span>Ready in {product.prepTime}</span>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-bold text-white text-sm lg:text-base leading-snug line-clamp-1 group-hover:text-yellow-400 transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-slate-400 text-xs mt-1 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
          
          {/* Rating & Price */}
          <div>
            <div className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold mb-0.5">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-500">({product.reviews})</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-extrabold text-white text-base">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-500 line-through font-medium">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Quantity Controls / Add Button */}
          {totalQuantity > 0 && !product.options ? (
            <div className="flex items-center gap-2 bg-yellow-400 text-black font-extrabold px-2 py-1 rounded-xl shadow-lg shadow-yellow-500/20">
              <button
                onClick={() => updateQuantity(cartItem.cartId, -1)}
                className="p-1 hover:bg-black/10 rounded"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs min-w-[14px] text-center">{totalQuantity}</span>
              <button
                onClick={() => updateQuantity(cartItem.cartId, 1)}
                className="p-1 hover:bg-black/10 rounded"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddClick}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs transition-all shadow-md ${
                product.options
                  ? "bg-slate-800 text-yellow-400 hover:bg-slate-700 border border-yellow-400/30"
                  : "bg-yellow-400 text-black hover:bg-yellow-300 shadow-yellow-500/20"
              }`}
            >
              {product.options ? (
                <>
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Customise</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>ADD</span>
                </>
              )}
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
