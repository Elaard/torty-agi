import Link from 'next/link';
import { Metadata } from 'next';
import { getPageConfig } from '../../data/get-page-data';
import { routes } from '@/utils/routes';
import ProductClient from '../oferta/product-client';

export const metadata: Metadata = {
  title: 'Oferta | Torty AGI | Nasze Wypieki',
  description: 'Pełna oferta wypieków - torty urodzinowe, weselne, babeczki, makaroniki i inne słodkości. Każdy wypiek robiony ręcznie z naturalnych składników.',
  keywords: 'oferta tortów, torty urodzinowe, torty weselne, babeczki, makaroniki, słodkości na zamówienie',
  openGraph: {
    title: 'Oferta | Torty AGI | Nasze Wypieki',
    description: 'Zobacz pełną ofertę wypieków. Każda realizacja robiona ręcznie z naturalnych składników.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://torty-agi.pl/oferta',
    siteName: 'Torty AGI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oferta Torty AGI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oferta | Torty AGI',
    description: 'Zobacz pełną ofertę naszych wypieków - torty, babeczki, makaroniki.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://torty-agi.pl/oferta',
  },
};

export default async function TortyOkolicznosciowePage({ searchParams }: { searchParams: Promise<{ kategoria?: string }> }) {
  const { allProducts, cakesVariants } = getPageConfig();
  const params = await searchParams;
  const filter = params.kategoria || 'all';

  const cakesOffer = allProducts.filter(product => product.category === 'cakes');

  // Filter products to only include those that have images
  const offer = cakesOffer.filter(
    (product) => product.images 
    && product.images.length > 0 
    && (filter === 'all' || filter === product.variant)
  );

  return (
    <div className="py-24 bg-cream min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-chocolate">
            Torty okolicznościowe
          </h1>
          <div className="h-1 w-20 bg-secondary-500 mx-auto my-6 rounded"></div>
        </div>

        <div className="space-y-8">
          {/* Horizontal Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link
              href={routes.tortyOkolicznosciowe}
              className={`px-5 py-2 rounded-full font-medium ${
                filter === 'all' ? 'bg-primary-600 text-white shadow-md' : 'bg-white hover:bg-primary-50 text-gray-700 shadow-sm border border-primary-200'
              }`}
            >
              Wszystkie
            </Link>

            {cakesVariants.map((cakeVariant) => (
              <Link
                key={cakeVariant.id}
                href={`${routes.tortyOkolicznosciowe}?kategoria=${cakeVariant.id}`}
                className={`px-5 py-2 rounded-full capitalize font-medium ${
                  filter === cakeVariant.id ? 'bg-primary-600 text-white shadow-md' : 'bg-white hover:bg-primary-50 text-gray-700 shadow-sm border border-primary-200'
                }`}
              >
                {cakeVariant.name}
              </Link>
            ))}
          </div>

          {/* Client component for gallery and modal */}
          <ProductClient offer={offer} categories={cakesVariants} />

          {offer.length === 0 && (
            <div className="text-center py-24 bg-white rounded-2xl shadow-md border border-primary-200">
              <p className="text-xl text-gray-600">Brak realizacji w tej kategorii.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
