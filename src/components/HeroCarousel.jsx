import React, { useState, useEffect } from "react";
import { HERO_BANNERS } from "../data/promos";
import { useApp } from "../context/AppContext";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setActiveCategory } = useApp();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const banner = HERO_BANNERS[currentSlide];

  return (
    <div className="relative rounded-3xl overflow-hidden my-4 border border-white/10 shadow-2xl transition-all">
      <div 
        className="p-6 md:p-10 min-h-[220px] md:min-h-[260px] flex flex-col justify-between transition-all duration-700 relative"
        style={{ background: banner.bgGradient }}
      >
        {/* Glow overlay */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Tag & Slide Indicators */}
        <div className="flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-yellow-400 border border-yellow-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-yellow-400" />
            {banner.tag}
          </span>

          <div className="flex gap-1.5">
            {HERO_BANNERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? "w-7 bg-yellow-400" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Banner Content */}
        <div className="max-w-xl my-4 z-10">
          <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            {banner.title}
          </h1>
          <p className="text-slate-200 text-xs md:text-sm mt-2 font-medium max-w-lg drop-shadow">
            {banner.subtitle}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between z-10">
          <button
            onClick={() => setActiveCategory(banner.categoryFilter)}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs md:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-yellow-500/30 transition-all transform hover:scale-105 active:scale-95"
          >
            <span>{banner.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Nav Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length)}
              className="p-2 bg-black/40 hover:bg-black/70 rounded-full text-white/80 transition-all border border-white/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length)}
              className="p-2 bg-black/40 hover:bg-black/70 rounded-full text-white/80 transition-all border border-white/10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
