import React, { useState } from 'react';
import { Header } from '../components/Header';
import { EditorialCard } from '../components/EditorialCard';
import { EditorialCarousel } from '../components/EditorialCarousel';
import { HorizontalShelf } from '../components/HorizontalShelf';
import { StoryModal } from '../components/StoryModal';
import { ALL_TODAY_SHELVES } from '../data/allTodayData';
import { TOP_APPS_WEEK, HOT_APPS_WEEK } from '../data/appStoreData';

export const TodayPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<any | null>(null);

  // Extract shelves
  const shelf1 = ALL_TODAY_SHELVES.find(s => s.shelfId === 1)?.items || [];
  const shelf2 = ALL_TODAY_SHELVES.find(s => s.shelfId === 2)?.items || [];
  const shelf3 = ALL_TODAY_SHELVES.find(s => s.shelfId === 3)?.items || [];
  const shelf4 = ALL_TODAY_SHELVES.find(s => s.shelfId === 4)?.items || [];
  const shelf5 = ALL_TODAY_SHELVES.find(s => s.shelfId === 5)?.items || [];

  return (
    <div className="space-y-12 pb-20">
      {/* Header with Date & Platform pills */}
      <Header title="Today" showPlatforms={true} />

      {/* SHELF 1: TOP FEATURED HERO CARDS */}
      {shelf1.length > 0 && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {shelf1.map((card) => (
            <EditorialCard 
              key={card.id} 
              item={card as any} 
              size="hero" 
              onCardClick={(item) => setSelectedStory(item)}
            />
          ))}
        </section>
      )}

      {/* SHELF 2: TODAY'S BIGGEST EVENTS */}
      {shelf2.length > 0 && (
        <section className="space-y-4">
          <div className="border-t border-gray-200 dark:border-zinc-800 pt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Today’s Biggest Events
            </h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium mt-1">
              What to stream, play and enjoy
            </p>
          </div>

          <EditorialCarousel>
            {shelf2.map((card) => (
              <div key={card.id} className="w-[85vw] sm:w-[500px] shrink-0 snap-start">
                <EditorialCard 
                  item={card as any} 
                  size="medium" 
                  onCardClick={(item) => setSelectedStory(item)}
                />
              </div>
            ))}
          </EditorialCarousel>
        </section>
      )}

      {/* SHELF 3: DISCOVER SOMETHING NEW */}
      {shelf3.length > 0 && (
        <section className="space-y-4">
          <div className="border-t border-gray-200 dark:border-zinc-800 pt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Discover Something New
            </h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium mt-1">
              Handpicked games, stories and creative tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {shelf3.map((card) => (
              <EditorialCard 
                key={card.id} 
                item={card as any} 
                size="tall" 
                onCardClick={(item) => setSelectedStory(item)}
              />
            ))}
          </div>
        </section>
      )}

      {/* SHELF 4: INDIE GAMES WE LOVE */}
      {shelf4.length > 0 && (
        <section className="space-y-4">
          <div className="border-t border-gray-200 dark:border-zinc-800 pt-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Indie Games We Love
            </h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium mt-1">
              Small developers, big fun
            </p>
          </div>

          <EditorialCarousel>
            {shelf4.map((card) => (
              <div key={card.id} className="w-[85vw] sm:w-[520px] shrink-0 snap-start">
                <EditorialCard 
                  item={card as any} 
                  size="medium" 
                  onCardClick={(item) => setSelectedStory(item)}
                />
              </div>
            ))}
          </EditorialCarousel>
        </section>
      )}

      {/* SHELF 5: FEATURED & TRENDING EXTENDED COLLECTION */}
      {shelf5.length > 0 && (
        <section className="space-y-12">
          {/* Top Apps This Week */}
          <HorizontalShelf 
            title="Top apps this week"
            subtitle="OUR FAVOURITES — Discover the best apps of the week from the App Store."
            apps={TOP_APPS_WEEK}
          />

          {/* Grid of editorial cards in Shelf 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {shelf5.filter(c => c.title && c.title !== "Top apps this week" && c.title !== "Hot this week ").slice(0, 4).map((card) => (
              <EditorialCard 
                key={card.id} 
                item={card as any} 
                size="medium" 
                onCardClick={(item) => setSelectedStory(item)}
              />
            ))}
          </div>

          {/* Hot This Week */}
          <HorizontalShelf 
            title="Hot this week"
            subtitle="NOW TRENDING — Popular games and essential daily apps"
            apps={HOT_APPS_WEEK}
          />

          {/* Remaining Editorial Cards in Shelf 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {shelf5.filter(c => c.title && c.title !== "Top apps this week" && c.title !== "Hot this week ").slice(4).map((card) => (
              <EditorialCard 
                key={card.id} 
                item={card as any} 
                size="medium" 
                onCardClick={(item) => setSelectedStory(item)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Story Modal popup when an editorial card is clicked */}
      {selectedStory && (
        <StoryModal 
          activeStory={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
    </div>
  );
};
