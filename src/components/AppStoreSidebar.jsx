import React from "react";
import { useAppStore } from "../context/AppStoreContext";
import { CATEGORIES_LIST } from "../data/appStoreData";
import { 
  BookOpen, 
  Rocket, 
  Layers, 
  Gamepad2, 
  Search, 
  ChevronDown, 
  Apple,
  Camera,
  Activity,
  Send,
  Tv,
  UtensilsCrossed,
  Zap,
  Map,
  Puzzle,
  Gem,
  LayoutGrid
} from "lucide-react";

const ICON_MAP = {
  BookOpen,
  Rocket,
  Layers,
  Gamepad2,
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

export const AppStoreSidebar = () => {
  const {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    deviceType,
    setDeviceType,
    navigateToApp
  } = useAppStore();

  return (
    <aside className="w-64 bg-[#121212] border-r border-[#262626] min-h-screen flex flex-col justify-between shrink-0 select-none p-4 text-slate-300 font-sans">
      
      <div className="space-y-6">
        
        {/* Device Switcher Dropdown (App Store for iPhone ˅) */}
        <div className="relative">
          <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-slate-200 transition-colors w-full px-2 py-1.5 rounded-lg hover:bg-[#1E1E1E]">
            <Apple className="w-4 h-4 fill-white" />
            <span>App Store for {deviceType}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-auto" />
          </button>
        </div>

        {/* Search Input Box */}
        <div className="relative px-1">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-[#1E1E1E] border border-[#2E2E2E] focus:border-[#444] rounded-lg py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-500 outline-none transition-all"
          />
        </div>

        {/* Core App Store Tabs */}
        <div className="space-y-0.5">
          {[
            { id: "today", label: "Today", icon: BookOpen, color: "text-sky-400" },
            { id: "games", label: "Games", icon: Rocket, color: "text-blue-400" },
            { id: "apps", label: "Apps", icon: Layers, color: "text-blue-500" },
            { id: "arcade", label: "Arcade", icon: Gamepad2, color: "text-red-400" }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#252528] text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-[#1A1A1C]"
                }`}
              >
                <Icon className={`w-4 h-4 ${tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Header & List */}
        <div className="space-y-1 pt-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 block mb-1">
            Categories
          </span>

          {CATEGORIES_LIST.map((cat) => {
            const IconComp = ICON_MAP[cat.icon] || LayoutGrid;
            const isFood = cat.id === "food_drink";
            const isActive = isFood && activeTab === "twenty_four_seven";

            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (isFood) {
                    navigateToApp();
                  } else {
                    setActiveTab(cat.id);
                  }
                }}
                className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#252528] text-yellow-400 font-bold"
                    : "text-slate-400 hover:text-white hover:bg-[#1A1A1C]"
                }`}
              >
                <IconComp className={`w-4 h-4 ${isFood ? "text-yellow-400" : "text-sky-400"}`} />
                <span>{cat.name}</span>
                {isFood && (
                  <span className="ml-auto text-[9px] bg-yellow-400/20 text-yellow-400 font-extrabold px-1.5 py-0.2 rounded-full">
                    24S
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Quick Twenty Four Seven Direct Shortcut */}
      <div className="pt-4 border-t border-[#262626]">
        <button
          onClick={() => navigateToApp()}
          className="w-full bg-gradient-to-r from-yellow-400/20 to-red-600/20 border border-yellow-500/30 hover:border-yellow-400 text-left p-3 rounded-2xl transition-all group"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-yellow-400 text-black font-extrabold flex items-center justify-center text-xs shrink-0 shadow-md">
              24S
            </div>
            <div>
              <span className="font-bold text-white text-xs block group-hover:text-yellow-400 transition-colors">
                Twenty Four Seven
              </span>
              <span className="text-[10px] text-slate-400">#1 Food & Drink</span>
            </div>
          </div>
        </button>
      </div>

    </aside>
  );
};
