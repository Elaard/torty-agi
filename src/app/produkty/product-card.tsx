'use client';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceholderImage } from '../../components/ui/placeholder-image';
import { Product, ProductCategory } from '@/data/get-page-data';
import { routes } from '@/utils/routes';

interface ProductCardProps {
  product: Product;
  categories: ProductCategory[];
}

export const ProductCard = ({ product, categories }: ProductCardProps) => {
  return (
    <Link href={routes.getProduct(product.id)} className='block'>
      <article className='group relative flex flex-col overflow-hidden h-full rounded-xl bg-white transition-all hover:shadow-lg '>
        {/* Product Image - Larger and more prominent */}
        <div className='relative aspect-square overflow-hidden'>
          {product.mainImage ? (
             <Image
                src={product.mainImage}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
          ) : (
            <PlaceholderImage text={product.name} className='transition-transform duration-500 group-hover:scale-105' />
          )}

          {/* Product Badges - Redesigned */}
          <div className='absolute top-3 left-3 flex flex-col gap-1.5'>
            {product.new && <span className='bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full'>NOWOŚĆ</span>}
            {product.bestseller && <span className='bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full'>BESTSELLER</span>}
          </div>

          {/* Multiple Images Badge */}
          {product.images && product.images.length > 1 && (
            <div className='absolute bottom-3 right-3 bg-white bg-opacity-80 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm'>
              {product.images.length} zdjęć
            </div>
          )}
        </div>

        {/* Product Info - Cleaner layout */}
        <div className='p-5 flex-grow flex flex-col'>
          <h3 className='font-serif text-xl font-semibold mb-2 hover:text-primary-600 transition-colors'>{product.name}</h3>
          {categories.find((c) => c.id === product.category)?.name}
          <p className='text-gray-600 mb-4 line-clamp-3 flex-grow'>{product.description}</p>
          <div className='flex justify-between items-center mt-auto pt-3 border-t border-gray-100'>
            <span className='font-medium text-lg'>{product.price.toFixed(2)} zł</span>
            <span className='text-primary-600 font-medium hover:text-primary-800 transition-colors flex items-center gap-1'>
              Szczegóły
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
