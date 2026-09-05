import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FEATURED_TODAY, EVENTS_LIST, CATS_GAMES, TWENTY_FOUR_SEVEN_APP } from "../data/appStoreData";
import { DandelionArt } from "../components/DandelionArt";
import { PikachuArt } from "../components/PikachuArt";
import { StoryModal } from "../components/StoryModal";
import { AppSimulatorModal } from "../components/AppSimulatorModal";
import { Sparkles, ArrowRight, Star, ChevronRight } from "lucide-react";

export const TodayPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStory, setActiveStory] = useState<any>(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const handleAiAppsStory = () => {
    setActiveStory({
      eyebrow: "TRY NOW",
      title: "3 AI apps we love",
      subtitle: "Unlock intelligence, creativity, and daily assistance",
      customArt: <DandelionArt />,
      bodyText: "Artificial Intelligence is transforming how we write, create, and solve problems daily. From instant conversational assistance to groundbreaking generative art, here are 3 remarkable AI applications featured on the App Store.",
      apps: FEATURED_TODAY[0].apps
    });
  };

  const handlePokemonStory = () => {
    setActiveStory({
      eyebrow: "OUR FAVOURITES",
      title: "Discover Pokémon on the App Store",
      subtitle: "Catch, battle, and sleep alongside your favorite Pokémon",
      customArt: <PikachuArt />,
      bodyText: "Step into the world of Pokémon! Whether exploring your real-world neighborhood in Pokémon GO, tracking your sleep with Snorlax, or competing in strategic card battles, experience the complete Pokémon ecosystem on iPhone.",
      apps: FEATURED_TODAY[1].apps
    });
  };

  const handleEventStory = (eventObj: any) => {
    if (eventObj.is24Seven) {
      navigate("/twenty-four-seven");
      return;
    }

    setActiveStory({
      eyebrow: eventObj.eyebrow,
      title: eventObj.title,
      subtitle: eventObj.subtitle,
      image: eventObj.image,
      bodyText: `Experience ${eventObj.title}. Participate in live in-game events, unlock special rewards, and join millions of active players on iOS.`
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-10 animate-fade-in text-white font-sans">
      
      {/* Top Breadcrumb & URL indicator matching reference screenshot */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
        <span>https://apps.apple.com/in/iphone/today</span>
      </div>

      {/* Hero Cards Carousel / Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Hero Card 1: 3 AI apps we love (Exact Dandelion Artwork) */}
        <div
          onClick={handleAiAppsStory}
          className="relative rounded-[32px] overflow-hidden bg-[#1D1D21] border border-[#2D2D32] shadow-2xl group cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between aspect-[4/3] sm:aspect-[16/10]"
        >
          {/* Background Artwork */}
          <div className="absolute inset-0 z-0">
            <DandelionArt />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#18181A] via-transparent to-black/20 z-10"></div>

          {/* Top Tag & Title */}
          <div className="relative z-20 p-6 sm:p-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#3B4D58] drop-shadow-sm font-sans">
              TRY NOW
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1E293B] mt-1 drop-shadow-sm">
              3 AI apps we love
            </h2>
          </div>

          {/* Bottom Bar: 3 App Icons */}
          <div className="relative z-20 p-5 bg-[#18181A]/95 backdrop-blur-md border-t border-white/10 flex items-center gap-3">
            
            {/* 1. ChatGPT Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold shadow-lg shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-black">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9013 6.0072 6.0072 0 0 0-4.6622-2.0792 6.0462 6.0462 0 0 0-5.834 4.0937 6.0072 6.0072 0 0 0-4.146 2.8988 6.0462 6.0462 0 0 0 .6765 7.1065 5.9847 5.9847 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.5098 2.9013 6.0072 6.0072 0 0 0 4.6622 2.0792 6.0462 6.0462 0 0 0 5.834-4.0937 6.0072 6.0072 0 0 0 4.146-2.8988 6.0462 6.0462 0 0 0-.6765-7.1065zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
              </svg>
            </div>

            {/* 2. Claude AI Icon */}
            <div className="w-12 h-12 rounded-2xl bg-black border border-slate-700 text-white flex items-center justify-center font-bold shadow-lg shrink-0">
              <span className="text-xl font-serif font-bold text-amber-100">✳︎</span>
            </div>

            {/* 3. Midjourney Icon */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-rose-500 text-white flex items-center justify-center font-bold shadow-lg shrink-0">
              <Sparkles className="w-6 h-6 fill-white" />
            </div>

            <div className="ml-auto text-xs text-slate-400 font-bold flex items-center gap-1">
              <span>Explore</span>
              <ChevronRight className="w-4 h-4 text-sky-400" />
            </div>

          </div>
        </div>

        {/* Hero Card 2: Discover Pokémon on the App Store (Exact Pikachu Vector Artwork) */}
        <div
          onClick={handlePokemonStory}
          className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#4EE2EC] via-[#26C6DA] to-[#00838F] border border-cyan-400/40 shadow-2xl group cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between aspect-[4/3] sm:aspect-[16/10]"
        >
          {/* Pikachu Background */}
          <div className="absolute inset-0 z-0">
            <PikachuArt />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#18181A] via-transparent to-black/20 z-10"></div>

          {/* Top Tag & Title */}
          <div className="relative z-20 p-6 sm:p-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-900 drop-shadow">
              OUR FAVOURITES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1 leading-tight drop-shadow-md">
              Discover Pokémon on the App Store
            </h2>
          </div>

          {/* Bottom Bar: 6 Pokémon App Icons */}
          <div className="relative z-20 p-5 bg-[#18181A]/95 backdrop-blur-md border-t border-white/10 flex items-center gap-2 overflow-x-auto">
            {FEATURED_TODAY[1].apps?.map((pApp, idx) => (
              <img
                key={idx}
                src={pApp.icon}
                alt={pApp.name}
                className="w-11 h-11 rounded-2xl object-cover border border-cyan-400/40 shadow-md shrink-0"
              />
            ))}
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=160&q=80"
              alt="Pokémon Extra"
              className="w-11 h-11 rounded-2xl object-cover border border-cyan-400/40 shadow-md shrink-0"
            />
            <div className="ml-auto text-xs text-cyan-300 font-bold flex items-center gap-1 shrink-0">
              <span>View</span>
              <ChevronRight className="w-4 h-4 text-cyan-300" />
            </div>
          </div>
        </div>

      </div>

      {/* Featured App Spotlight: Twenty Four Seven App of the Day */}
      <div 
        onClick={() => navigate("/twenty-four-seven")}
        className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-yellow-500/20 via-[#16171A] to-red-600/20 border border-yellow-500/40 p-6 sm:p-8 flex flex-col justify-between gap-6 cursor-pointer hover:border-yellow-400 transition-all shadow-2xl group aspect-[4/3] sm:aspect-[16/10]"
      >
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-yellow-400 text-black font-extrabold font-heading text-2xl flex items-center justify-center shadow-xl shadow-yellow-500/20 shrink-0 group-hover:scale-105 transition-transform">
            24S
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/30">
              APP OF THE DAY
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-yellow-400 transition-colors">
              {TWENTY_FOUR_SEVEN_APP.name}
            </h2>
            <p className="text-xs text-slate-300 line-clamp-2">
              {TWENTY_FOUR_SEVEN_APP.subtitle} • 24/7 Hot Dogs, Cold Coffee & Express 15-Min Delivery.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>{TWENTY_FOUR_SEVEN_APP.rating}</span>
            <span className="text-slate-500">({TWENTY_FOUR_SEVEN_APP.ratingCount})</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/twenty-four-seven");
            }}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs px-5 py-2.5 rounded-full shadow-lg shadow-yellow-500/30 transition-all flex items-center gap-1.5"
          >
            <span>VIEW APP PAGE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Today's Biggest Events Section */}
      <div className="space-y-4 pt-4">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-white">
            Today's Biggest Events
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            What to stream, play and enjoy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EVENTS_LIST.map((ev) => (
            <div
              key={ev.id}
              onClick={() => handleEventStory(ev)}
              className="group relative rounded-[28px] overflow-hidden bg-[#18181C] border border-[#2D2D32] cursor-pointer hover:border-slate-600 transition-all aspect-[4/3] flex flex-col justify-between p-5 shadow-xl"
            >
              <img
                src={ev.image}
                alt={ev.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/40 to-black/30"></div>

              <div className="relative z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-sky-500/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md">
                  {ev.badge}
                </span>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
                  {ev.eyebrow}
                </span>
                <h3 className="font-heading font-extrabold text-base text-white group-hover:text-sky-400 transition-colors mt-0.5">
                  {ev.title}
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                  {ev.subtitle}
                </p>
                <span className="text-[9px] text-slate-400 font-mono block mt-2 opacity-80 group-hover:opacity-100 truncate">
                  {ev.url}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cat Games Section */}
      <div className="space-y-4 pt-4 border-t border-[#26262A]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold text-sky-400 uppercase tracking-widest block">
              OUR FAVOURITES
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-white">
              Play with cats
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Sink your claws into these great games featuring frisky felines
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CATS_GAMES.map((catGame, idx) => (
            <div key={idx} className="bg-[#18181C] border border-[#2D2D32] rounded-2xl p-3 text-center space-y-2 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold text-xl mx-auto shadow-md">
                🐱
              </div>
              <h4 className="font-bold text-xs text-white truncate">{catGame.name}</h4>
              <p className="text-[10px] text-slate-400">{catGame.category}</p>
              <button 
                onClick={() => setIsSimulatorOpen(true)}
                className="bg-[#26262B] hover:bg-[#323238] text-sky-400 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase"
              >
                GET
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <StoryModal activeStory={activeStory} onClose={() => setActiveStory(null)} />
      <AppSimulatorModal isOpen={isSimulatorOpen} onClose={() => setIsSimulatorOpen(false)} />

    </div>
  );
};
