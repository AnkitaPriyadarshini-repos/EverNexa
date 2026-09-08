import React, { createContext, useContext, useState } from "react";
import { TWENTY_FOUR_SEVEN_APP } from "../data/appStoreData";

const AppStoreContext = createContext();

export const AppStoreProvider = ({ children }) => {
  // Navigation tabs: 'today', 'games', 'apps', 'arcade', 'twenty_four_seven', 'category'
  const [activeTab, setActiveTab] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [deviceType, setDeviceType] = useState("iPhone"); // 'iPhone', 'iPad', 'Mac'
  const [activeApp, setActiveApp] = useState(TWENTY_FOUR_SEVEN_APP);

  // Story detail modal
  const [activeStory, setActiveStory] = useState(null);

  // Embedded Live App Simulator modal
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const navigateToApp = (appObj) => {
    setActiveApp(appObj || TWENTY_FOUR_SEVEN_APP);
    setActiveTab("twenty_four_seven");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppStoreContext.Provider
      value={{
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        deviceType,
        setDeviceType,
        activeApp,
        navigateToApp,
        activeStory,
        setActiveStory,
        isSimulatorOpen,
        setIsSimulatorOpen
      }}
    >
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => useContext(AppStoreContext);
