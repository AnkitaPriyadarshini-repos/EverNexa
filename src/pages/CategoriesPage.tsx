import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES_LIST } from "../data/appStoreData";
import { 
  LayoutGrid, 
  Camera, 
  Activity, 
  Send, 
  Tv, 
  UtensilsCrossed, 
  Zap, 
  Map, 
  Puzzle, 
  Gem,
  ChevronRight
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  LayoutGrid,
  Camera,
  Activity,
  Send,
  Tv,
  UtensilsCrossed,
  Zap,
  Map,
  Puzzle,
  Gem
};

export const CategoriesPage: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8 animate-fade-in text-white font-sans">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-400">EXPLORE</span>
        <h1 className="font-heading font-extrabold text-3xl lg:text-4xl mt-0.5">App Store Categories</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CATEGORIES_LIST.map((cat) => {
          const IconComp = ICON_MAP[cat.icon] || LayoutGrid;
          const isFood = cat.id === "food-drink";
          const targetRoute = isFood ? "/twenty-four-seven" : `/category/${cat.id}`;

          return (
            <Link
              key={cat.id}
              to={targetRoute}
              className={`p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                isFood
                  ? "bg-gradient-to-r from-yellow-500/20 to-red-600/20 border-yellow-500/40 hover:border-yellow-400"
                  : "bg-[#18181B] border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${isFood ? 'bg-yellow-400 text-black' : 'bg-slate-800 text-sky-400'}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-sky-400 transition-colors">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] text-slate-400">Explore Apps</span>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
