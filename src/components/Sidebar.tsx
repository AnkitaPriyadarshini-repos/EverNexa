import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Gamepad2, 
  Layers, 
  Joystick, 
  Search,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Tv,
  ShoppingBag,
  ShoppingCart,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { NAVIGATION_ITEMS, PLATFORMS } from '../data/appStoreData';
import { getCartSummary } from '../services/cartService';

interface SidebarProps {
  onSearchClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSearchClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const summary = getCartSummary();
      setCartCount(summary.itemCount);
    };

    updateCount();
    window.addEventListener('cart-updated', updateCount);
    return () => window.removeEventListener('cart-updated', updateCount);
  }, []);

  const getNavIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Joystick': return <Joystick className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'iphone': return <Smartphone className="w-4 h-4" />;
      case 'ipad': return <Tablet className="w-4 h-4" />;
      case 'mac': return <Laptop className="w-4 h-4" />;
      case 'watch': return <Watch className="w-4 h-4" />;
      case 'tv': return <Tv className="w-4 h-4" />;
      default: return <Smartphone className="w-4 h-4" />;
    }
  };

  return (
    <aside className="w-60 shrink-0 hidden lg:flex flex-col border-r border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl h-screen sticky top-0 px-4 py-6 select-none z-30">
      {/* Search Input Trigger */}
      <div className="mb-5">
        <button
          onClick={onSearchClick || (() => navigate('/search'))}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-xl transition-colors text-left"
        >
          <Search className="w-4 h-4 text-gray-400" />
          <span>Search</span>
        </button>
      </div>

      {/* Main Navigation */}
      <div className="space-y-1 mb-6">
        {NAVIGATION_ITEMS.filter(item => item.id !== 'search').map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/today' && location.pathname === '/');
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm font-semibold'
                  : 'text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-900'
              }`}
            >
              {getNavIcon(item.iconName)}
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>

      {/* 24/7 Convenience Store Section */}
      <div className="mb-6 pt-4 border-t border-gray-100 dark:border-zinc-900">
        <div className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>24/7 Store</span>
        </div>

        <div className="space-y-1">
          <NavLink
            to="/twenty-four-seven"
            className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              location.pathname.startsWith('/twenty-four-seven')
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-gray-700 dark:text-zinc-300 hover:bg-amber-50 dark:hover:bg-zinc-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4" />
              <span>24S Express</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/10 text-current font-bold">15 MIN</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
              location.pathname === '/cart'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <ShoppingCart className="w-4 h-4" />
              <span>My Cart</span>
            </div>
            {cartCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Device Platforms Selector */}
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-900">
        <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500">
          Device
        </div>
        <div className="space-y-0.5 mb-3">
          {PLATFORMS.map((plat) => {
            const isActive = location.pathname === plat.path;
            return (
              <NavLink
                key={plat.id}
                to={plat.path}
                className={`flex items-center gap-3 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-200 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-900'
                }`}
              >
                {getPlatformIcon(plat.id)}
                <span>{plat.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Admin Link */}
        <NavLink
          to="/admin"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold text-gray-400 dark:text-zinc-500 hover:text-gray-800 dark:hover:text-zinc-200 transition-colors"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Admin Portal</span>
        </NavLink>
      </div>
    </aside>
  );
};
