'use client';
import { useEffect, useState } from 'react';
import { Product, Category } from '@/data/get-page-data';
import { ImageCarousel } from './image-carousel';

interface ProductModalProps {
  product: Product | null;
  categories: Category[];
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [mounted, setMounted] = useState(false);

  // Handle escape key press to close modal
  useEffect(() => {
    setMounted(true);
    
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Don't render anything on the server
  if (!mounted) return null;

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity !mt-0"
      onClick={onClose} // Close modal when clicking outside
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label="Zamknij"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          {/* Header with category badge */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-lg text-gray-700">{product.description}</p>
          </div>

          {/* Image Carousel */}
          <ImageCarousel
            images={product.images && product.images.length > 0 ? product.images : product.mainImage ? [product.mainImage] : []}
            alt={product.name}
          />
        </div>
      </div>
    </div>
  );
};