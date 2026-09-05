import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { TodayPage } from "./pages/TodayPage";
import { GamesPage } from "./pages/GamesPage";
import { AppsPage } from "./pages/AppsPage";
import { ArcadePage } from "./pages/ArcadePage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { CategoryDetailPage } from "./pages/CategoryDetailPage";
import { TwentyFourSevenPage } from "./pages/TwentyFourSevenPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<Navigate to="/today" replace />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/arcade" element={<ArcadePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/:id" element={<CategoryDetailPage />} />
            <Route path="/twenty-four-seven" element={<TwentyFourSevenPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="*" element={<Navigate to="/today" replace />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </AppProvider>
  );
}
