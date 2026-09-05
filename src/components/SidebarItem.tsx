import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
  iconColor?: string;
  badge?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  label,
  icon: Icon,
  iconColor = "text-sky-400",
  badge
}) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === "/today" && location.pathname === "/");

  return (
    <Link
      to={to}
      className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
        isActive
          ? "bg-[#252528] text-white shadow-sm font-bold"
          : "text-slate-400 hover:text-white hover:bg-[#1A1A1C]"
      }`}
    >
      <Icon className={`w-4 h-4 ${iconColor}`} />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto text-[9px] bg-yellow-400/20 text-yellow-400 font-extrabold px-1.5 py-0.2 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};
