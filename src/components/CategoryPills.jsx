import React from "react";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { useApp } from "../context/AppContext";
import { 
  LayoutGrid, 
  Flame, 
  Coffee, 
  Cookie, 
  IceCream, 
  Zap, 
  Soup, 
  ShoppingBag, 
  Moon 
} from "lucide-react";

const ICON_MAP = {
  LayoutGrid,
  Flame,
  Coffee,
  Cookie,
  IceCream,
  Zap,
  Soup,
  ShoppingBag,
  Moon
};

export const CategoryPills = () => {
  const { activeCategory, setActiveCategory } = useApp();

  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none my-2 no-scrollbar">
      {CATEGORIES.map((cat) => {
        const IconComponent = ICON_MAP[cat.icon] || LayoutGrid;
        const isActive = activeCategory === cat.id;

        // Calculate count
        const count = cat.id === "all" 
          ? PRODUCTS.length 
          : PRODUCTS.filter((p) => p.category === cat.id).length;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
              isActive
                ? "bg-yellow-400 text-black border-yellow-400 shadow-lg shadow-yellow-500/25 scale-105"
                : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80"
            }`}
          >
            <IconComponent className={`w-4 h-4 ${isActive ? "text-black" : "text-yellow-400"}`} />
            <span>{cat.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                isActive ? "bg-black/20 text-black" : "bg-slate-800 text-slate-400"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
