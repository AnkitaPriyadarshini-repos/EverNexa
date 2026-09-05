import React, { useState } from "react";
import { STORES } from "../data/stores";
import { useApp } from "../context/AppContext";
import { X, MapPin, Store, Phone, Star, Search, CheckCircle2, Compass } from "lucide-react";

export const StoreLocatorModal = () => {
  const { isStoreLocatorOpen, setIsStoreLocatorOpen, setLocation, showToast } = useApp();
  const [storeQuery, setStoreQuery] = useState("");

  if (!isStoreLocatorOpen) return null;

  const filteredStores = STORES.filter(
    (st) =>
      st.name.toLowerCase().includes(storeQuery.toLowerCase()) ||
      st.address.toLowerCase().includes(storeQuery.toLowerCase())
  );

  const handleSelectStore = (st) => {
    setLocation({
      name: st.name,
      address: st.address,
      eta: "10 MINS",
      store: st.name
    });
    setIsStoreLocatorOpen(false);
    showToast(`Switched delivery location to near ${st.name}! 📍`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-yellow-400" />
            <div>
              <h2 className="font-heading font-extrabold text-xl text-white">24Seven Store Locator</h2>
              <p className="text-xs text-slate-400">Find 24/7 open stores & express delivery hubs near you</p>
            </div>
          </div>
          <button
            onClick={() => setIsStoreLocatorOpen(false)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={storeQuery}
              onChange={(e) => setStoreQuery(e.target.value)}
              placeholder="Search by area (CP, Cyber Hub, Hauz Khas, Noida)..."
              className="w-full bg-slate-900 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-xs text-white placeholder-slate-400 outline-none focus:border-yellow-400"
            />
          </div>
        </div>

        {/* Stores List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {filteredStores.map((st) => (
            <div
              key={st.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-yellow-400/50 rounded-2xl p-4 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-white text-sm">{st.name}</h3>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                      {st.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 flex items-start gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>{st.address}</span>
                  </p>
                </div>
                <span className="text-xs font-bold text-yellow-400 bg-slate-900 px-2.5 py-1 rounded-xl border border-slate-800 shrink-0">
                  {st.distance}
                </span>
              </div>

              {/* Store Features */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {st.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800"
                  >
                    • {feat}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href={`tel:${st.phone}`}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Call Store</span>
                </a>

                <button
                  onClick={() => handleSelectStore(st)}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs px-4 py-1.5 rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Deliver from Here</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
          <button
            onClick={() => setIsStoreLocatorOpen(false)}
            className="w-full bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl border border-slate-700 hover:bg-slate-700 transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
