import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, RotateCw, Lock, Globe, Plus, X } from "lucide-react";

export const TopNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getFullUrl = () => {
    if (location.pathname === "/twenty-four-seven") {
      return "https://apps.apple.com/in/app/twenty-four-seven/id1049305223";
    }
    if (location.pathname === "/games") return "https://apps.apple.com/in/iphone/games";
    if (location.pathname === "/apps") return "https://apps.apple.com/in/iphone/apps";
    if (location.pathname === "/arcade") return "https://apps.apple.com/in/iphone/arcade";
    if (location.pathname === "/categories") return "https://apps.apple.com/in/iphone/categories";
    if (location.pathname.startsWith("/category/")) {
      return `https://apps.apple.com/in/iphone/category/${location.pathname.split("/")[2]}`;
    }
    return "https://apps.apple.com/in/iphone/today";
  };

  const getTabTitle = () => {
    if (location.pathname === "/twenty-four-seven") return "Twenty Four Seven on the App Store";
    if (location.pathname === "/games") return "Games for iPhone - App Store";
    if (location.pathname === "/apps") return "Apps for iPhone - App Store";
    if (location.pathname === "/arcade") return "Arcade for iPhone - App Store";
    return "Today for iPhone - App Store";
  };

  return (
    <header className="bg-[#1E1E22] border-b border-[#2C2C30] text-slate-300 font-sans select-none sticky top-0 z-30">
      
      {/* Browser Tab Strip */}
      <div className="flex items-center gap-1 pt-1.5 px-3 bg-[#161618]">
        <div className="bg-[#1E1E22] border-t border-x border-[#2C2C30] rounded-t-xl px-4 py-1 flex items-center gap-2 max-w-xs text-xs font-medium text-white shadow-sm">
          <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span className="truncate">{getTabTitle()}</span>
          <X className="w-3 h-3 text-slate-400 hover:text-white shrink-0 ml-auto cursor-pointer" />
        </div>
        <button className="p-1 hover:bg-[#252529] rounded-full text-slate-400">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Navigation Bar Row */}
      <div className="p-2 px-4 flex items-center gap-3 bg-[#1E1E22]">
        
        {/* Back / Forward / Refresh */}
        <div className="flex items-center gap-1 text-slate-400">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 hover:bg-[#2A2A2E] rounded-lg hover:text-white transition-colors"
            title="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="p-1.5 hover:bg-[#2A2A2E] rounded-lg hover:text-white transition-colors"
            title="Forward"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => window.location.reload()}
            className="p-1.5 hover:bg-[#2A2A2E] rounded-lg hover:text-white transition-colors"
            title="Reload"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Address Display Bar */}
        <div className="flex-1 max-w-3xl">
          <div className="relative flex items-center">
            <Lock className="w-3.5 h-3.5 text-emerald-400 absolute left-3" />
            <input
              type="text"
              readOnly
              value={getFullUrl()}
              className="w-full bg-[#121214] border border-[#2E2E34] focus:border-sky-500 rounded-full py-1.5 pl-9 pr-4 text-xs font-mono text-slate-200 outline-none shadow-inner"
            />
          </div>
        </div>

        {/* Quick Link Pills */}
        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <Link
            to="/today"
            className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
              location.pathname === "/today" || location.pathname === "/"
                ? "bg-sky-500 text-white border-sky-400"
                : "bg-[#2A2A2E] text-slate-300 border-slate-700 hover:text-white"
            }`}
          >
            /today
          </Link>
          <Link
            to="/twenty-four-seven"
            className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
              location.pathname === "/twenty-four-seven"
                ? "bg-yellow-400 text-black border-yellow-300"
                : "bg-[#2A2A2E] text-slate-300 border-slate-700 hover:text-white"
            }`}
          >
            /twenty-four-seven
          </Link>
        </div>

      </div>

    </header>
  );
};
