import React from "react";
import { useApp } from "../context/AppContext";
import { 
  MapPin, 
  Search, 
  ShoppingBag, 
  Gift, 
  Clock, 
  Smartphone, 
  Monitor, 
  Store,
  MessageCircle,
  ChevronDown
} from "lucide-react";

export const Header = () => {
  const {
    location,
    stamps,
    cartCount,
    subtotal,
    setIsCartOpen,
    setIsStampModalOpen,
    setIsStoreLocatorOpen,
    setIsSupportOpen,
    searchQuery,
    setSearchQuery,
    phoneFrameMode,
    setPhoneFrameMode
  } = useApp();

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-white/10 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Live Status */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-red-600 p-2.5 rounded-2xl shadow-lg shadow-yellow-500/20 flex items-center justify-center font-extrabold text-black tracking-tighter">
            <span className="font-heading text-xl lg:text-2xl leading-none">24</span>
            <span className="text-xs bg-black text-yellow-400 px-1 py-0.5 rounded ml-0.5 font-sans font-bold">SEVEN</span>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">24x7 CONVENIENCE</span>
            </div>
            <p className="text-[11px] text-slate-400">Always Open • Always Hot</p>
          </div>
        </div>

        {/* Location Selector Pill */}
        <div 
          onClick={() => setIsStoreLocatorOpen(true)}
          className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-full px-3.5 py-1.5 cursor-pointer transition-all hover:border-yellow-400/50 group"
        >
          <div className="bg-red-500/20 text-red-400 p-1.5 rounded-full group-hover:scale-110 transition-transform">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="text-left text-xs">
            <div className="flex items-center gap-1">
              <span className="font-bold text-white max-w-[120px] sm:max-w-[180px] truncate">{location.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
              <Clock className="w-3 h-3" />
              <span>⚡ Delivery in {location.eta}</span>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Hot Dogs, Cold Coffee, Ramen, Pizza..."
            className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-yellow-400 rounded-full py-2 left-3 pl-10 pr-4 text-xs text-white placeholder-slate-400 outline-none transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Right Actions: Stamp Rewards, Store Finder, Frame Toggle & Cart */}
        <div className="flex items-center gap-2.5">
          
          {/* Stamp Loyalty Club Button */}
          <button
            onClick={() => setIsStampModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-yellow-500/30 hover:border-yellow-400 text-yellow-400 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
          >
            <Gift className="w-4 h-4 text-yellow-400" />
            <span className="hidden sm:inline">24 Club</span>
            <span className="bg-yellow-400 text-black px-1.5 py-0.2 rounded-full font-bold text-[10px]">
              {stamps}/10 🐾
            </span>
          </button>

          {/* 24x7 Support Chat Button */}
          <button
            onClick={() => setIsSupportOpen(true)}
            className="flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700 transition-all"
            title="24x7 Customer Support Chat"
          >
            <MessageCircle className="w-4 h-4 text-yellow-400" />
            <span className="hidden md:inline">Support</span>
          </button>

          {/* Store Locator Button */}
          <button
            onClick={() => setIsStoreLocatorOpen(true)}
            className="hidden lg:flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-700 transition-all"
          >
            <Store className="w-4 h-4 text-slate-400" />
            <span>Stores</span>
          </button>

          {/* Responsive / Phone View Toggle */}
          <button
            onClick={() => setPhoneFrameMode(!phoneFrameMode)}
            className="hidden xl:flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white px-2.5 py-1.5 rounded-full text-xs transition-all"
            title="Toggle Phone Frame View"
          >
            {phoneFrameMode ? <Monitor className="w-4 h-4 text-yellow-400" /> : <Smartphone className="w-4 h-4" />}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg shadow-red-600/30 transition-all transform hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded-full text-[11px] min-w-[20px]">
                {cartCount} • ₹{subtotal}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
