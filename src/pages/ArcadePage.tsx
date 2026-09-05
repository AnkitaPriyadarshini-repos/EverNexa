import React from "react";
import { Gamepad2, Sparkles } from "lucide-react";

export const ArcadePage: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8 animate-fade-in text-white font-sans">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-red-500/20 text-red-400 rounded-2xl">
          <Gamepad2 className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">APPLE ARCADE</span>
          <h1 className="font-heading font-extrabold text-3xl lg:text-4xl">Unlimited Games. Zero Ads.</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { name: "Sneaky Sasquatch", cat: "Adventure", desc: "Live the life of a sasquatch doing sasquatch things." },
          { name: "NBA 2K24 Arcade Edition", cat: "Sports", desc: "Experience NBA action on mobile." },
          { name: "Hello Kitty Island Adventure", cat: "Simulation", desc: "Embark on a cozy island adventure." }
        ].map((game, idx) => (
          <div key={idx} className="bg-[#18181B] border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-red-500/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-700 text-white font-extrabold flex items-center justify-center text-xl shadow-lg">
              🕹️
            </div>
            <h4 className="font-heading font-bold text-base text-white">{game.name}</h4>
            <p className="text-xs text-slate-400">{game.desc}</p>
            <button className="w-full bg-red-500 hover:bg-red-400 text-white font-extrabold text-xs py-2 rounded-xl uppercase tracking-wider shadow-md">
              PLAY ON ARCADE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
