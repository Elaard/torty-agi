'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  mainImage: string;
  images: string[];
}

export const ProductGallery = ({ mainImage, images }: ProductGalleryProps) => {
  const [chosenImage, setChosenImage] = useState(mainImage);

  return (
    <div>
      <div className='bg-gray-100 rounded-lg overflow-hidden h-80 flex items-center justify-center shadow-md mb-4'>
        {chosenImage ? (
          <Image
            src={chosenImage}
            alt='zdjęcie główne produktu'
            width={600}
            height={600}
            className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-gray-200 text-gray-400'>Brak zdjęcia</div>
        )}
      </div>
      {images.length > 1 && (
        <div className='grid grid-cols-4 gap-2'>
          {images.map((imgUrl, index) => (
            <div
              key={index}
              onClick={() => setChosenImage(imgUrl)}
              className='aspect-square rounded overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500'
            >
              <Image src={imgUrl} alt={`Miniatura ${index + 1}`} width={100} height={100} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
