import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Share2, Star, Download, Sparkles } from "lucide-react";

interface StoryModalProps {
  activeStory: any;
  onClose: () => void;
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Share2, Star, Download, Sparkles, ExternalLink } from "lucide-react";
import { AppCard } from "./AppCard";

interface StoryModalProps {
  activeStory: any;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ activeStory, onClose }) => {
  const navigate = useNavigate();

  if (!activeStory) return null;

  const heroImg = activeStory.heroImage || activeStory.image || activeStory.artworkUrl;
  const eyebrowText = activeStory.eyebrow || activeStory.category || "TODAY EDITORIAL";
  const titleText = activeStory.title;
  const subText = activeStory.subtitle || activeStory.description;

  // Extract apps list from either appsList or single app or apps array
  const apps: any[] = activeStory.appsList || activeStory.apps || (activeStory.app ? [activeStory.app] : []);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Story link copied to clipboard!");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-zinc-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-slide-up relative my-auto max-h-[90vh] flex flex-col text-gray-900 dark:text-zinc-100 font-sans"
      >
        {/* Story Banner Header */}
        <div className="relative min-h-[260px] sm:min-h-[320px] bg-zinc-900 overflow-hidden shrink-0 flex flex-col justify-end p-6 sm:p-8">
          {heroImg && (
            <img
              src={heroImg}
              alt={titleText}
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          {/* Close & Share floating controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-30">
            <button
              onClick={handleShare}
              title="Share story"
              className="p-2.5 bg-black/50 backdrop-blur-md hover:bg-black/70 text-white rounded-full transition-all shadow-md"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Close story"
              className="p-2.5 bg-black/50 backdrop-blur-md hover:bg-black/70 text-white rounded-full transition-all shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Banner Typography */}
          <div className="relative z-20 space-y-1 text-white">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400 block">
              {eyebrowText}
            </span>
            <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              {titleText}
            </h2>
            {subText && (
              <p className="text-sm text-gray-200 font-medium line-clamp-2 mt-1">
                {subText}
              </p>
            )}
          </div>
        </div>

        {/* Scrollable Story Editorial Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-gray-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            {activeStory.bodyText || activeStory.fullStory || activeStory.description || 
              "Discover cutting-edge apps and games handpicked by Apple App Store editors. Enjoy unique mechanics, gorgeous visual art, and thoughtful experience design."}
          </p>

          {activeStory.editorialQuote && (
            <blockquote className="border-l-4 border-blue-600 pl-4 py-1 italic text-gray-900 dark:text-zinc-100 font-medium bg-blue-50/50 dark:bg-blue-950/20 rounded-r-xl">
              "{activeStory.editorialQuote}"
            </blockquote>
          )}

          {/* Included Apps List */}
          {apps.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-zinc-800">
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-zinc-400">
                Apps Included in This Story ({apps.length})
              </h4>

              <div className="space-y-2">
                {apps.map((appItem: any) => (
                  <div key={appItem.id || appItem.name} className="bg-gray-50 dark:bg-zinc-900/90 rounded-2xl p-2 border border-gray-200/60 dark:border-zinc-800">
                    <AppCard app={appItem} layout="compact" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-bold text-xs rounded-full transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

