import React from 'react';
import { Header } from '../components/Header';
import { EditorialCard } from '../components/EditorialCard';
import { EditorialCarousel } from '../components/EditorialCarousel';
import { HorizontalShelf } from '../components/HorizontalShelf';
import { 
  HERO_CARDS, 
  EVENT_CARDS, 
  DISCOVER_CARDS, 
  INDIE_CARDS, 
  TOP_APPS_WEEK, 
  HOT_APPS_WEEK 
} from '../data/appStoreData';

export const TodayPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Header with Date & Platform pills */}
      <Header title="Today" showPlatforms={true} />

      {/* SECTION 1: TOP EDITORIAL / FEATURED HERO CARDS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {HERO_CARDS.map((card) => (
          <EditorialCard key={card.id} item={card} size="hero" />
        ))}
      </section>

      {/* SECTION 2: TODAY'S BIGGEST EVENTS */}
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
          {EVENT_CARDS.map((card) => (
            <div key={card.id} className="w-[85vw] sm:w-[500px] shrink-0 snap-start">
              <EditorialCard item={card} size="medium" />
            </div>
          ))}
        </EditorialCarousel>
      </section>

      {/* SECTION 3: DISCOVER SOMETHING NEW */}
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
          {DISCOVER_CARDS.map((card) => (
            <EditorialCard key={card.id} item={card} size="tall" />
          ))}
        </div>
      </section>

      {/* SECTION 4: INDIE GAMES WE LOVE */}
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
          {INDIE_CARDS.map((card) => (
            <div key={card.id} className="w-[85vw] sm:w-[520px] shrink-0 snap-start">
              <EditorialCard item={card} size="medium" />
            </div>
          ))}
        </EditorialCarousel>
      </section>

      {/* SECTION 5: FEATURED / TOP APPS THIS WEEK */}
      <section>
        <HorizontalShelf 
          title="Top apps this week"
          subtitle="OUR FAVOURITES — Discover the best apps of the week from the App Store."
          apps={TOP_APPS_WEEK}
        />
      </section>

      {/* SECTION 6: NOW TRENDING / HOT THIS WEEK */}
      <section>
        <HorizontalShelf 
          title="Hot this week"
          subtitle="NOW TRENDING — Popular games and essential daily apps"
          apps={HOT_APPS_WEEK}
        />
      </section>
    </div>
  );
};
