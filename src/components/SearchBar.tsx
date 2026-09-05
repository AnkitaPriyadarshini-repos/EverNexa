import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative px-1">
      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="w-full bg-[#1E1E1E] border border-[#2E2E2E] focus:border-[#444] rounded-lg py-1.5 pl-8 pr-7 text-xs text-white placeholder-slate-500 outline-none transition-all"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </form>
  );
};
