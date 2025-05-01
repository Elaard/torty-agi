import Link from 'next/link';
import { getPageConfig } from '../../data/get-page-data';
import { routes } from '@/utils/routes';
import RealizacjeClient from './realizacje-client';

interface RealizacjePageProps {
  searchParams: {
    kategoria?: string;
  };
}

export default async function RealizacjePage({ searchParams }: RealizacjePageProps) {
  const { allProducts, categories } = await getPageConfig('fetching from oferta page');
  
  const categoryFilter = searchParams.kategoria || 'all';
  
  // Filter products to only include those that have images
  const oferta = allProducts.filter(
    (product) => product.images && product.images.length > 0 && (categoryFilter === 'all' || product.category === categoryFilter)
  );
  
  return (
    <div className="py-16 bg-beige">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge badge-primary mb-4 inline-block transform rotate-1">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oferta
          </h1>
          <div className="h-1 w-20 bg-accent-500 mx-auto my-6 rounded-full"></div>
          <p className="text-secondary-600 max-w-2xl mx-auto mt-6 text-lg">
            Zapraszam do obejrzenia galerii moich prac. Każda realizacja to unikalne dzieło stworzone z pasją i dbałością o najdrobniejsze detale.
          </p>
        </div>

        <div className="space-y-8">
          {/* Horizontal Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link
              href={routes.oferta}
              className={`px-4 py-2 rounded-full transition-colors ${
                categoryFilter === 'all' ? 'bg-primary-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800 shadow-md'
              }`}
            >
              Wszystkie
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/oferta?kategoria=${category.id}`}
                className={`px-4 py-2 rounded-full transition-colors capitalize shadow-md ${
                  categoryFilter === category.id ? 'bg-primary-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Client component for gallery and modal */}
          <RealizacjeClient oferta={oferta} categories={categories} />

          {oferta.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-secondary-600">Brak realizacji w tej kategorii.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}