"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { Product } from "../../data/products";

interface ProductsClientWrapperProps {
  initialProducts: Product[];
}

export default function ProductsClientWrapper({ initialProducts }: ProductsClientWrapperProps) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  // Here you could add filtering logic based on the ProductFilter component's state
  // For now, we're just displaying all products

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar with filters */}
      <div className="w-full lg:w-1/4">
        <ProductFilter />
      </div>

      {/* Product Grid */}
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
