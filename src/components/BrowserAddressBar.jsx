import React, { useState, useEffect } from "react";
import { useAppStore } from "../context/AppStoreContext";
import { ArrowLeft, ArrowRight, RotateCw, Lock, Globe, X, Plus } from "lucide-react";

export const BrowserAddressBar = () => {
  const { activeTab, setActiveTab, activeApp, navigateToApp, activeStory } = useAppStore();

  // Compute current URL based on active view state
  const getCurrentUrl = () => {
    if (activeStory) {
      return "https://apps.apple.com/in/iphone/story/id1819964646";
    }
    if (activeTab === "twenty_four_seven" || activeTab === "food_drink") {
      return `https://apps.apple.com/in/app/${activeApp.slug || "twenty-four-seven"}/id${activeApp.id || "1049305223"}`;
    }
    if (activeTab === "games") return "https://apps.apple.com/in/iphone/games";
    if (activeTab === "apps") return "https://apps.apple.com/in/iphone/apps";
    if (activeTab === "arcade") return "https://apps.apple.com/in/iphone/arcade";
    return "https://apps.apple.com/in/iphone/today";
  };

  const getTabTitle = () => {
    if (activeStory) return "Story - App Store";
    if (activeTab === "twenty_four_seven" || activeTab === "food_drink") {
      return `${activeApp.name} on the App Store`;
    }
    if (activeTab === "games") return "Games for iPhone - App Store";
    if (activeTab === "apps") return "Apps for iPhone - App Store";
    if (activeTab === "arcade") return "Arcade for iPhone - App Store";
    return "Today for iPhone - App Store";
  };

  const [urlInput, setUrlInput] = useState(getCurrentUrl());

  useEffect(() => {
    setUrlInput(getCurrentUrl());
  }, [activeTab, activeApp, activeStory]);

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    const input = urlInput.toLowerCase();
    if (input.includes("twenty-four-seven") || input.includes("1049305223")) {
      navigateToApp();
    } else if (input.includes("games")) {
      setActiveTab("games");
    } else if (input.includes("apps")) {
      setActiveTab("apps");
    } else if (input.includes("arcade")) {
      setActiveTab("arcade");
    } else {
      setActiveTab("today");
    }
  };

  return (
    <div className="bg-[#1E1E22] border-b border-[#2C2C30] text-slate-300 font-sans select-none z-40">
      
      {/* Browser Tab Strip */}
      <div className="flex items-center gap-1 pt-2 px-3 bg-[#161618]">
        <div className="bg-[#1E1E22] border-t border-x border-[#2C2C30] rounded-t-xl px-4 py-1.5 flex items-center gap-2 max-w-xs text-xs font-medium text-white shadow-sm">
          <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span className="truncate">{getTabTitle()}</span>
          <X className="w-3 h-3 text-slate-400 hover:text-white shrink-0 ml-auto cursor-pointer" />
        </div>
        <button className="p-1 hover:bg-[#252529] rounded-full text-slate-400">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Navigation Controls & Address URL Bar */}
      <div className="p-2 px-4 flex items-center gap-3 bg-[#1E1E22]">
        
        {/* Back / Forward / Refresh Controls */}
        <div className="flex items-center gap-1 text-slate-400">
          <button 
            onClick={() => setActiveTab("today")}
            className="p-1.5 hover:bg-[#2A2A2E] rounded-lg hover:text-white transition-colors"
            title="Go to Today"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => navigateToApp()}
            className="p-1.5 hover:bg-[#2A2A2E] rounded-lg hover:text-white transition-colors"
            title="Go to Twenty Four Seven App"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="p-1.5 hover:bg-[#2A2A2E] rounded-lg hover:text-white transition-colors"
            title="Reload Page"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* URL Input Form */}
        <form onSubmit={handleUrlSubmit} className="flex-1 max-w-3xl">
          <div className="relative flex items-center">
            <Lock className="w-3.5 h-3.5 text-emerald-400 absolute left-3" />
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              className="w-full bg-[#121214] border border-[#2E2E34] focus:border-sky-500 rounded-full py-1.5 pl-9 pr-4 text-xs font-mono text-slate-200 outline-none transition-all shadow-inner"
            />
          </div>
        </form>

        {/* Quick Link Badge Buttons */}
        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
              activeTab === "today"
                ? "bg-sky-500 text-white border-sky-400"
                : "bg-[#2A2A2E] text-slate-300 border-slate-700 hover:text-white"
            }`}
          >
            /today
          </button>
          <button
            onClick={() => navigateToApp()}
            className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
              activeTab === "twenty_four_seven"
                ? "bg-yellow-400 text-black border-yellow-300"
                : "bg-[#2A2A2E] text-slate-300 border-slate-700 hover:text-white"
            }`}
          >
            /twenty-four-seven
          </button>
        </div>

      </div>

    </div>
  );
};
