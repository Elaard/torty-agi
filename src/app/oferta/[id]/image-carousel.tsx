'use client';
import { useState } from 'react';
import Image from 'next/image';
import { PlaceholderImage } from '@/components/ui/placeholder-image';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no images, return placeholder
  if (!images || images.length === 0) {
    return (
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <PlaceholderImage text={alt} className="w-full h-96" />
      </div>
    );
  }

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative mb-12 group">
      {/* Main carousel container */}
      <div className="rounded-3xl overflow-hidden shadow-2xl relative">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - zdjęcie ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 text-gray-800 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Navigation arrows - only show if more than one image */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <div 
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full cursor-pointer shadow-md opacity-70 hover:opacity-100 transition-opacity"
            onClick={goToPrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          
          {/* Right Arrow */}
          <div 
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full cursor-pointer shadow-md opacity-70 hover:opacity-100 transition-opacity"
            onClick={goToNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </>
      )}

      {/* Thumbnail indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === slideIndex ? 'bg-primary-600 w-4' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};