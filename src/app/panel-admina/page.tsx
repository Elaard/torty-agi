import { getPageConfig } from "@/data/get-page-data";
import React from "react";

export default async function Page() {
  const { promoted, allProducts } = await getPageConfig();

  const mainSection = allProducts.filter((product) => promoted.includes(product.id));

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-8">Panel admina</h1>
      <section>
        <h2 className="text-2xl font-semibold text-center mt-8">Produkty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {mainSection.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
              <p className="text-lg mt-2">{product.description}</p>
              <p className="text-lg mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-center mt-8">Zamówienia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mt-4">Zamówienie 1</h2>
            <p className="text-lg mt-2">Zamówienie 1</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mt-4">Zamówienie 2</h2>
            <p className="text-lg mt-2">Zamówienie 2</p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mt-4">Zamówienie 3</h2>
            <p className="text-lg mt-2">Zamówienie 3</p>
          </div>
        </div>
      </section>
    </>
  );
}
