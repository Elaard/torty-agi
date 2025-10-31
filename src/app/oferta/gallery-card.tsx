'use client';
import Image from 'next/image';
import { PlaceholderImage } from '../../components/ui/placeholder-image';
import { Product } from '@/data/get-page-data';

interface GalleryCardProps {
  onClick: (product: Product) => void;
  product: Product;
}

export const GalleryCard = ({ product, onClick }: GalleryCardProps) => {
  return (
    <div
      className='block group cursor-pointer'
      onClick={() => onClick(product)}
    >
      <article className="relative overflow-hidden h-full rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
        {/* Image Container - Full focus on the image */}
        <div className='relative aspect-square overflow-hidden'>
          {product.mainImage ? (
            <Image
              src={product.mainImage}
              alt={product.name}
              width={600}
              height={600}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
            />
          ) : (
            <PlaceholderImage
              text={product.name}
              className='transition-all duration-700 group-hover:scale-110'
            />
          )}

          {/* Multiple Images Badge - Top right */}
          {product.images && product.images.length > 1 && (
            <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
              {product.images.length}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};
