'use client';
import Image from 'next/image';
import { PlaceholderImage } from '../../components/ui/placeholder-image';
import { Product, Category } from '@/data/get-page-data';

interface ProductCardProps {
  onClick: (product: Product) => void;
  product: Product;
  categories: Category[];
}

export const ProductCard = ({ product, categories, onClick }: ProductCardProps) => {
  // Get the category name
  const categoryName = categories.find((c) => c.id === product.category)?.name || '';
  
  return (
    <div
      className='block group cursor-pointer'
      onClick={() => onClick(product)}
    >
      <article className="relative flex flex-col overflow-hidden h-full rounded-2xl bg-white transition-all duration-300 hover:shadow-xl border border-gray-100">
        {/* Main Image - Larger and more prominent */}
        <div className='relative aspect-[4/3] overflow-hidden rounded-t-2xl'>
          {product.mainImage ? (
            <Image
              src={product.mainImage}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <PlaceholderImage 
              text={product.name} 
              className='transition-transform duration-500 group-hover:scale-105' 
            />
          )}

          {/* Category Badge */}
          <div className='absolute top-3 left-3'>
            <span className='bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md'>
              {categoryName}
            </span>
          </div>

          {/* Multiple Images Badge */}
          {product.images && product.images.length > 1 && (
            <div className='absolute bottom-3 right-3 bg-white bg-opacity-80 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm'>
              {product.images.length} zdjęć
            </div>
          )}
        </div>

        {/* Realizacja Info */}
        <div className='p-6 flex-grow flex flex-col'>
          <h3 className='font-serif text-2xl font-semibold mb-3 group-hover:text-primary-600 transition-colors'>{product.name}</h3>
          <p className='text-gray-600 mb-5 line-clamp-3 flex-grow text-lg'>{product.description}</p>
          <div className='flex justify-between items-center mt-auto pt-4 border-t border-gray-100'>
            <span className='text-primary-600 font-medium group-hover:text-primary-800 transition-colors flex items-center gap-2 text-lg'>
              Zobacz galerię
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};