import { notFound } from 'next/navigation';
import Link from 'next/link';
import { routes } from '@/utils/routes';
import { getPageConfig } from '../../../data/get-page-data';
import { ProductGallery } from './product-gallery';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const { allProducts, categories } = await getPageConfig();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className='py-16 bg-gray-50'>
      <div className='container-custom'>
        {/* Breadcrumbs */}
        <div className='mb-8'>
          <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
              <li className='inline-flex items-center'>
                <Link href={routes.home} className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600'>
                  <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                  </svg>
                  Strona główna
                </Link>
              </li>
              <li>
                <div className='flex items-center'>
                  <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <Link href={routes.oferta} className='ml-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ml-2'>
                  Oferta
                  </Link>
                </div>
              </li>
              <li aria-current='page'>
                <div className='flex items-center'>
                  <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='ml-1 text-sm font-medium text-gray-500 md:ml-2'>{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className='bg-white rounded-xl shadow-md overflow-hidden'>
          {/* Product Header */}
          <div className='p-6 border-b'>
            <div className='flex justify-between items-center'>
              <h1 className='font-serif text-3xl font-semibold'>{product.name}</h1>
              <div className='flex space-x-2'>
                {product.new && <span className='bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full'>NOWOŚĆ</span>}
                {product.bestseller && <span className='bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full'>BESTSELLER</span>}
              </div>
            </div>
          </div>

          {/* Product Content */}
          <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <ProductGallery images={product.images} mainImage={product.mainImage} />

              {/* Product Details */}
              <div className='space-y-6'>
                <div>
                  <h2 className='text-xl font-medium mb-3'>Opis</h2>
                  <p className='text-gray-600'>{product.description}</p>
                  <p className='text-gray-500 mt-2 text-sm italic'>Każdy wypiek przygotowuję osobiście z dbałością o detale i smak.</p>
                </div>

                <div>
                  <h2 className='text-xl font-medium mb-3'>Cena</h2>
                  <p className='text-primary-600 text-2xl font-bold'>{product.price.toFixed(2)} zł</p>
                </div>

                {product.size && (
                  <div>
                    <h2 className='text-xl font-medium mb-3'>Rozmiar</h2>
                    <p className='text-gray-600'>{product.size}</p>
                  </div>
                )}

                {/* Category */}
                <div>
                  <h2 className='text-xl font-medium mb-3'>Kategoria</h2>
                  <span className='inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm'>
                    {categories.find((c) => c.id === product.category)?.name}
                  </span>
                </div>

                {/* Back to products button */}
                <div className='pt-4'>
                  <Link href={routes.oferta} className='btn btn-primary'>
                    Powrót do produktów
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className='mt-12 space-y-6'>
              {product.ingredients && product.ingredients.length > 0 && (
                <div className='p-6 border border-primary-200 rounded-lg bg-primary-50'>
                  <h3 className='text-xl font-medium mb-4 text-primary-700 flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2' viewBox='0 0 20 20' fill='currentColor'>
                      <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                      <path
                        fillRule='evenodd'
                        d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Składniki
                  </h3>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700'>
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className='flex items-center'>
                        <span className='w-2 h-2 bg-primary-400 rounded-full mr-2'></span>
                        {ingredient}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.allergens && product.allergens.length > 0 && (
                <div className='p-6 border border-red-200 rounded-lg bg-red-50'>
                  <h3 className='text-xl font-medium mb-4 flex items-center text-red-700'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2' viewBox='0 0 20 20' fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Alergeny
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {product.allergens.map((allergen, index) => (
                      <span key={index} className='bg-white text-red-800 text-sm font-medium px-3 py-1.5 rounded border border-red-300 shadow-sm'>
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.nutritionalInfo && (
                <div className='p-6 border border-green-200 rounded-lg bg-green-50'>
                  <h3 className='text-xl font-medium mb-4 text-green-700 flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2' viewBox='0 0 20 20' fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Informacje o wartościach odżywczych
                  </h3>
                  <p className='text-gray-700 bg-white p-4 rounded-md border border-green-100'>{product.nutritionalInfo}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
