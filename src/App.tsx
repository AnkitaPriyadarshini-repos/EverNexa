import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { TodayPage } from './pages/TodayPage';
import { CategoryPage } from './pages/CategoryPage';
import { IndieGroupingPage } from './pages/IndieGroupingPage';
import { AppDetailPage } from './pages/AppDetailPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { TwentyFourSevenPage } from './pages/TwentyFourSevenPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { HealthCheckPage } from './pages/HealthCheckPage';

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
          <Route path="/indie" element={<IndieGroupingPage />} />
          <Route path="/grouping/174175" element={<IndieGroupingPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/iphone" element={<CategoryPage />} />
          <Route path="/ipad" element={<CategoryPage />} />
          <Route path="/mac" element={<CategoryPage />} />
          <Route path="/watch" element={<CategoryPage />} />
          <Route path="/tv" element={<CategoryPage />} />
          <Route path="/app/:appId" element={<AppDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/twenty-four-seven" element={<TwentyFourSevenPage />} />
          <Route path="/twenty-four-seven/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:id" element={<OrdersPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/system" element={<AdminDashboardPage />} />
          <Route path="/api/health" element={<HealthCheckPage />} />
          <Route path="*" element={<Navigate to="/today" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};

export default App;
