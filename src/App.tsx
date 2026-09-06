import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { TodayPage } from './pages/TodayPage';
import { CategoryPage } from './pages/CategoryPage';
import { SearchResultsPage } from './pages/SearchResultsPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/games" element={<CategoryPage />} />
          <Route path="/apps" element={<CategoryPage />} />
          <Route path="/arcade" element={<CategoryPage />} />
          <Route path="/iphone" element={<CategoryPage />} />
          <Route path="/ipad" element={<CategoryPage />} />
          <Route path="/mac" element={<CategoryPage />} />
          <Route path="/watch" element={<CategoryPage />} />
          <Route path="/tv" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="*" element={<Navigate to="/today" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};

export default App;
