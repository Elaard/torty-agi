"use client";
import { useState } from "react";
import PlaceholderImage from "../ui/PlaceholderImage";
import ProductModal from "../ui/ProductModal";
import { Product } from "@/data/get-page-data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white transition-all hover:shadow-lg">
        {/* Product Image - Larger and more prominent */}
        <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={openModal}>
          {product.mainImage ? (
            <img
              src={product.mainImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <PlaceholderImage text={product.name} className="transition-transform duration-500 group-hover:scale-105" />
          )}

          {/* Product Badges - Redesigned */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.new && <span className="bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">NOWOŚĆ</span>}
            {product.bestseller && <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">BESTSELLER</span>}
          </div>

          {/* Multiple Images Badge */}
          {product.images && product.images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-white bg-opacity-80 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {product.images.length} zdjęć
            </div>
          )}
        </div>

        {/* Product Info - Cleaner layout */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-serif text-xl font-semibold mb-2 cursor-pointer hover:text-primary-600 transition-colors" onClick={openModal}>
            {product.name}
          </h3>

          {/* Category tag */}
          {product.category && (
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-3">
              {product.category === "cakes"
                ? "Torty"
                : product.category === "chocolates"
                ? "Czekoladki"
                : product.category === "pastries"
                ? "Ciasta"
                : "Ciasteczka"}
            </span>
          )}

          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{product.description}</p>

          <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
            <span className="font-medium text-lg">{product.price.toFixed(2)} zł</span>
            <button className="text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center gap-1" onClick={openModal}>
              Szczegóły
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </article>

      {/* Product Modal */}
      <ProductModal product={product} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
