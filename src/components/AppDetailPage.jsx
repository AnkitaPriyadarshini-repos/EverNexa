import React, { useState } from "react";
import { TWENTY_FOUR_SEVEN_APP, OTHER_APPS } from "../data/appStoreData";
import { useAppStore } from "../context/AppStoreContext";
import { 
  Star, 
  Share2, 
  ChevronRight, 
  Sparkles, 
  Play, 
  Check, 
  Download, 
  Smartphone, 
  Info,
  ShieldCheck
} from "lucide-react";

export const AppDetailPage = () => {
  const { activeApp, setIsSimulatorOpen } = useAppStore();
  const app = activeApp || TWENTY_FOUR_SEVEN_APP;
  const [downloaded, setDownloaded] = useState(false);

  const handleGetClick = () => {
    setDownloaded(true);
    setIsSimulatorOpen(true);
  };

  return (
    <div className="p-6 lg:p-12 max-w-5xl mx-auto space-y-10 animate-fade-in text-slate-100 font-sans">
      
      {/* Top Breadcrumb & URL indicator */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
        <span>http://localhost:5173/twenty-four-seven</span>
      </div>

      {/* Header Info Section */}
      <div className="flex flex-col sm:flex-row items-start gap-6 border-b border-[#26262A] pb-8">
        
        {/* App Icon */}
        <div className="relative group">
          <img
            src={app.icon}
            alt={app.name}
            className="w-32 h-32 md:w-36 md:h-36 rounded-[28px] object-cover shadow-2xl border border-slate-700/80 group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Title, Subtitle, Developer, GET Button */}
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
                {app.name}
              </h1>
              <p className="text-slate-400 text-sm md:text-base font-medium mt-1">
                {app.subtitle}
              </p>
              <p className="text-sky-400 text-xs font-semibold mt-0.5 hover:underline cursor-pointer">
                {app.developer}
              </p>
            </div>

            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert("App Store link copied!");
              }}
              className="p-2.5 bg-[#252528] hover:bg-[#323236] rounded-full text-slate-300 transition-colors"
              title="Share App"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* GET / OPEN Button & Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={handleGetClick}
              className={`px-7 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
                downloaded
                  ? "bg-emerald-500 text-black shadow-emerald-500/30"
                  : "bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/30"
              }`}
            >
              {downloaded ? "OPEN APP SIMULATOR" : "GET"}
            </button>

            {app.inAppPurchases && (
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                In-App Purchases
              </span>
            )}

            <button
              onClick={() => setIsSimulatorOpen(true)}
              className="flex items-center gap-1.5 bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/30 px-4 py-2 rounded-full text-xs font-extrabold transition-all ml-auto"
            >
              <Play className="w-3.5 h-3.5 fill-yellow-400" />
              <span>TEST LIVE 24SEVEN APP</span>
            </button>
          </div>

        </div>

      </div>

      {/* Metrics Ribbon */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-4 border-b border-[#26262A] text-center text-xs">
        
        <div className="space-y-1">
          <span className="text-slate-500 font-bold uppercase text-[10px]">RATINGS</span>
          <div className="font-heading font-extrabold text-lg text-white flex items-center justify-center gap-1">
            <span>{app.rating}</span>
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <p className="text-[10px] text-slate-500">{app.ratingCount}</p>
        </div>

        <div className="space-y-1 border-l border-[#26262A]">
          <span className="text-slate-500 font-bold uppercase text-[10px]">AGE</span>
          <div className="font-heading font-extrabold text-lg text-white">{app.ageRating}</div>
          <p className="text-[10px] text-slate-500">Years Old</p>
        </div>

        <div className="space-y-1 border-l border-[#26262A]">
          <span className="text-slate-500 font-bold uppercase text-[10px]">CHART</span>
          <div className="font-heading font-extrabold text-lg text-white">#1</div>
          <p className="text-[10px] text-slate-500">{app.category}</p>
        </div>

        <div className="hidden md:block space-y-1 border-l border-[#26262A]">
          <span className="text-slate-500 font-bold uppercase text-[10px]">DEVELOPER</span>
          <div className="font-heading font-bold text-sm text-white truncate px-2">{app.seller}</div>
          <p className="text-[10px] text-slate-500">Official Retail</p>
        </div>

        <div className="hidden md:block space-y-1 border-l border-[#26262A]">
          <span className="text-slate-500 font-bold uppercase text-[10px]">SIZE</span>
          <div className="font-heading font-extrabold text-lg text-white">{app.size}</div>
          <p className="text-[10px] text-slate-500">Universal App</p>
        </div>

      </div>

      {/* iPhone Screenshots Gallery */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-lg text-white">Preview</h3>
          <span className="text-xs text-slate-500 font-medium">iPhone</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {app.screenshots.map((sc, idx) => (
            <div
              key={idx}
              onClick={() => setIsSimulatorOpen(true)}
              className="relative w-60 md:w-64 aspect-[9/19] rounded-[36px] overflow-hidden border-4 border-[#2D2D32] bg-slate-950 shrink-0 shadow-2xl cursor-pointer group hover:scale-[1.02] transition-all"
            >
              <img
                src={sc.url}
                alt={sc.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-extrabold text-white bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-yellow-400/40 inline-block shadow-lg">
                  {sc.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's New Section */}
      <div className="border-t border-[#26262A] pt-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-lg text-white">What's New</h3>
          <span className="text-xs text-slate-500 font-medium">Version {app.version}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-mono bg-[#18181B] p-4 rounded-2xl border border-slate-800">
          {app.versionNotes}
        </p>
      </div>

      {/* Description Section */}
      <div className="border-t border-[#26262A] pt-8 space-y-3">
        <h3 className="font-heading font-bold text-lg text-white">Description</h3>
        <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
          {app.description}
        </p>
      </div>

      {/* Ratings & Reviews */}
      <div className="border-t border-[#26262A] pt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-lg text-white">Ratings & Reviews</h3>
          <span className="text-xs text-sky-400 font-bold hover:underline cursor-pointer">
            See All Reviews
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {app.reviews.map((rev) => (
            <div key={rev.id} className="bg-[#18181B] border border-slate-800 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">{rev.author}</span>
                <span className="text-slate-500 text-[10px]">{rev.date}</span>
              </div>
              <div className="flex text-amber-400">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <h5 className="font-bold text-xs text-white">{rev.title}</h5>
              <p className="text-xs text-slate-400 leading-normal">{rev.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Information Table */}
      <div className="border-t border-[#26262A] pt-8 space-y-4">
        <h3 className="font-heading font-bold text-lg text-white">Information</h3>

        <div className="divide-y divide-[#26262A] text-xs">
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Provider</span>
            <span className="text-white font-medium">{app.seller}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Size</span>
            <span className="text-white font-medium">{app.size}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Category</span>
            <span className="text-sky-400 font-medium">{app.category}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Compatibility</span>
            <span className="text-white font-medium max-w-xs text-right">{app.compatibility}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Languages</span>
            <span className="text-white font-medium">{app.languages}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Age Rating</span>
            <span className="text-white font-medium">{app.ageRating}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Copyright</span>
            <span className="text-white font-medium">{app.copyright}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="text-slate-500">Price</span>
            <span className="text-white font-medium">{app.price}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
