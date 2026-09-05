import React from "react";
import { OTHER_APPS, TWENTY_FOUR_SEVEN_APP } from "../data/appStoreData";
import { useAppStore } from "../context/AppStoreContext";
import { Star, ArrowRight } from "lucide-react";

export const AppsView = () => {
  const { navigateToApp } = useAppStore();

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8 animate-fade-in text-white">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-400">FEATURED APPS</span>
        <h1 className="font-heading font-extrabold text-3xl lg:text-4xl mt-0.5">Top Apps</h1>
      </div>

      {/* Twenty Four Seven Highlight */}
      <div 
        onClick={() => navigateToApp()}
        className="bg-gradient-to-r from-yellow-500/20 to-red-600/20 border border-yellow-500/40 rounded-3xl p-6 flex items-center justify-between gap-4 cursor-pointer hover:border-yellow-400 transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black font-extrabold font-heading text-xl flex items-center justify-center shadow-lg">
            24S
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-yellow-400 uppercase tracking-widest">#1 FOOD & DRINK</span>
            <h3 className="font-heading font-bold text-xl text-white">Twenty Four Seven</h3>
            <p className="text-xs text-slate-400">24/7 Convenience Store & Express 15-Min Delivery</p>
          </div>
        </div>
        <button className="bg-yellow-400 text-black font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center gap-1">
          <span>VIEW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {OTHER_APPS.map((app) => (
          <div key={app.id} className="bg-[#18181B] border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={app.icon} alt={app.name} className="w-12 h-12 rounded-2xl object-cover border border-slate-700" />
              <div>
                <h4 className="font-bold text-sm text-white">{app.name}</h4>
                <p className="text-xs text-slate-400">{app.category} • ⭐ {app.rating}</p>
              </div>
            </div>
            <button className="bg-[#252528] hover:bg-[#323236] text-sky-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase">
              GET
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
