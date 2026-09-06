import React from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';

export const SearchResultsPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-16">
      <Header title="Search" subtitle="Find apps, games, stories and topics" showPlatforms={false} />
      <SearchBar />
    </div>
  );
};
