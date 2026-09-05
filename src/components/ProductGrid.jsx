import React from "react";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./ProductCard";
import { useApp } from "../context/AppContext";
import { SearchX, Sparkles } from "lucide-react";

export const ProductGrid = () => {
  const { activeCategory, searchQuery, setSearchQuery } = useApp();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="my-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-heading text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <span>
              {activeCategory === "all" ? "🔥 All 24Seven Favorites" : "Fresh & Ready Items"}
            </span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </h2>
          <p className="text-xs text-slate-400">
            Showing {filteredProducts.length} item{filteredProducts.length === 1 ? "" : "s"} available for 24/7 delivery
          </p>
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center my-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-slate-800 text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-bold text-white text-lg">No snacks or meals found</h3>
          <p className="text-xs text-slate-400 mt-1 mb-4">
            We couldn't find anything matching "{searchQuery}". Try searching for Hot Dogs, Coffee, or Pizza!
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="bg-yellow-400 text-black font-bold text-xs px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-all"
          >
            Clear Search Filter
          </button>
        </div>
      )}
    </section>
  );
};
