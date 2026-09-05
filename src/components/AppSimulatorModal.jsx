import React from "react";
import { useAppStore } from "../context/AppStoreContext";
import { X, Smartphone, ArrowLeft } from "lucide-react";
import App from "../App"; // Import the full 24Seven Food Delivery App!

export const AppSimulatorModal = () => {
  const { isSimulatorOpen, setIsSimulatorOpen } = useAppStore();

  if (!isSimulatorOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col animate-fade-in">
      
      {/* Top App Store Simulator Bar */}
      <div className="bg-[#121212] border-b border-[#262626] px-4 py-2.5 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSimulatorOpen(false)}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#222225] px-3 py-1.5 rounded-full border border-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>Back to App Store Page</span>
          </button>

          <span className="hidden sm:inline text-slate-600">|</span>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono">
            <Smartphone className="w-4 h-4 text-yellow-400" />
            <span>App Store Interactive Simulator • Twenty Four Seven (id1049305223)</span>
          </div>
        </div>

        <button
          onClick={() => setIsSimulatorOpen(false)}
          className="p-1.5 bg-[#252528] hover:bg-[#323236] text-slate-300 hover:text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Embedded Live 24Seven Application */}
      <div className="flex-1 overflow-y-auto bg-[#0B0D10]">
        <App />
      </div>

    </div>
  );
};
