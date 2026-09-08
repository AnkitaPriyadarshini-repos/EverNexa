import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppCard } from '../components/AppCard';
import { RankedCard } from '../components/RankedCard';
import { EditorialCard } from '../components/EditorialCard';
import { StoryModal } from '../components/StoryModal';
import { 
  HERO_INDIE_SPOTLIGHT,
  ESSENTIAL_INDIE_GAMES, 
  STORY_RICH_INDIES,
  LETS_PLAY_GAMES, 
  TOP_PAID_INDIE, 
  TOP_FREE_INDIE, 
  COZY_INDIES,
  ALL_TIME_GREATS, 
  QUICK_LINKS 
} from '../data/indieData';
import { ChevronRight, ExternalLink } from 'lucide-react';

export const IndieGroupingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<any | null>(null);

  // Helper to chunk 3-column stacked grids matching Apple App Store grouping layout
  const chunkColumns = (list: any[]) => {
    const cols: any[][] = [];
    for (let i = 0; i < list.length; i += 3) {
      cols.push(list.slice(i, i + 3));
    }
    return cols;
  };

  const essentialCols = chunkColumns(ESSENTIAL_INDIE_GAMES);
  const storyCols = chunkColumns(STORY_RICH_INDIES);
  const letsPlayCols = chunkColumns(LETS_PLAY_GAMES);
  const cozyCols = chunkColumns(COZY_INDIES);
  const allTimeCols = chunkColumns(ALL_TIME_GREATS);

  return (
    <div className="space-y-12 pb-24 text-gray-900 dark:text-white">
      {/* Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Indie
        </h1>
      </div>

      {/* FEATURED INDIE HERO SPOTLIGHT CARD */}
      <section>
        <EditorialCard 
          item={HERO_INDIE_SPOTLIGHT} 
          size="hero" 
          onCardClick={(item) => setSelectedStory(item)}
        />
      </section>

      {/* SECTION 1: Essential Indie Games */}
      <section className="space-y-4">
        <div className="flex items-center gap-1 cursor-pointer group">
          <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors">
            Essential Indie Games
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium -mt-2">
          Small developers, big fun
        </p>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {essentialCols.map((col, cIdx) => (
            <div key={cIdx} className="w-[300px] sm:w-[340px] shrink-0 space-y-2">
              {col.map((app: any) => (
                <AppCard key={app.id} app={app} layout="compact" showCategory={false} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Story-Rich Indie Adventures (NEW) */}
      <section className="space-y-4 border-t border-gray-200 dark:border-zinc-800/80 pt-8">
        <div className="flex items-center gap-1 cursor-pointer group">
          <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors">
            Story-Rich Indie Adventures
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium -mt-2">
          Unforgettable narratives and emotional journeys
        </p>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {storyCols.map((col, cIdx) => (
            <div key={cIdx} className="w-[300px] sm:w-[340px] shrink-0 space-y-2">
              {col.map((app: any) => (
                <AppCard key={app.id} app={app} layout="compact" showCategory={false} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Let's Play */}
      <section className="space-y-4 border-t border-gray-200 dark:border-zinc-800/80 pt-8">
        <div className="flex items-center gap-1 cursor-pointer group">
          <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors">
            Let's Play
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {letsPlayCols.map((col, cIdx) => (
            <div key={cIdx} className="w-[300px] sm:w-[340px] shrink-0 space-y-2">
              {col.map((app: any) => (
                <AppCard key={app.id} app={app} layout="compact" showCategory={false} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Top Paid */}
      <section className="space-y-4 border-t border-gray-200 dark:border-zinc-800/80 pt-8">
        <div className="flex items-center gap-1 cursor-pointer group">
          <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors">
            Top Paid
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {TOP_PAID_INDIE.map((item) => (
            <RankedCard
              key={item.id}
              rank={item.rank}
              id={item.id}
              name={item.name}
              category={item.category}
              icon={item.icon}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* SECTION 5: Top Free */}
      <section className="space-y-4 border-t border-gray-200 dark:border-zinc-800/80 pt-8">
        <div className="flex items-center gap-1 cursor-pointer group">
          <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors">
            Top Free
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {TOP_FREE_INDIE.map((item) => (
            <RankedCard
              key={item.id}
              rank={item.rank}
              id={item.id}
              name={item.name}
              category={item.category}
              icon={item.icon}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* SECTION 6: Cozy & Relaxation Indies (NEW) */}
      <section className="space-y-4 border-t border-gray-200 dark:border-zinc-800/80 pt-8">
        <div className="flex items-center gap-1 cursor-pointer group">
          <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors">
            Cozy & Relaxation Indies
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium -mt-2">
          Unwind with peaceful puzzles, soothing music and warm simulations
        </p>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {cozyCols.map((col, cIdx) => (
            <div key={cIdx} className="w-[300px] sm:w-[340px] shrink-0 space-y-2">
              {col.map((app: any) => (
                <AppCard key={app.id} app={app} layout="compact" showCategory={false} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: All-Time Greats */}
      <section className="space-y-4 border-t border-gray-200 dark:border-zinc-800/80 pt-8">
        <div className="flex items-center gap-1 cursor-pointer group">
          <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors">
            All-Time Greats
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {allTimeCols.map((col, cIdx) => (
            <div key={cIdx} className="w-[300px] sm:w-[340px] shrink-0 space-y-2">
              {col.map((app: any) => (
                <AppCard key={app.id} app={app} layout="compact" showCategory={false} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: Quick Links */}
      <section className="space-y-4 border-t border-gray-200 dark:border-zinc-800/80 pt-8">
        <h2 className="text-xl sm:text-2xl font-bold">
          Quick Links
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 pt-2">
          {QUICK_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-zinc-800 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
            >
              <span>{link.title}</span>
              {link.external && <ExternalLink className="w-3.5 h-3.5 opacity-80" />}
            </a>
          ))}
        </div>
      </section>

      {/* Story Modal popup */}
      {selectedStory && (
        <StoryModal 
          activeStory={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
    </div>
  );
};
