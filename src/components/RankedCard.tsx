import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RankedCardProps {
  rank: number;
  id: string;
  name: string;
  category: string;
  icon: string;
  price?: string;
}

export const RankedCard: React.FC<RankedCardProps> = ({
  rank,
  id,
  name,
  category,
  icon,
  price = "View"
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/app/${id}`)}
      className="relative flex flex-col justify-between p-5 rounded-2xl bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-white/5 shadow-lg cursor-pointer transition-all min-w-[200px] sm:min-w-[220px] aspect-[4/5] group"
    >
      {/* Rank Number Badge */}
      <span className="text-3xl font-extrabold text-gray-500 dark:text-zinc-600 select-none">
        {rank}
      </span>

      {/* Center App Icon & Info */}
      <div className="flex flex-col items-center text-center my-auto space-y-2">
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=180&q=80";
          }}
        />
        <div className="w-full">
          <h4 className="text-sm font-bold text-white truncate px-1 group-hover:text-blue-400 transition-colors">
            {name}
          </h4>
          <p className="text-xs text-gray-400 truncate mt-0.5 font-medium">
            {category}
          </p>
        </div>
      </div>

      {/* Bottom View Button */}
      <div className="flex justify-center pt-2">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/app/${id}`);
          }}
          className="px-5 py-1.5 rounded-full bg-[#2C2C2E] group-hover:bg-blue-600 group-hover:text-white text-blue-400 text-xs font-bold transition-all border border-white/10"
        >
          {price}
        </button>
      </div>
    </div>
  );
};
