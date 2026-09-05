import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { Header } from "./components/Header";
import { HeroCarousel } from "./components/HeroCarousel";
import { CategoryPills } from "./components/CategoryPills";
import { ProductGrid } from "./components/ProductGrid";
import { CustomizeModal } from "./components/CustomizeModal";
import { StampCardModal } from "./components/StampCardModal";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { LiveTrackerModal } from "./components/LiveTrackerModal";
import { StoreLocatorModal } from "./components/StoreLocatorModal";
import { SupportChatModal } from "./components/SupportChatModal";
import { Footer } from "./components/Footer";
import { ShoppingBag, Gift, MapPin } from "lucide-react";

const MainContent = () => {
  const { 
    toast, 
    phoneFrameMode, 
    cartCount, 
    subtotal, 
    setIsCartOpen,
    setIsStampModalOpen,
    setIsStoreLocatorOpen
  } = useApp();

  const appBody = (
    <div className="min-h-screen flex flex-col justify-between bg-[#0B0D10] text-slate-100">
      
      {/* Top Header */}
      <Header />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 flex-1 w-full pb-20">
        <HeroCarousel />
        <CategoryPills />
        <ProductGrid />
      </main>

      {/* Floating Bottom Bar for Mobile / Quick Actions */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl border border-yellow-500/30 px-5 py-2.5 rounded-full shadow-2xl shadow-black/80 max-w-sm w-11/12">
        <button
          onClick={() => setIsStoreLocatorOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white"
        >
          <MapPin className="w-4 h-4 text-red-500" />
          <span>Stores</span>
        </button>

        <div className="w-px h-5 bg-slate-800"></div>

        <button
          onClick={() => setIsStampModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-yellow-400"
        >
          <Gift className="w-4 h-4" />
          <span>24 Club</span>
        </button>

        <div className="w-px h-5 bg-slate-800"></div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-extrabold text-white bg-red-600 hover:bg-red-500 px-3 py-1.5 rounded-full shadow-lg shadow-red-600/30"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Cart ({cartCount})</span>
        </button>
      </div>

      {/* Modals & Drawers */}
      <CustomizeModal />
      <StampCardModal />
      <CartDrawer />
      <CheckoutModal />
      <LiveTrackerModal />
      <StoreLocatorModal />
      <SupportChatModal />

      {/* Toast Notification */}
      {toast && (
        <div className="toast-container font-bold text-xs">
          <span>{toast.message}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );

  if (phoneFrameMode) {
    return (
      <div className="min-h-screen bg-slate-950 py-6 px-2 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <span className="text-xs text-yellow-400 font-mono font-bold uppercase tracking-widest bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
            📱 iOS App Simulation Mode
          </span>
        </div>
        <div className="phone-mockup-wrapper w-full">
          <div className="phone-notch"></div>
          {appBody}
        </div>
      </div>
    );
  }

  return appBody;
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
