"use client";

import { useState } from "react";
import { Product } from "@/data/get-page-data";

interface PromotedSectionProps {
  allProducts: Product[];
  promotedIds: string[];
  updatePromoted: (promotedIds: string[]) => void;
}

export default function PromotedSection({ allProducts, promotedIds, updatePromoted }: PromotedSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Get promoted products
  const promotedProducts = allProducts.filter((product) => promotedIds.includes(product.id));

  // Get available products (not promoted)
  const availableProducts = allProducts.filter((product) => !promotedIds.includes(product.id));

  // Filter available products based on search term
  const filteredAvailableProducts = availableProducts.filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a product to promoted
  const addToPromoted = (productId: string) => {
    updatePromoted([...promotedIds, productId]);
  };

  // Remove a product from promoted
  const removeFromPromoted = (productId: string) => {
    updatePromoted(promotedIds.filter((id) => id !== productId));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Produkty Promowane</h2>
        <p className="text-gray-600">Produkty promowane są wyświetlane na stronie głównej i w innych wyróżnionych miejscach.</p>
      </div>

      {/* Current Promoted Products */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Aktualnie Promowane</h3>
        {promotedProducts.length === 0 ? (
          <p className="text-gray-500 italic">Brak promowanych produktów</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {promotedProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 flex flex-col">
                <div className="flex items-center mb-3">
                  {product.mainImage && <img src={product.mainImage} alt={product.name} className="w-16 h-16 object-cover rounded mr-3" />}
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.price} zł</p>
                  </div>
                </div>
                <button
                  className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 mt-auto self-end"
                  onClick={() => removeFromPromoted(product.id)}
                >
                  Usuń z promowanych
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Products to Promoted */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Dodaj Produkty do Promowanych</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Szukaj produktów..."
            className="border rounded-md px-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredAvailableProducts.length === 0 ? (
          <p className="text-gray-500 italic">Brak dostępnych produktów do dodania</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAvailableProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 flex flex-col">
                <div className="flex items-center mb-3">
                  {product.mainImage && <img src={product.mainImage} alt={product.name} className="w-16 h-16 object-cover rounded mr-3" />}
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.price} zł</p>
                  </div>
                </div>
                <button
                  className="bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200 mt-auto self-end"
                  onClick={() => addToPromoted(product.id)}
                >
                  Dodaj do promowanych
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
