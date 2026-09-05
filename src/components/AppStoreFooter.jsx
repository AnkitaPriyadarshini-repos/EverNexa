import React from "react";

export const AppStoreFooter = () => {
  return (
    <footer className="bg-[#0B0B0C] border-t border-[#1F1F22] py-8 px-6 lg:px-12 text-slate-500 text-xs mt-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-4">
        
        {/* Language selector bar */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-400 text-[11px] font-medium border-b border-[#1F1F22] pb-4">
          <span className="text-white font-bold">India</span>
          <span className="text-slate-600">|</span>
          <span className="hover:text-white cursor-pointer transition-colors">हिंदी</span>
          <span className="hover:text-white cursor-pointer transition-colors">ਪੰਜਾਬੀ</span>
          <span className="hover:text-white cursor-pointer transition-colors">मराठी</span>
          <span className="hover:text-white cursor-pointer transition-colors">বাংলা</span>
          <span className="hover:text-white cursor-pointer transition-colors">ଓଡ଼ିଆ</span>
          <span className="hover:text-white cursor-pointer transition-colors">اردو</span>
          <span className="hover:text-white cursor-pointer transition-colors">తెలుగు</span>
          <span className="hover:text-white cursor-pointer transition-colors">தமிழ்</span>
          <span className="hover:text-white cursor-pointer transition-colors">ગુજરાતી</span>
        </div>

        {/* Copyright & Legal links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between text-[11px] gap-2 pt-1">
          <p>Copyright © 2026 Apple Inc. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400">
            <a href="#terms" className="hover:text-white transition-colors">Internet Service Terms</a>
            <span>|</span>
            <a href="#privacy" className="hover:text-white transition-colors">App Store & Privacy</a>
            <span>|</span>
            <a href="#cookie" className="hover:text-white transition-colors">Cookie Warning</a>
            <span>|</span>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
