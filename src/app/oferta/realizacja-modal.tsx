'use client';
import { useEffect, useState } from 'react';
import { Product, ProductCategory } from '@/data/get-page-data';
import { ImageCarousel } from './image-carousel';

interface RealizacjaModalProps {
  realizacja: Product | null;
  categories: ProductCategory[];
  isOpen: boolean;
  onClose: () => void;
}

export const RealizacjaModal = ({ realizacja, categories, isOpen, onClose }: RealizacjaModalProps) => {
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

  if (!isOpen || !realizacja) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity"
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
            <h2 className="text-3xl font-bold mb-4">{realizacja.name}</h2>
            <p className="text-lg text-gray-700">{realizacja.description}</p>
          </div>

          {/* Image Carousel */}
          <ImageCarousel
            images={realizacja.images && realizacja.images.length > 0 ? realizacja.images : realizacja.mainImage ? [realizacja.mainImage] : []}
            alt={realizacja.name}
          />
        </div>
      </div>
    </div>
  );
};