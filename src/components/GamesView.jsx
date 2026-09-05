import React from "react";
import { OTHER_APPS } from "../data/appStoreData";
import { Star } from "lucide-react";

export const GamesView = () => {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8 animate-fade-in text-white">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400">GAMES</span>
        <h1 className="font-heading font-extrabold text-3xl lg:text-4xl mt-0.5">Top Games</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "Subway Surfers", cat: "Action", rating: 4.8 },
          { name: "Candy Crush Saga", cat: "Casual", rating: 4.7 },
          { name: "Call of Duty: Mobile", cat: "Action", rating: 4.9 },
          { name: "Genshin Impact", cat: "Adventure", rating: 4.8 }
        ].map((game, idx) => (
          <div key={idx} className="bg-[#18181B] border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 font-extrabold flex items-center justify-center text-sm shadow-md">
                🎮
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{game.name}</h4>
                <p className="text-xs text-slate-400">{game.cat} • ⭐ {game.rating}</p>
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
