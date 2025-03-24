"use client";
import { useState } from "react";
import { Product } from "../../data/products";
import PlaceholderImage from "../ui/PlaceholderImage";
import ProductModal from "../ui/ProductModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {/* Product Image */}
        <div className="relative h-64 cursor-pointer" onClick={openModal}>
          <PlaceholderImage text={product.name} className="transition-transform duration-500 hover:scale-105" />

          {/* Product Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.new && <span className="bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded">NOWOŚĆ</span>}
            {product.bestseller && <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">BESTSELLER</span>}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-serif text-lg font-semibold mb-1 cursor-pointer hover:text-primary-600 transition-colors" onClick={openModal}>
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">{product.price.toFixed(2)} zł</span>
            <button className="btn btn-primary py-1 px-3 text-sm" onClick={openModal}>
              Więcej informacji
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal product={product} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
