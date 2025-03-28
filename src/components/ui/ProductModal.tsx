import { useEffect, useRef } from "react";
import Image from "next/image";
import { Product } from "../../data/products";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Close modal with ESC key
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-serif text-2xl font-semibold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64 flex items-center justify-center shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={500} // Wybierz odpowiednią szerokość
                height={500} // Wybierz odpowiednią wysokość
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Opis</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Cena</h3>
                <p className="text-primary-600 text-xl font-bold">{product.price.toFixed(2)} zł</p>
              </div>

              {product.size && (
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Rozmiar</h3>
                  <p className="text-gray-600">{product.size}</p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-8 space-y-6">
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="p-4 border border-primary-200 rounded-lg bg-primary-50">
                <h3 className="text-lg font-medium mb-3 text-primary-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Składniki
                </h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                      {ingredient}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.allergens && product.allergens.length > 0 && (
              <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                <h3 className="text-lg font-medium mb-2 flex items-center text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Alergeny
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen, index) => (
                    <span key={index} className="bg-white text-red-800 text-xs font-medium px-2.5 py-1 rounded border border-red-300 shadow-sm">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.nutritionalInfo && (
              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="text-lg font-medium mb-2 text-green-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Informacje o wartościach odżywczych
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded-md border border-green-100">{product.nutritionalInfo}</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t p-4 flex justify-end">
          <button onClick={onClose} className="btn btn-secondary mr-2">
            Zamknij
          </button>
          <button className="btn btn-primary">Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  );
}
