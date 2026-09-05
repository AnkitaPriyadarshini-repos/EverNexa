import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { SearchBar } from "./SearchBar";
import { CATEGORIES_LIST } from "../data/appStoreData";
import {
  Apple,
  ChevronDown,
  BookOpen,
  Rocket,
  Layers,
  Gamepad2,
  LayoutGrid,
  Camera,
  Activity,
  Send,
  Tv,
  UtensilsCrossed,
  Zap,
  Map,
  Puzzle,
  Gem,
  Menu,
  X
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  LayoutGrid,
  Camera,
  Activity,
  Send,
  Tv,
  UtensilsCrossed,
  Zap,
  Map,
  Puzzle,
  Gem
};

export const Sidebar: React.FC = () => {
  const [device, setDevice] = useState("iPhone");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2.5 bg-[#1E1E22] border border-[#2E2E32] text-white rounded-xl shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Body */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 w-64 bg-[#121212] border-r border-[#262626] h-screen flex flex-col justify-between p-4 text-slate-300 font-sans transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="space-y-5 overflow-y-auto">
          
          {/* Header Dropdown ( App Store for iPhone ˅) */}
          <div className="flex items-center justify-between px-1">
            <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-slate-200 transition-colors py-1">
              <Apple className="w-4 h-4 fill-white" />
              <span>App Store for {device}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Search Bar */}
          <SearchBar />

          {/* Main Navigation */}
          <div className="space-y-0.5">
            <SidebarItem to="/today" label="Today" icon={BookOpen} iconColor="text-sky-400" />
            <SidebarItem to="/games" label="Games" icon={Rocket} iconColor="text-blue-400" />
            <SidebarItem to="/apps" label="Apps" icon={Layers} iconColor="text-blue-500" />
            <SidebarItem to="/arcade" label="Arcade" icon={Gamepad2} iconColor="text-red-400" />
          </div>

          {/* Categories List */}
          <div className="space-y-0.5 pt-2 border-t border-[#222226]">
            <Link
              to="/categories"
              className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 block my-1 hover:text-white"
            >
              Categories
            </Link>

            {CATEGORIES_LIST.map((cat) => {
              const IconComp = ICON_MAP[cat.icon] || LayoutGrid;
              const isFood = cat.id === "food-drink";
              const targetRoute = isFood ? "/twenty-four-seven" : `/category/${cat.id}`;

              return (
                <SidebarItem
                  key={cat.id}
                  to={targetRoute}
                  label={cat.name}
                  icon={IconComp}
                  iconColor={isFood ? "text-yellow-400" : "text-sky-400"}
                  badge={isFood ? "24S" : undefined}
                />
              );
            })}
          </div>

        </div>

        {/* Bottom Twenty Four Seven Shortcut */}
        <div className="pt-3 border-t border-[#262626] shrink-0">
          <Link
            to="/twenty-four-seven"
            className="flex items-center gap-2.5 bg-gradient-to-r from-yellow-400/20 to-red-600/20 border border-yellow-500/30 hover:border-yellow-400 p-2.5 rounded-2xl transition-all group"
          >
            <div className="w-8 h-8 rounded-xl bg-yellow-400 text-black font-extrabold flex items-center justify-center text-xs shrink-0 shadow-md">
              24S
            </div>
            <div>
              <span className="font-bold text-white text-xs block group-hover:text-yellow-400 transition-colors">
                Twenty Four Seven
              </span>
              <span className="text-[10px] text-slate-400">#1 Food & Drink</span>
            </div>
          </Link>
        </div>

      </aside>
    </>
  );
};
