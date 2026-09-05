import React from "react";
import { useParams, Link } from "react-router-dom";
import { CATEGORIES_LIST, OTHER_APPS, TWENTY_FOUR_SEVEN_APP } from "../data/appStoreData";
import { Star, ArrowLeft } from "lucide-react";

export const CategoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const categoryInfo = CATEGORIES_LIST.find((c) => c.id === id) || { name: "Category Apps", id: "all" };

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8 animate-fade-in text-white font-sans">
      
      <div className="flex items-center gap-3">
        <Link to="/categories" className="p-2 bg-[#222226] text-slate-300 hover:text-white rounded-full">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">CATEGORY</span>
          <h1 className="font-heading font-extrabold text-3xl lg:text-4xl">{categoryInfo.name}</h1>
        </div>
      </div>

      {id === "food-drink" && (
        <Link 
          to="/twenty-four-seven"
          className="bg-yellow-400 text-black p-5 rounded-2xl font-bold flex items-center justify-between shadow-lg"
        >
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-red-600 block">FEATURED APP</span>
            <h3 className="text-xl font-extrabold">Twenty Four Seven</h3>
            <p className="text-xs font-medium text-black/80">24/7 Convenience Store & Express 15-Min Delivery</p>
          </div>
          <span className="bg-black text-yellow-400 font-extrabold text-xs px-4 py-2 rounded-full">GET</span>
        </Link>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {OTHER_APPS.map((app) => (
          <div key={app.id} className="bg-[#18181B] border border-slate-800 rounded-2xl p-4 flex items-center justify-between hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3">
              <img src={app.icon} alt={app.name} className="w-12 h-12 rounded-2xl object-cover border border-slate-700" />
              <div>
                <h4 className="font-bold text-sm text-white">{app.name}</h4>
                <p className="text-xs text-slate-400">{app.category} • ⭐ {app.rating}</p>
              </div>
            </div>
            <Link
              to={app.id === "1049305223" ? "/twenty-four-seven" : "#"}
              className="bg-[#252528] hover:bg-[#323236] text-sky-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase"
            >
              GET
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};
