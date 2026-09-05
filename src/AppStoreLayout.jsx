import React from "react";
import { AppStoreProvider, useAppStore } from "./context/AppStoreContext";
import { BrowserAddressBar } from "./components/BrowserAddressBar";
import { AppStoreSidebar } from "./components/AppStoreSidebar";
import { AppStoreFooter } from "./components/AppStoreFooter";
import { AppDetailPage } from "./components/AppDetailPage";
import { TodayView } from "./components/TodayView";
import { GamesView } from "./components/GamesView";
import { AppsView } from "./components/AppsView";
import { AppSimulatorModal } from "./components/AppSimulatorModal";
import { StoryModal } from "./components/StoryModal";

const AppStoreMain = () => {
  const { activeTab } = useAppStore();

  const renderContent = () => {
    switch (activeTab) {
      case "twenty_four_seven":
      case "food_drink":
        return <AppDetailPage />;
      case "today":
        return <TodayView />;
      case "games":
      case "action":
      case "adventure":
      case "puzzle":
        return <GamesView />;
      case "apps":
      case "categories":
      case "photo_video":
      case "health_fitness":
      case "productivity":
      case "entertainment":
      case "indie":
        return <AppsView />;
      default:
        return <TodayView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 flex flex-col justify-between font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Top Interactive Browser Address Bar */}
      <BrowserAddressBar />

      {/* App Store Sidebar + Main Viewport */}
      <div className="flex flex-1 w-full min-h-screen">
        
        {/* Left Sidebar */}
        <AppStoreSidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#000000] min-h-screen flex flex-col justify-between">
          <div>
            {renderContent()}
          </div>
          
          {/* Apple App Store Footer */}
          <AppStoreFooter />
        </main>

      </div>

      {/* Interactive App Simulator Modal */}
      <AppSimulatorModal />
      <StoryModal />

    </div>
  );
};

export default function AppStoreLayout() {
  return (
    <AppStoreProvider>
      <AppStoreMain />
    </AppStoreProvider>
  );
}
