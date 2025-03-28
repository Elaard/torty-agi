"use client";
import { ProductCategory } from "@/data/get-page-data";
import { categories } from "../../data/products";

interface ProductFilterProps {
  filters: {
    priceRange: {
      min: number;
      max: number;
    };
    category: string;
  };
  setPriceRange: (max: number) => void;
  setCategory: (category: string) => void;
  categories: ProductCategory[];
}

export default function ProductFilter({ setPriceRange, setCategory, filters, categories }: ProductFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-serif text-xl font-semibold mb-6">Filtruj wypieki</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-800 mb-3">Kategorie</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCategory(category.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                filters.category === category.id ? "bg-primary-100 text-primary-700 font-medium" : "hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <div className="flex justify-between mb-3">
          <h3 className="font-medium text-gray-800">Zakres cenowy</h3>
          <span className="text-primary-600 font-medium">{filters.priceRange.max} zł</span>
        </div>
        <input
          type="range"
          min="10"
          max="300"
          value={filters.priceRange.max}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>10 zł</span>
          <span>300 zł</span>
        </div>
      </div>

      {/* Special Filters */}
      <div className="mb-8">
        <h3 className="font-medium text-gray-800 mb-3">Specjalne</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
            <span className="ml-2">Polecane</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
            <span className="ml-2">Bestsellery</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500" />
            <span className="ml-2">Nowości</span>
          </label>
        </div>
      </div>

      {/* Apply/Reset Buttons */}
      <div className="flex gap-3">
        <button className="btn btn-primary flex-1 py-2">Zastosuj filtry</button>
        <button
          className="btn btn-outline flex-1 py-2"
          onClick={() => {
            setCategory("all");
            setPriceRange(150);
          }}
        >
          Resetuj
        </button>
      </div>
    </div>
  );
}
