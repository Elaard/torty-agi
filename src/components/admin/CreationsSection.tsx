"use client";

import { useState } from "react";
import { Product } from "@/data/get-page-data";

interface CreationsSectionProps {
  allProducts: Product[];
  creationIds: string[];
  updateCreations: (creationIds: string[]) => void;
}

export default function CreationsSection({ allProducts, creationIds, updateCreations }: CreationsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Get creation products
  const creationProducts = allProducts.filter((product) => creationIds.includes(product.id));

  // Get available products (not in creations)
  const availableProducts = allProducts.filter((product) => !creationIds.includes(product.id));

  // Filter available products based on search term
  const filteredAvailableProducts = availableProducts.filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a product to creations
  const addToCreations = (productId: string) => {
    updateCreations([...creationIds, productId]);
  };

  // Remove a product from creations
  const removeFromCreations = (productId: string) => {
    updateCreations(creationIds.filter((id) => id !== productId));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Nasze Kreacje</h2>
        <p className="text-gray-600">Produkty w sekcji "Nasze Kreacje" są wyświetlane na stronie głównej jako specjalne wypieki.</p>
      </div>

      {/* Current Creation Products */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Aktualne Kreacje</h3>
        {creationProducts.length === 0 ? (
          <p className="text-gray-500 italic">Brak produktów w sekcji kreacji</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {creationProducts.map((product) => (
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
                  onClick={() => removeFromCreations(product.id)}
                >
                  Usuń z kreacji
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Products to Creations */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Dodaj Produkty do Kreacji</h3>
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
                  onClick={() => addToCreations(product.id)}
                >
                  Dodaj do kreacji
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
