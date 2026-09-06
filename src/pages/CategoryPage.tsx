import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { HorizontalShelf } from '../components/HorizontalShelf';
import { TOP_APPS_WEEK, HOT_APPS_WEEK, HERO_CARDS } from '../data/appStoreData';
import { EditorialCard } from '../components/EditorialCard';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const location = useLocation();

  const path = location.pathname.replace('/', '').toUpperCase() || 'GAMES';

  return (
    <div className="space-y-10 pb-16">
      <Header title={path} subtitle={`Browse top ${path.toLowerCase()} curated for India`} showPlatforms={true} />

      {/* Featured Banner */}
      <div className="grid grid-cols-1 gap-6">
        <EditorialCard item={HERO_CARDS[0]} size="medium" />
      </div>

      {/* Category Apps Lists */}
      <HorizontalShelf
        title={`Top ${path} This Week`}
        subtitle="Most downloaded and top rated in India"
        apps={TOP_APPS_WEEK}
      />

      <HorizontalShelf
        title={`Trending ${path}`}
        subtitle="Hot picks and editor recommendations"
        apps={HOT_APPS_WEEK}
      />
    </div>
  );
};
