import React from "react";
import { useAppStore } from "../context/AppStoreContext";
import { X, Share2, Star, Download, Sparkles } from "lucide-react";

export const StoryModal = () => {
  const { activeStory, setActiveStory, setIsSimulatorOpen, navigateToApp } = useAppStore();

  if (!activeStory) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fade-in overflow-y-auto">
      <div className="bg-[#18181C] border border-[#2D2D32] rounded-[36px] max-w-2xl w-full overflow-hidden shadow-2xl animate-slide-up relative my-auto max-h-[92vh] flex flex-col text-slate-100 font-sans">
        
        {/* Story Banner Header */}
        <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden shrink-0">
          {activeStory.customArt ? (
            activeStory.customArt
          ) : (
            <img
              src={activeStory.image}
              alt={activeStory.title}
              className="w-full h-full object-cover"
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181C] via-[#18181C]/40 to-black/30"></div>

          {/* Close & Share buttons */}
          <div className="absolute top-5 right-5 flex items-center gap-2">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert("Story link copied!");
              }}
              className="p-2.5 bg-black/60 backdrop-blur-md hover:bg-black/80 rounded-full text-slate-200 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveStory(null)}
              className="p-2.5 bg-black/60 backdrop-blur-md hover:bg-black/80 rounded-full text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
              {activeStory.eyebrow}
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mt-1">
              {activeStory.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-1 font-medium">
              {activeStory.subtitle}
            </p>
          </div>
        </div>

        {/* Scrollable Story Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          
          <p className="text-sm text-slate-300 leading-relaxed">
            {activeStory.bodyText ||
              "Discover cutting-edge apps curated by the Apple App Store editorial team. Explore powerful tools, immersive entertainment, and 24/7 convenience at your fingertips."}
          </p>

          {/* Featured Apps List inside Story */}
          {activeStory.apps?.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                Featured Apps in This Story
              </h4>

              <div className="space-y-2.5">
                {activeStory.apps.map((app, idx) => (
                  <div
                    key={idx}
                    className="bg-[#222226] border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between gap-3 hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-12 h-12 rounded-2xl object-cover border border-slate-700 shadow-md"
                      />
                      <div>
                        <h5 className="font-bold text-xs text-white">{app.name}</h5>
                        <p className="text-[11px] text-slate-400">{app.category || "App Store Featured"}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (app.name.includes("Twenty Four Seven") || app.is24Seven) {
                          setActiveStory(null);
                          navigateToApp();
                        } else {
                          setIsSimulatorOpen(true);
                        }
                      }}
                      className="bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md"
                    >
                      GET
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#26262A] bg-[#141416] text-center">
          <button
            onClick={() => setActiveStory(null)}
            className="w-full bg-[#2A2A2E] hover:bg-[#34343A] text-white font-bold text-xs py-3 rounded-2xl transition-all"
          >
            Close Story
          </button>
        </div>

      </div>
    </div>
  );
};
