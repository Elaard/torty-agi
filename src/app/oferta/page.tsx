import Link from 'next/link';
import { Metadata } from 'next';
import { getPageConfig } from '../../data/get-page-data';
import { routes } from '@/utils/routes';
import ProductClient from './product-client';

export const metadata: Metadata = {
  title: 'Oferta | Torty Tarnów | Torty Urodzinowe, Weselne | Torty AGI',
  description: 'Pełna oferta tortów w Tarnowie - torty urodzinowe, weselne, komunijne, babeczki, makaroniki. Domowe wypieki z naturalnych składników. Dostawa w Tarnowie i okolicach.',
  keywords: 'oferta tortów tarnów, torty urodzinowe tarnów, torty weselne tarnów, torty komunijne tarnów, babeczki tarnów, makaroniki tarnów, cukiernia tarnów oferta',
  openGraph: {
    title: 'Oferta | Torty Tarnów | Torty AGI',
    description: 'Zobacz pełną ofertę tortów w Tarnowie - urodzinowe, weselne, komunijne. Domowe wypieki z naturalnych składników.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://torty-agi.pl/oferta',
    siteName: 'Torty AGI - Torty Tarnów',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oferta Tortów Tarnów - Torty AGI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oferta | Torty Tarnów',
    description: 'Zobacz pełną ofertę tortów w Tarnowie - torty urodzinowe, weselne, babeczki, makaroniki.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://torty-agi.pl/oferta',
  },
};

export default async function RealizacjePage({ searchParams }: { searchParams: Promise<{ kategoria?: string }> }) {
  const { allProducts, categories, cakesVariants } = getPageConfig();
  const params = await searchParams;
  const categoryFilter = params.kategoria || 'all';

  // Filter products to only include those that have images
  const oferta = allProducts.filter(
    (product) => product.images && product.images.length > 0 && (categoryFilter === 'all' || product.category === categoryFilter)
  );

  return (
    <div className="py-24 bg-cream min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-chocolate">
            Torty na Zamówienie Tarnów
          </h1>
          <div className="h-1 w-20 bg-secondary-500 mx-auto my-6 rounded"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Zobacz nasze realizacje - <strong>torty urodzinowe, weselne, komunijne</strong> i inne słodkości dostępne w <strong>Tarnowie i okolicach</strong>
          </p>
        </div>

        <div className="space-y-8">
          {/* Horizontal Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link
              href={routes.oferta}
              className={`px-5 py-2 rounded-full font-medium ${
                categoryFilter === 'all' ? 'bg-primary-600 text-white shadow-md' : 'bg-white hover:bg-primary-50 text-gray-700 shadow-sm border border-primary-200'
              }`}
            >
              Wszystkie
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/oferta?kategoria=${category.id}`}
                className={`px-5 py-2 rounded-full capitalize font-medium ${
                  categoryFilter === category.id ? 'bg-primary-600 text-white shadow-md' : 'bg-white hover:bg-primary-50 text-gray-700 shadow-sm border border-primary-200'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Client component for gallery and modal */}
          <ProductClient offer={oferta} categories={categories} cakesVariants={cakesVariants} />

          {oferta.length === 0 && (
            <div className="text-center py-24 bg-white rounded-2xl shadow-md border border-primary-200">
              <p className="text-xl text-gray-600">Brak realizacji w tej kategorii.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
