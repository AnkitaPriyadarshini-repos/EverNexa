import React from "react";
import { useApp } from "../context/AppContext";
import { X, Gift, Award, CheckCircle2, Sparkles, Trophy } from "lucide-react";

export const StampCardModal = () => {
  const { isStampModalOpen, setIsStampModalOpen, stamps, userPoints, membershipTier } = useApp();

  if (!isStampModalOpen) return null;

  const totalStamps = 10;
  const stampsRemaining = totalStamps - stamps;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border border-yellow-500/40 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-slide-up relative">
        
        {/* Glowing Background Header */}
        <div className="bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-red-600/20 p-6 text-center border-b border-yellow-500/20 relative">
          <button
            onClick={() => setIsStampModalOpen(false)}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 text-black rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-yellow-500/30 font-extrabold text-2xl">
            🎁
          </div>

          <span className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            {membershipTier}
          </span>

          <h2 className="font-heading font-extrabold text-2xl text-white mt-2">
            24Seven Stamp Club
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
            Collect 1 stamp on every order above ₹149. Get 1 FREE Signature Hot Dog + Cold Coffee on your 10th stamp!
          </p>
        </div>

        {/* Stamp Grid */}
        <div className="p-6 space-y-6">
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-bold text-white">Stamp Progress</span>
              <span className="text-yellow-400 font-extrabold">{stamps} / 10 Collected</span>
            </div>

            {/* Stamp Slots */}
            <div className="grid grid-cols-5 gap-3 my-2">
              {Array.from({ length: totalStamps }).map((_, index) => {
                const isCollected = index < stamps;
                const isRewardSlot = index === 9;

                return (
                  <div
                    key={index}
                    className={`aspect-square rounded-xl border flex flex-col items-center justify-center relative transition-all ${
                      isCollected
                        ? "bg-gradient-to-br from-yellow-400 to-amber-500 border-yellow-300 text-black shadow-lg shadow-yellow-500/30 scale-105"
                        : isRewardSlot
                        ? "bg-red-500/20 border-red-500 text-red-400 animate-pulse"
                        : "bg-slate-900 border-slate-800 text-slate-600"
                    }`}
                  >
                    {isCollected ? (
                      <span className="text-lg">🐾</span>
                    ) : isRewardSlot ? (
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <span className="text-xs font-bold">{index + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Subtext */}
            <p className="text-[11px] text-center text-slate-400 mt-3 font-medium">
              {stampsRemaining > 0
                ? `⚡ ${stampsRemaining} more order${stampsRemaining === 1 ? "" : "s"} left to claim your FREE Hot Dog Combo!`
                : "🎉 CONGRATULATIONS! Your stamp card is full. Claim your reward below!"}
            </p>
          </div>

          {/* User Club Points Summary */}
          <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-400/20 text-yellow-400 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Reward Points Balance</span>
                <span className="font-heading font-extrabold text-lg text-white">{userPoints} 24-Points</span>
              </div>
            </div>
            <button className="bg-slate-700 hover:bg-slate-600 text-yellow-400 font-bold text-xs px-3 py-1.5 rounded-lg border border-yellow-500/30 transition-all">
              Redeem
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 text-center">
          <button
            onClick={() => setIsStampModalOpen(false)}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs py-3 rounded-xl shadow-lg transition-all"
          >
            Got It! Keep Collecting Stamps
          </button>
        </div>

      </div>
    </div>
  );
};
