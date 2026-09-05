import React from "react";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";
import { AppStoreFooter } from "./AppStoreFooter";

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 flex flex-col justify-between font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Top Browser Navigation Bar */}
      <TopNavigation />

      {/* Main Viewport Grid */}
      <div className="flex flex-1 w-full min-h-screen">
        
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Scroll Container */}
        <main className="flex-1 overflow-y-auto bg-[#000000] min-h-screen flex flex-col justify-between">
          <div>
            {children}
          </div>
          
          {/* Apple Footer */}
          <AppStoreFooter />
        </main>

      </div>

    </div>
  );
};
