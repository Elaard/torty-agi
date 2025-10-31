'use client';
import { useEffect, useState } from 'react';
import { Product, Category } from '@/data/get-page-data';
import { ImageCarousel } from './image-carousel';

interface ProductModalProps {
  product: Product | null;
  categories: Category[];
  cakesVariants?: Category[];
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, categories, cakesVariants, isOpen, onClose }: ProductModalProps) => {
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

  // Get category name
  const categoryName = categories.find((c) => c.id === product.category)?.name || '';

  // Get variant name if product has variant
  const variantName = product.variant && cakesVariants
    ? cakesVariants.find((v) => v.id === product.variant)?.name
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity !mt-0"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 z-50 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          onClick={onClose}
          aria-label="Zamknij"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badges for category and variant (if exists) - positioned over the image */}
        <div className="absolute top-6 left-6 z-40 flex gap-2 flex-wrap">
          <span className="bg-primary-600/95 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
            {categoryName}
          </span>
          {variantName && (
            <span className="bg-secondary-500/95 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              {variantName}
            </span>
          )}
        </div>

        {/* Image Carousel - Full focus */}
        <div className="p-8">
          <ImageCarousel
            images={product.images && product.images.length > 0 ? product.images : product.mainImage ? [product.mainImage] : []}
            alt={product.name}
          />
        </div>
      </div>
    </div>
  );
};